import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import Meta from '../components/Meta';
import TagList from '../components/TagList';

export default function TagsPage({ data: { drinks } }) {
  const tags = new Set();
  drinks.edges.forEach(({ node: { frontmatter } }) => {
    frontmatter.tags.forEach((tag) => tags.add(tag));
  });

  return (
    <Layout>
      <Meta title="Sidecar: All Tags" />
      <PageHeading>All Tags</PageHeading>
      <TagList tags={[...tags]} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query AllTags {
    drinks: allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/^/drinks//" } } }
      sort: { order: DESC, fields: [frontmatter___path] }
    ) {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
`;
