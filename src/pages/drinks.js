import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import Meta from '../components/Meta';
import DrinkList from '../components/DrinkList';

export default function DrinksPage({ data: { drinks } }) {
  return (
    <Layout>
      <Meta title="Sidecar: All Drinks" />
      <PageHeading>All Drinks</PageHeading>
      <DrinkList drinks={drinks.edges.map((item) => item.node.frontmatter)} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query AllDrinks {
    drinks: allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/^/drinks//" } } }
      sort: { order: DESC, fields: [frontmatter___path] }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "MMMM DD, YYYY")
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
