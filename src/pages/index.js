import React from 'react';
import { graphql } from 'gatsby';
import HomepageLayout from '../components/layouts/HomepageLayout';
import Meta from '../components/Meta';
import HomeTiles from '../components/homepage/HomeTiles';

function getDrinkObjects(result) {
  return result.edges.map((item) => item.node.frontmatter);
}

export default function IndexPage({
  data: { recent, featured, images, heroImage },
}) {
  const imageMap = {};
  images.edges.forEach(({ node: { name, childImageSharp } }) => {
    imageMap[name] = childImageSharp;
  });
  return (
    <HomepageLayout heroImage={heroImage}>
      <Meta title="Home" />
      <HomeTiles
        recent={getDrinkObjects(recent)}
        featured={getDrinkObjects(featured)}
        imageMap={imageMap}
      />
    </HomepageLayout>
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
            fixed(width: 250, webpQuality: 80) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }
    heroImage: file(relativePath: { eq: "hero.jpg" }) {
      relativePath
      childImageSharp {
        fluid(maxHeight: 800, webpQuality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
