# Sai Durga Mounish Madireddy — Portfolio

A responsive portfolio for a Senior Full Stack Developer and Technical Lead, built with React, TypeScript, Vinext/Vite and Tailwind CSS.

## Run locally

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

Create the static GitHub Pages build with:

```bash
npm run build:github-pages
```

## Update the portfolio

- Main content: `app/portfolio-data.ts`
- Page structure: `app/page.tsx`
- Colours and styling: `app/globals.css`
- Metadata: `app/layout.tsx`
- Résumé: `public/Sai-Durga-Mounish-Madireddy-Resume.pdf`
- Favicon: `public/favicon.svg`

To add a profile photo later, place it at `public/profile.jpg` and reference `/profile.jpg` in `app/page.tsx`. Project screenshots can be placed in `public/projects/` and referenced the same way.

## Upload to GitHub

Create an empty repository named `sai-mounish-portfolio`, then run:

```bash
git init
git add .
git commit -m "Create professional portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sai-mounish-portfolio.git
git push -u origin main
```

## Publish with GitHub Pages

The included workflow publishes the static Vite version automatically. After pushing the repository, open **Settings → Pages** and choose **GitHub Actions** under “Build and deployment.” The next push to `main` will publish the site. No repository-name or asset-path edits are needed.

## Custom domain

In your hosting provider, add the domain under project settings and copy the requested DNS records to your domain registrar. For GitHub Pages, open **Repository Settings → Pages → Custom domain**, enter the domain and enable HTTPS after DNS verification.

## Quality checklist

- Responsive mobile, tablet and desktop layouts
- Keyboard-visible focus states and skip navigation
- Reduced-motion support
- Semantic sections and headings
- Light and dark themes stored locally
- SEO title, description, keywords and Open Graph metadata
- Downloadable résumé and working email link
- Production build and lint scripts
