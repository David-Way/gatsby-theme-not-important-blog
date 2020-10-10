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

#### Example pages

##### Index

```jsx
// src/pages/index.js
import React from "react";
import { graphql } from "gatsby";
import { 
  Stack,
  Box,
  Center,
  Reel,
  Header,
  Card,
  Cluster,
  Link,
} from "gatsby-theme-not-important-blog";

export default function Home({ data: { site, allMdx: { nodes: posts }} }) {
  return (
    <Stack spacing="medium">
      <Center>
        <Box padding="medium">
          <Header
            title={site.siteMetadata.title}
            titleUrl={site.siteMetadata.siteUrl}
            navigation={site.siteMetadata.navigation}
          />
        </Box>
      </Center>

      <Center as="main">
        {posts && posts.length > 0 && (
          <Box padding="medium">
            <h2 className="u-mt:none">Recent post</h2>
            <Card
              {...(posts[0].slug ? { to: `/blog/${posts[0].slug}` } : {})}
              {...(posts[0].frontmatter.title ? { title: posts[0].frontmatter.title } : {})}
              {...(posts[0].frontmatter.date || posts[0].frontmatter.meta ? { meta: [posts[0].frontmatter.date,...posts[0].frontmatter.tags] } : {})}
              {...(posts[0].frontmatter.extract ? { body: posts[0].frontmatter.extract } : {})}
            />
          </Box>
        )}

        {posts && posts.length >= 2 && (
          <>
            <Box padding="medium" className="u-pb:none">
              <Cluster justify="space-between" spacing="base">
                <h2>Other posts</h2>
                <Link to="/blog">See all posts</Link>
              </Cluster>
            </Box>

            <Reel spacing="medium">
              {posts.slice(1).map((post) => {
                return (
                  <Card
                    {...(post.slug ? { to: `/blog/${post.slug}` } : {})}
                    {...(post.frontmatter.title ? { title: post.frontmatter.title } : {})}
                    {...(post.frontmatter.date || post.frontmatter.meta ? { meta: [post.frontmatter.date,...post.frontmatter.tags] } : {})}
                    {...(post.frontmatter.extract ? { body: post.frontmatter.extract } : {})}
                  />
                );
              })}
            </Reel>
          </>
        )}
      </Center>

      <Center>
        <Box as="footer" padding="medium">
          <Cluster as="nav" justify="space-between" spacing="base" aria-label="footer">
            <Cluster justify="flex-start" spacing="base">
              <Link to="/blog">github</Link>
              <Link to="/blog">twitter</Link>
              <Link to="/blog">stack overflow</Link>
            </Cluster>
            <Link to="/blog">rss</Link>
          </Cluster>
        </Box>
      </Center>
    </Stack>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
        navigation {
          title
          url
        }
      }
    }
    allMdx(sort: {order: ASC, fields: frontmatter___date}) {
      nodes {
        slug
        frontmatter {
          title
          date
          extract
          tags
        }
      }
    }
  }
`;
```

##### Blog list page

```jsx
// Blog list page example
import React from "react";
import { graphql } from "gatsby";
import { 
  Stack,
  Box,
  Center,
  Header,
  Card,
  Cluster,
  Link,
} from "gatsby-theme-not-important-blog";

export default function Blog({ data: { site, allMdx: { nodes: posts }} }) {
  return (
    <Stack spacing="medium">
      <Center>
        <Box padding="medium">
          <Header
            title={site.siteMetadata.title}
            titleUrl={site.siteMetadata.siteUrl}
            navigation={site.siteMetadata.navigation}
          />
        </Box>
      </Center>

      <Center as="main">
        {posts && posts.length >= 2 && (
          <>
            <Box padding="medium" className="u-pb:none">
              <Cluster justify="space-between" spacing="base">
                <h2>Posts</h2>
              </Cluster>
            </Box>

            <Box padding="medium" className="u-pb:none">
              <Stack spacing="x-large">
                {posts.map((post) => {
                  return (
                    <Card
                      {...(post.slug ? { to: `/blog/${post.slug}` } : {})}
                      {...(post.frontmatter.title ? { title: post.frontmatter.title } : {})}
                      {...(post.frontmatter.date || post.frontmatter.meta ? { meta: [post.frontmatter.date,...post.frontmatter.tags] } : {})}
                      {...(post.frontmatter.extract ? { body: post.frontmatter.extract } : {})}
                    />
                  );
                })}
              </Stack>
            </Box>
          </>
        )}
      </Center>

      <Center>
        <Box as="footer" padding="medium">
          <Cluster as="nav" justify="space-between" spacing="base" aria-label="footer">
            <Cluster justify="flex-start" spacing="base">
              <Link to="/blog">github</Link>
              <Link to="/blog">twitter</Link>
              <Link to="/blog">stack overflow</Link>
            </Cluster>
            <Link to="/blog">rss</Link>
          </Cluster>
        </Box>
      </Center>
    </Stack>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
        navigation {
          title
          url
        }
      }
    }
    allMdx(sort: {order: ASC, fields: frontmatter___date}) {
      nodes {
        slug
        frontmatter {
          title
          date
          extract
          tags
        }
      }
    }
  }
`;
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
  Reel, // Layout component - Horizontal scroll area
  Header, // Site header
  Link, // Links to locations
  Tag, // Displays meta information
  Card, // Summary link card
} from "@davidway/gatsby-theme-not-important-blog";
```
