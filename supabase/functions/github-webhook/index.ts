// Supabase Edge Function: github-webhook
// Receives GitHub webhooks and stores them in events_raw

import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (req) => {
  try {
    const payload = await req.json();
    const eventType = req.headers.get("x-github-event") ?? "unknown";

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { error } = await supabase.from("events_raw").insert({
      event_type: eventType,
      payload,
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return new Response("Error storing event", { status: 500 });
    }

    return new Response("OK", { status: 200 });
  } catch (err) {
    console.error("Webhook error:", err);
    return new Response("Invalid payload", { status: 400 });
  }
});
