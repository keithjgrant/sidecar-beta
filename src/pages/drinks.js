import React from 'react';
import { graphql } from 'gatsby';
import DrinkListLayout from '../components/layouts/DrinkListLayout';
import PageHeading from '../components/PageHeading';
import Meta from '../components/Meta';
import DrinkList from '../components/DrinkList';

export default function DrinksPage({ data: { drinks } }) {
  return (
    <DrinkListLayout>
      <Meta title="Sidecar: All Drinks" />
      <PageHeading>All Drinks</PageHeading>
      <DrinkList drinks={drinks.edges.map((item) => item.node.frontmatter)} />
    </DrinkListLayout>
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
