import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import styled from 'styled-components';

const Main = styled.main`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 1em;

  @media (min-width: 500px) {
    width: max-content;
    min-width: 500px;
  }
`;

const Article = styled.article`
  max-width: 40em;
  margin: 1em auto;
  padding: 2em 1em;
  border: 1px solid var(--gray-4);
  border-radius: var(--border-radius);
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.1);
  background-color: var(--gray-dark);

  h1,
  h2,
  h3 {
    color: inherit;
  }

  h1 {
    margin: 1.72rem 0;
  }

  h2 {
    margin: 2.32rem 0 0.85rem;
  }

  > h1:first-child {
    margin-top: 0;
  }

  p,
  ul {
    margin: 1.5em 0;
  }
`;

export default function ArticleTemplate({ data }) {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <Meta title={post.frontmatter.title} />
      <Main>
        <Article>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Article>
      </Main>
    </Layout>
  );
}

export const pageQuery = graphql`
  query IngredientPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
