# !important Gatsby theme

A minimal blog theme.

## Installation
### Install the Gatsby CLI
```shell
npm install -g gatsby-cli
```

### Create a new site
```shell
gatsby new gatsby-site https://github.com/gatsbyjs/gatsby-starter-hello-world
```

### Change directories into site folder
```shell
cd gatsby-site
```

### Install @davidway/gatsby-theme-not-important-blog and it's dependencies
```shell
npm install @davidway/gatsby-theme-not-important-blog @carbon/themes @mdx-js/loader @mdx-js/mdx @mdx-js/react classnames gatsby gatsby-plugin-mdx gatsby-plugin-page-creator gatsby-plugin-react-helmet gatsby-plugin-sass gatsby-source-filesystem node-sass prop-types react react-dom react-helmet
```

Then add the theme to your `gatsby-config.js`. We'll use the long-form
here for educational purposes.

```javascript
module.exports = {
  siteMetadata: {
    title: `Creed Thoughts`,
    siteUrl: `https://www.creedthoughts.com`,
    description: `Creed thoughts`,
  },
  plugins: [
    {
      resolve: "@davidway/gatsby-theme-not-important-blog",
      options: {},
    },
  ],
}
```

Create a folder at `src/posts` to contain your markdown `.md` or `.mdx` files.

An example file with the required frontmatter properties.

```md
---
date: 2020-09-09
title: Typography [H1]
tags:
- Typography
- Gatsby
---

## Heading [H2]

- This
- Is
- an
- unordered
- list


> This is a quote

This a sentence with _emphasis_.

This is a **strong** sentence.

This is a sentence with `inline code` in it.
```

### Start development server
```shell
gatsby develop
```

Note that this site doesn't _do_ anything, so you're seeing a missing
resources error. Create a simple page in `src/pages/index.js` to see a
page on the root url.

```jsx
import React from "react"

export default function Home() {
  return <div>My Site!</div>
}
```

## Importing components from the theme

This theme provides a number of React components that can be imported and used in your own pages. The full list of components can be found in the [theme components folder](https://github.com/David-Way/gatsby-theme-not-important-blog/tree/master/src/components).

```js
// Some layout components
import { 
  Stack, // Layout component - Stacks and spaces elements horizontally
  Box, // Layout component - contains content
  Center, // Layout component - centers content
  Cluster, // Layout component - flexibly places and spaces horizontal elements
  Header, // Site header
  Link, // Links to locations
  Tag, // Displays meta information
} from "@davidway/gatsby-theme-not-important-blog";
```
