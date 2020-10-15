# !important Gatsby theme

A minimal intrinsically responsive blog theme.

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

### Install @davidway/gatsby-theme-not-important-blog
```shell
npm install @davidway/gatsby-theme-not-important-blog
```

or

```shell
yarn add @davidway/gatsby-theme-not-important-blog
```

Then add the theme to your `gatsby-config.js`.

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
Create a folder at `src/images/posts` to contain images referenced in you post files.

An example file with the required frontmatter properties.

```md
---
title: On Typography
date: 2020-09-09
extract: Typography is the most important building block of your website
featuredImage: ../images/posts/typography-reference.jpg
featuredImageAlt: Image of type setting block
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

Note that this theme doesn't _do_ anything until the appropriate assets have been added, 
If you're seeing a missing resources error, create a simple page in `src/pages/index.js` to see a
page on the root url. An example index page can be seen in the Example pages section.

Add `.md` or `.mdx` files to the `src/posts` directory. These files will be transformed to pages at `/blog/[file-name]`.

The following [frontmatter](https://jekyllrb.com/docs/front-matter/) values are required at the start of the post files:
```yml
---
title: [Title of the post] # (*required)
date: 2020-09-12 # (*required)
extract: [extract describing the post]
tags:
- Syntax highlighting
- Feature
---
```

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
} from "@davidway/gatsby-theme-not-important-blog";
import Img from 'gatsby-image';

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
              {...(posts[0].frontmatter.featuredImage ? { media: <Img fluid={posts[0].frontmatter.featuredImage.childImageSharp.fluid} alt={posts[0].frontmatter.featuredImageAlt} /> } : {})}
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
                    key={post.slug}
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
          featuredImageAlt
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
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
} from "@davidway/gatsby-theme-not-important-blog";

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
        {posts && posts.length >= 0 && (
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
                      key={post.slug}
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

## Contributing

```
npm publish --access public
```
