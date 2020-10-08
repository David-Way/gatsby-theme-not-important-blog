import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Box, Center, Cluster, Header, Stack, Link, Tag } from '../components/index';
const shortcodes = { a: Link }; // Provide common components here

export default function PageTemplate({ data: { mdx, site: { siteMetadata } } }) {
  return (
    <Box padding="medium">
      <Center>
        <Stack spacing="medium">
          <Header title={siteMetadata.title} />
          <Cluster as="aside" justify="flex-start" spacing="x-small">
            {mdx.frontmatter.tags && mdx.frontmatter.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
          </Cluster>
          <main>
            <h1>{mdx.frontmatter.title}</h1>
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
          </main>
          <footer>
            <Link to="/">Back</Link>
          </footer>
        </Stack>
      </Center>
    </Box>
  )
};

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
        tags
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;