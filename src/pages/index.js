import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Meta from '../components/Meta';
import HomeTiles from '../components/homepage/HomeTiles';

function getDrinkObjects(result) {
  return result.edges.map((item) => item.node.frontmatter);
}

export default function IndexPage({ data: { recent, featured } }) {
  console.log(getDrinkObjects(featured));
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
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "DD MMM YYYY")
            title
            glass
            tags
          }
        }
      }
    }
    recent: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 2
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            glass
            tags
          }
        }
      }
    }
  }
`;
