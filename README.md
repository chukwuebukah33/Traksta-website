# Traksta

Public website for Traksta, the route-generation app for runners, walkers, and cyclists. This repo is a self-hosted recreation of the public pages at [traksta.base44.app](https://traksta.base44.app), so the product team owns the code.

## Prerequisites

- [Node.js](https://nodejs.org/) 20 or newer (LTS recommended)
- npm (included with Node.js)

## Run locally

From the repo root:

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123) in your browser. The dev server binds to `127.0.0.1` on port `43123` (see `package.json`).

### Other scripts

```bash
npm run build   # production build (same as Vercel)
npm run start   # serve the production build locally
npm run lint    # ESLint
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Marketing home |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/support` | Support and FAQ |
| anything else | 404 |

Images live in `public/images`. There is no account system or database. App Store, shop, and support email links point at the same public destinations as the live site.
