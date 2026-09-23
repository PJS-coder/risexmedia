# RiseXMedia

Next.js 16 + TypeScript creative agency website.

## Run

npm install
npm run dev

Open http://localhost:3000.

## Production

npm run build

The static website is exported to `out/`. It can be deployed to a static host, or the project can be deployed to a Next.js host.

## Customize

- Page content: app/page.tsx
- Styles and responsive layouts: app/globals.css
- Metadata: app/layout.tsx
- Hero artwork: public/hero.png

Contact buttons link to https://www.instagram.com/risexmedia/.
Services cover social media marketing, influencer marketing, video editing, Instagram profile management, paid campaigns, content creation, branding, and websites. Client names and the influencer-management statement were supplied by the owner. No client results or testimonials have been fabricated.

The Google Fonts stylesheet loads DM Sans and Manrope; system sans-serif is the fallback.

Validation: production compilation and TypeScript passed. Service accordion checked in browser. npm audit reported zero vulnerabilities at delivery.

## Brand assets and motion

Client artwork sourced from Probo (https://probo.in/logo.avif), Profee (https://www.profee.com/images/logo.png), Alps Goodness (https://alpsgoodness.com), and Duolingo's press room (https://press.duolingo.com/fcdb8d3de437904fdc4f.svg). Duolingo's supplied mascot artwork is presented with a typeset brand label. Logos remain the property of their respective owners.

Scroll reveals use IntersectionObserver and respect reduced-motion preferences. Content remains visible without JavaScript, and keyboard focus reveals animated content.

## New hero artwork

Created using the built-in image-generation tool. Saved as `public/hero-megaphone.png`.
Prompt: Premium 3D product artwork for the center of a digital marketing hero: one floating futuristic megaphone, polished chrome horn, glossy vermilion-red interior, matte-black handle, diagonal silhouette, white softbox highlights and red rim light, transparent background, no text, logos, or additional objects.
