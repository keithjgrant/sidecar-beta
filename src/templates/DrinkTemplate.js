import React from 'react';
import { graphql } from 'gatsby';
import CardLayout from '../components/layouts/CardLayout';
import Meta from '../components/Meta';
import DrinkCard from '../components/drink/DrinkCard';

export default function DrinkTemplate({ data }) {
  const drink = {
    ...data.post.frontmatter,
    content: data.post.html,
  };

  const image = drink.image ? drink.image.url : null;
  return (
    <CardLayout>
      <Meta title={drink.title} image={image} />
      <DrinkCard drink={drink} imageData={data.image} />
    </CardLayout>
  );
}

export const pageQuery = graphql`
  query DrinkPostByPath($path: String!, $imagePath: String!) {
    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMM YYYY")
        glass
        sweetness
        booziness
        family
        ingredients
        garnish
        tags
        featured
        image {
          url
          alt
          align
        }
        intro
      }
    }
    image: file(relativePath: { eq: $imagePath }) {
      relativePath
      childImageSharp {
        fluid(maxWidth: 450) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
