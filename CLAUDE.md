# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run serve    # Dev server (http://localhost:8080)
npm run build    # Production build to dist/
npm run lint     # ESLint + Prettier check/fix
```

No test suite is configured.

## Environment Variables

Required in `.env.local`:
```
VUE_APP_SUPABASE_URL=
VUE_APP_SUPABASE_PUBLISHABLE_KEY=
```

## Architecture

**Stack:** Vue 2 + Vue Router 3 + Vuex 3 + Supabase JS v2. Deployed via Firebase Hosting (config in `firebase.json`).

**Two distinct areas:**
- **Public portfolio** (`/`, `/portfolio`, `/blogs`, `/resume`, `/workProjectDetail/:id`) — visible to all visitors
- **Admin panel** (`/admin/*`) — protected by `meta: { requiresAuth: true }`, guarded in `src/router/index.js` via `store.getters["auth/isLoggedIn"]`

**Data flow:** All Supabase calls go through `src/ApiHelper/` (one file per resource). Vuex store modules (`src/store/modules/`) call the API helpers and hold fetched data. Components dispatch Vuex actions rather than calling Supabase directly.

**DB/Storage naming convention:** Supabase tables use `snake_case` (`is_public`, `thumbnail_path_ref`). API helpers expose `camelCase` to the app using `toAppPost`/`toDbPost` (or equivalent) mapper functions. The `thumbnail_data` field is a client-side-only attachment (never persisted).

**DB schema:** `supabase/schema.sql` — `blog_posts` and `project_posts` tables with RLS policies. Public `anon` role can only read rows where `is_public = true`; authenticated users have full access.

**SCSS:** Global variables, mixins, functions, and utility classes are auto-injected into every component via `vue.config.js` `additionalData`. No need to import them manually in `<style>` blocks.

**Custom AOS:** `aos.js` at repo root is a local Vue plugin wrapping the AOS scroll-animation library, registered globally in `main.js`.

**Icons:** Custom SVG icon component at `src/components/CustomIcons/MartzIcons.vue` (FontAwesome was removed).
