import React from 'react';
import { graphql } from 'gatsby';
import DrinkListLayout from '../components/layouts/DrinkListLayout';
import PageHeading from '../components/PageHeading';
import Meta from '../components/Meta';
import Explore from '../components/Explore';

export default function DrinksPage({ data: { drinks, images } }) {
  const imageMap = {};
  images.edges.forEach(({ node: { name, childImageSharp } }) => {
    imageMap[name] = childImageSharp;
  });
  return (
    <DrinkListLayout>
      <Meta title="Sidecar: All Drinks" />
      <PageHeading>All Drinks</PageHeading>
      <Explore
        drinks={drinks.edges.map((item) => item.node.frontmatter)}
        imageMap={imageMap}
      />
    </DrinkListLayout>
  );
}

export const pageQuery = graphql`
  query AllDrinks {
    drinks: allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/^/drinks//" } } }
      sort: { order: ASC, fields: [frontmatter___path] }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "DD MMM YYYY")
            glass
            family
            tags
            image {
              url
              alt
              align
            }
          }
        }
      }
    }
    images: allFile(
      filter: {
        relativePath: { regex: "/^drinks//" }
        sourceInstanceName: { eq: "images" }
      }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 130, webpQuality: 80) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }
  }
`;
