create or replace function match_document_chunks(
  query_embedding vector(3072),
  match_count int default 10
)
returns table (
  id uuid,
  document_id uuid,
  content text,
  similarity float
)
language sql stable
as $$
  select
    dc.id,
    dc.document_id,
    dc.content,
    1 - (dc.embedding <=> query_embedding) as similarity
  from document_chunks dc
  order by dc.embedding <=> query_embedding
  limit match_count;
$$;
