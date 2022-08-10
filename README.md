<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal starter
</h1>

[![Gatsby Publish](https://github.com/NovaGaia/poc-gatsby-git-hub-pages/actions/workflows/pages.yml/badge.svg)](https://github.com/NovaGaia/poc-gatsby-git-hub-pages/actions/workflows/pages.yml)

## 🚀 Quick start | Auto publish w/ `GitHub Actions` to `GitHub Pages`

- set `ACCESS_TOKEN` in [/settings/secrets/actions](/settings/secrets/actions) w/ your [Personnal Token](https://github.com/settings/tokens)
- add in `/.github/workflows` an new file `pages.yml`
- add this content (change branches name if needed) :

```yml
name: Gatsby Publish

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - uses: enriikke/gatsby-gh-pages-action@v2
        with:
          access-token: ${{ secrets.ACCESS_TOKEN }}
          deploy-branch: gh-pages
          gatsby-args: --prefix-paths
```

- in you GitHub repo, set repo as `public`.
- go to repo [Settings>Pages](/settings/pages) and enabled `Deploy from a branch` and
  - set `gh-pages` as `branch
  - set `/(root)` as folder
  - click save

Make your commit/push.
