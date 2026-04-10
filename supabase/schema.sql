-- Documents table
create table if not exists documents (
  id uuid primary key default gen_random_uuid(),
  title text,
  source text,
  created_at timestamptz default now()
);

-- Chunks table
create table if not exists document_chunks (
  id uuid primary key default gen_random_uuid(),
  document_id uuid references documents(id) on delete cascade,
  chunk_index int,
  content text,
  embedding vector(3072), -- supports OpenAI, Anthropic, Cohere
  created_at timestamptz default now()
);

-- Indexes
create index if not exists idx_document_chunks_document_id
  on document_chunks(document_id);

create index if not exists idx_document_chunks_embedding
  on document_chunks using ivfflat (embedding vector_cosine_ops);
