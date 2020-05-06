import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import PageHeading from '../components/PageHeading';
import DrinkList from '../components/DrinkList';

const Column = styled.div`
  margin: 0 auto;
`;

export default function DrinkTemplate({
  data: { drinks },
  pageContext: { tag },
}) {
  return (
    <Layout>
      <Meta title={`Drinks Tagged ‘${tag}’`} />
      <Column>
        <PageHeading>Drinks tagged &lsquo;{tag}&rsquo;</PageHeading>
        <DrinkList drinks={drinks.edges.map((item) => item.node.frontmatter)} />
      </Column>
    </Layout>
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
