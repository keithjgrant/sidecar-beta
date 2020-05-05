import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import HomeTiles from '../components/homepage/HomeTiles';

function getDrinkObjects(result) {
  return result.edges.map((item) => item.node.frontmatter);
}

export default function IndexPage({ data: { recent, featured } }) {
  return (
    <Layout>
      <Meta title="Home" />
      <HomeTiles
        recent={getDrinkObjects(recent)}
        featured={getDrinkObjects(featured)}
      />
    </Layout>
  );
}

export const pageQuery = graphql`
  query FeaturedDrinks {
    featured: allMarkdownRemark(
      filter: { frontmatter: { featured: { eq: true } } }
      limit: 3
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "DD MMM YYYY")
            glass
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
    recent: allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/^/drinks//" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 3
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "MMMM DD, YYYY")
            glass
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
  }
`;
