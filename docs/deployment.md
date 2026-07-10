# Deployment Guide

This document explains how to build and deploy the Nexora Corporate Web frontend.

## Project Location

The frontend application is located in the `web` directory.

```text
nexora-corporate-web/
├─ docs/
├─ web/
│  ├─ src/
│  ├─ package.json
│  └─ vite.config.ts
└─ README.md
```

## Local Development

```bash
cd web
npm install
npm run dev
```

The local development server runs through Vite.

## Production Build

```bash
cd web
npm run build
```

The production build output is generated in:

```text
web/dist
```

## Preview Production Build

```bash
cd web
npm run preview
```

This command serves the production build locally for final verification.

## Deployment Notes

When deploying this project, use the `web` directory as the frontend project root.

### Netlify

Recommended settings:

```text
Base directory: web
Build command: npm run build
Publish directory: dist
```

### Vercel

Recommended settings:

```text
Root Directory: web
Build Command: npm run build
Output Directory: dist
```

## Checklist

Before deployment:

- Run `npm run build`
- Check that the build completes without errors
- Run `npm run preview` if a local production preview is needed
- Confirm that navigation links work correctly
- Confirm that the responsive layout works on mobile width
