<p align="center">
  <a style="padding-right: 16px;" href="https://forestry.io">
    <img src="https://app.forestry.io/assets/forestry-logotype-pos-c71a6bd237d9199d0457ba2811553997ff5bab0d2cd0e740686ab26c00d9c240.svg" width="112" height="28">
  </a>
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Lola
</h1>

## About

[![Netlify Status](https://api.netlify.com/api/v1/badges/314f6fb1-b4a6-484a-ad3d-c26663a63bca/deploy-status)](https://app.netlify.com/sites/lola-gatsby-forestry/deploys)

Lola is a starter to get you going using [Gatsby v4](https://www.gatsbyjs.org/) with [Forestry](https://forestry.io/). Check out the demo [here]() (_port from [gatsby-starter-netlify-cms](https://github.com/netlify-templates/gatsby-starter-netlify-cms)_)

## Features

- Create dynamic pages from Forestry using a [block system](https://forestry.io/blog/blocks-give-your-editors-the-power-to-build-pages/) (see: `src/components/Sections`)
- Create Blog posts from Forestry CMS directly
- Customize easily the theme colors
- Simple Menu managment
- ...

##  Quick Setup

#### *Import Directly to Forestry*

<a href="https://app.forestry.io/quick-start?repo=mordonez/lola-gatsby-forestry&engine=gatsby">
    <img alt="Import this project into Forestry" src="https://assets.forestry.io/import-to-forestryK.svg" />
</a>

#### *Deploy to Netlify*

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/mordonez/lola-gatsby-forestry&amp;stack=cms"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

#### *Using the Gatsby CLI*
In your terminal, navigate to where you would like this blog to live, then run
```bash
gatsby new [SITE_DIRECTORY_NAME] https://github.com/mordonez/lola-gatsby-forestry
cd [SITE_DIRECTORY_NAME]
yarn dev
```
#### *Set-up Locally*
```bash
#clone the repo
git clone git@github.com:mordonez/lola-gatsby-forestry.git

#navigate to the directory
cd lola-gatsby-forestry

#install dependencies & run dev server with yarn
yarn install
yarn dev

#or with npm
npm install
npm run dev
```
# Blocks (Sections)

- Page heading `src/components/sections/PageHeading`,
- Image and text' `src/components/sections/ImageAndText`,
- Full Image': `src/components/sections/FullImage`,
- Columns': `src/components/sections/Columns`,
- Contact form': `src/components/sections/ContactForm`
## Prerequisites

- Minimal Node.js version 14.15.0
- [Gatsby CLI](https://www.gatsbyjs.com/docs/reference/gatsby-cli/)
- [Netlify CLI](https://github.com/netlify/cli)

### Access Locally

```
$ git clone <repo>
$ cd lola-gatsby-forestry
$ npm i
$ npm run develop
```

## Purgecss

This plugin uses [gatsby-plugin-purgecss](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/) and [bulma](https://bulma.io/). The bulma builds are usually ~170K but reduced 90% by purgecss.

