# ADMIT Workshop Website

Official website for the ADMIT Workshop. The site is a statically exported Next.js application hosted at <https://admit-workshop.github.io/>.

## Run locally

Requires Node.js 20 and Yarn.

```bash
corepack enable
yarn install
yarn dev
```

Open <http://localhost:3000>.

## Build

```bash
yarn build
```

The production-ready static site is generated in `out/`. Run `yarn lint` and `yarn typecheck` for the available code checks.

## SEO and AI discovery

`src/data/workshop.ts` supplies the page copy and search/social metadata. The
statically exported HTML contains the full workshop content and JSON-LD for the
website, page, and workshop, including its HiPEAC association, venue, and published
organizers. Edit confirmed facts there so the visible page and structured data
stay aligned. Keep unannounced speakers, submissions, and registration details out
of structured data until they are published on the page.

`src/app/robots.ts` and `src/app/sitemap.ts` export `/robots.txt` and `/sitemap.xml`.
The sitemap lists only the canonical homepage; section fragments are not separate
pages. No artificial build-time `lastmod` is emitted. Crawling is allowed for all
user agents, including search and AI discovery crawlers.

`src/app/share-image.png/route.tsx` renders the 1200 × 630 sharing image at build
time. Open Graph and Twitter cards include its absolute URL and descriptive alt
text. The page currently has no content images; navigation SVGs are decorative.
For any future content images, supply meaningful alt text (or empty alt text for
purely decorative images).

The editable favicon is `public/favicon.svg`. After changing it, run
`yarn generate:icons` to update the checked-in ICO and Apple touch icon.

The workshop JSON-LD currently specifies the confirmed date only. As checked on
10 September 2026, the [official HiPEAC listing](https://www.hipeac.net/events/sessions/8320/admit-accountable-decision-making-integrated-trust-autonomous-ai-systems/)
encodes the time with a `+01:00` offset, which differs from Glasgow in January.
Confirm the intended timezone before adding precise start/end timestamps. The
existing displayed schedule is preserved.

This follows [Google's guidance for AI features](https://developers.google.com/search/docs/appearance/ai-features):
make content crawlable, keep important information in text, and match structured
data to visible facts. These changes do not guarantee indexing or AI citations.
After deployment, submit `https://admit-workshop.github.io/sitemap.xml` in Search
Console and inspect the homepage and event markup.

## GitHub Pages deployment

Pushes to `main` run `.github/workflows/deploy.yml`. The workflow installs dependencies, builds the static export, uploads `out/` as a Pages artifact, and deploys it with GitHub's official Pages actions. The repository's Pages source must be set to **GitHub Actions**.

## Template and license

Based on the MIT-licensed [Nextly template](https://github.com/web3templates/nextly-template) by [Web3Templates](https://web3templates.com/). The original copyright and MIT terms are preserved in [LICENSE](LICENSE).
