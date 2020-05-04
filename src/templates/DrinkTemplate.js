import React from 'react';
import { graphql } from 'gatsby';
import Meta from '../components/Meta';
import DrinkCard from '../components/drink/DrinkCard';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: var(--fill-height);
  padding-bottom: 0.5em;
  align-items: center;
  justify-content: center;
`;

export default function DrinkTemplate({ data }) {
  const drink = {
    ...data.post.frontmatter,
    content: data.post.html,
  };
  return (
    <Wrapper>
      <Meta title={`${drink.title}`} />
      <DrinkCard drink={drink} />
    </Wrapper>
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
