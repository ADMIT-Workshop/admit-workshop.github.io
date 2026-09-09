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

## GitHub Pages deployment

Pushes to `main` run `.github/workflows/deploy.yml`. The workflow installs dependencies, builds the static export, uploads `out/` as a Pages artifact, and deploys it with GitHub's official Pages actions. The repository's Pages source must be set to **GitHub Actions**.

## Template and license

Based on the MIT-licensed [Nextly template](https://github.com/web3templates/nextly-template) by [Web3Templates](https://web3templates.com/). The original copyright and MIT terms are preserved in [LICENSE](LICENSE).
