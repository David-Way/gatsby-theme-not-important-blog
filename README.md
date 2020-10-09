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

### Install @davidway/gatsby-theme-not-important-blogá
```shell
npm install @davidway/gatsby-theme-not-important-blog
```

or

```shell
yarn add @davidway/gatsby-theme-not-important-blog
```

Then add the theme to your `gatsby-config.js`. We'll use the long-form
here for educational purposes.

```javascript
module.exports = {
  siteMetadata: {
    title: `Creed Thoughts`,
    siteUrl: `https://www.creedthoughts.com`,
    description: `Creed thoughts`,
    navigation: [
      { url: '/', title: 'Home' },
      { url: '/blog', title: 'Blog' },
      { url: '/about', title: 'About' },
    ]
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
// src/pages/index.js
import React from "react";
import { graphql } from "gatsby";
import { 
  Stack,
  Box,
  Center,
  Header,
  Link,
} from "@davidway/gatsby-theme-not-important-blog";

export default function Home({ data }) {
  return (
    <Box padding="medium">
      <Center>
        <Stack spacing="medium">
          <Header
            title={data.site.siteMetadata.title}
            navigation={data.site.siteMetadata.navigation}
          />
          <main>
            <p>Hello world!</p>
          </main>
          <footer>
            <Link to="/">Back</Link>
          </footer>
        </Stack>
      </Center>
    </Box>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
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
