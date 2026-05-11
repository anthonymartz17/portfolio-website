create table if not exists public.blog_posts (
	id uuid primary key default gen_random_uuid(),
	author text,
	title text not null,
	read_time integer,
	content text not null,
	date_posted text,
	thumbnail_path_ref text,
	is_public boolean not null default false,
	created_at timestamptz not null default now()
);

create table if not exists public.project_posts (
	id uuid primary key default gen_random_uuid(),
	name text not null,
	preview_description text not null,
	techs_implemented text[] not null default '{}',
	videos jsonb not null default '[]'::jsonb,
	website_link text,
	code_link text,
	content text not null,
	thumbnail_path_ref text,
	is_public boolean not null default false,
	created_at timestamptz not null default now()
);

alter table public.blog_posts enable row level security;
alter table public.project_posts enable row level security;

drop policy if exists "Public can read published blog posts" on public.blog_posts;
create policy "Public can read published blog posts"
on public.blog_posts
for select
to anon
using (is_public = true);

drop policy if exists "Authenticated users can manage blog posts" on public.blog_posts;
create policy "Authenticated users can manage blog posts"
on public.blog_posts
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Public can read published projects" on public.project_posts;
create policy "Public can read published projects"
on public.project_posts
for select
to anon
using (is_public = true);

drop policy if exists "Authenticated users can manage projects" on public.project_posts;
create policy "Authenticated users can manage projects"
on public.project_posts
for all
to authenticated
using (true)
with check (true);

insert into storage.buckets (id, name, public)
values
	('blog-thumbnails', 'blog-thumbnails', true),
	('project-thumbnails', 'project-thumbnails', true)
on conflict (id) do update set public = excluded.public;

drop policy if exists "Public can read blog thumbnails" on storage.objects;
create policy "Public can read blog thumbnails"
on storage.objects
for select
to anon
using (bucket_id = 'blog-thumbnails');

drop policy if exists "Authenticated users can manage blog thumbnails" on storage.objects;
create policy "Authenticated users can manage blog thumbnails"
on storage.objects
for all
to authenticated
using (bucket_id = 'blog-thumbnails')
with check (bucket_id = 'blog-thumbnails');

drop policy if exists "Public can read project thumbnails" on storage.objects;
create policy "Public can read project thumbnails"
on storage.objects
for select
to anon
using (bucket_id = 'project-thumbnails');

drop policy if exists "Authenticated users can manage project thumbnails" on storage.objects;
create policy "Authenticated users can manage project thumbnails"
on storage.objects
for all
to authenticated
using (bucket_id = 'project-thumbnails')
with check (bucket_id = 'project-thumbnails');
