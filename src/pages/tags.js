import React from 'react';
import { graphql } from 'gatsby';
import SimpleListLayout from '../components/layouts/SimpleListLayout';
import PageHeading from '../components/PageHeading';
import Meta from '../components/Meta';
import TagList from '../components/TagList';

export default function TagsPage({ data: { drinks } }) {
  const tags = new Set();
  drinks.edges.forEach(({ node: { frontmatter } }) => {
    frontmatter.tags.forEach((tag) => tags.add(tag));
  });

  return (
    <SimpleListLayout title="All Tags" backHref="/drinks">
      <Meta title="Sidecar: All Tags" />
      {/* <PageHeading>All Tags</PageHeading> */}
      <TagList tags={[...tags].sort()} />
    </SimpleListLayout>
  );
}

export const pageQuery = graphql`
  query AllTags {
    drinks: allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/^/drinks//" } } }
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
