This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Files

| File | What it does |
|------|-------------|
| `app/layout.tsx` | The root layout — wraps every page with the Navbar, Footer, fonts, and global metadata (page title, description). Think of it as the "shell" around all pages. |
| `app/page.tsx` | The homepage (`/`). Currently a Tailwind test page with color swatches, typography samples, buttons, and product cards. |
| `app/globals.css` | Global styles — imports Tailwind CSS and defines CSS variables for background/foreground colors and fonts. |
| `app/components/Navbar.tsx` | The top navigation bar. Sticky with a frosted glass effect, contains the store logo and links to all pages. |
| `app/components/Footer.tsx` | The site footer. Dark themed with three columns: brand info, quick links, and contact details. |

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
