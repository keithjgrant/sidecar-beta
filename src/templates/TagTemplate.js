import React from 'react';
import { graphql } from 'gatsby';
import DrinkListLayout from '../components/layouts/DrinkListLayout';
import Meta from '../components/Meta';
import PageHeading from '../components/PageHeading';
import DrinkList from '../components/DrinkList';

export default function DrinkTemplate({
  data: { drinks },
  pageContext: { tag },
}) {
  return (
    <DrinkListLayout>
      <Meta title={`Drinks Tagged ‘${tag}’`} />
      <PageHeading>Drinks tagged &lsquo;{tag}&rsquo;</PageHeading>
      <DrinkList drinks={drinks.edges.map((item) => item.node.frontmatter)} />
    </DrinkListLayout>
  );
}

export const pageQuery = graphql`
  query DrinksByTag($tag: String!) {
    drinks: allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { order: DESC, fields: [frontmatter___path] }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            path
            date(formatString: "DD MMM YYYY")
            glass
            image {
              url
              alt
              align
            }
          }
        }
      }
    }
  }
`;
