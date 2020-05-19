import React from 'react';
import { graphql } from 'gatsby';
import DrinkListLayout from '../components/layouts/DrinkListLayout';
import Meta from '../components/Meta';
import DrinkList from '../components/DrinkList';
import SimpleContent from '../components/SimpleContent';

export default function TagTemplate({
  data: { drinks, content, images },
  pageContext: { tag },
}) {
  const imageMap = {};
  images.edges.forEach(({ node: { name, childImageSharp } }) => {
    imageMap[name] = childImageSharp;
  });
  return (
    <DrinkListLayout title={`Tag: ${tag}`}>
      <Meta title={`Drinks Tagged ‘${tag}’`} />
      {content ? (
        <SimpleContent dangerouslySetInnerHTML={{ __html: content.html }} />
      ) : null}
      <DrinkList
        drinks={drinks.edges.map((item) => item.node.frontmatter)}
        imageMap={imageMap}
      />
    </DrinkListLayout>
  );
}

export const pageQuery = graphql`
  query DrinksByTag($tag: String!, $contentPath: String!) {
    drinks: allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { order: ASC, fields: [frontmatter___path] }
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
    content: markdownRemark(frontmatter: { path: { eq: $contentPath } }) {
      html
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
