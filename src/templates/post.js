import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Box, Center, Cluster, Header, Stack, Link, Tag } from '../components/index';
import Highlight, { defaultProps } from "prism-react-renderer";
import github from 'prism-react-renderer/themes/github';

const shortcodes = { 
  a: Link,
  pre: props => {
    const className = props.children.props.className || '';
    const matches = className.match(/language-(?<lang>.*)/);
    return (
      <Highlight 
        {...defaultProps}
        theme={github}
        code={props.children.props.children.trim()}
        language={ matches && matches.groups && matches.groups.lang ? matches.groups.lang : '' }
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    );
  }
}; // Provide common components here

export default function PageTemplate({ data: { mdx, site } }) {
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
        <Box padding="medium">
          <Stack spacing="medium">
            <Stack spacing="small">
              <span>
                <Link to="/blog">Back</Link>
              </span>
              <h1>{mdx.frontmatter.title}</h1>
            </Stack>
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
          </Stack>
        </Box>
      </Center>
      
      <Center as="main">
        <Box padding="medium">
          <Cluster as="aside" justify="flex-start" spacing="x-small">
            {mdx.frontmatter.tags && mdx.frontmatter.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
          </Cluster>
        </Box>
      </Center>

      <Center>
        <Box as="footer" padding="medium">
          <Link to="/blog">Back</Link>
        </Box>
      </Center>
    </Stack>
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
        siteUrl
        navigation {
          title
          url
        }
      }
    }
  }
`;