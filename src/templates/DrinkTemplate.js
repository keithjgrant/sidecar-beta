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
  return (
    <CardLayout>
      <Meta title={drink.title} />
      <DrinkCard drink={drink} />
    </CardLayout>
  );
}

export const pageQuery = graphql`
  query DrinkPostByPath($path: String!) {
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
  }
`;
