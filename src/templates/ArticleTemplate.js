import React from 'react';
import { graphql } from 'gatsby';
import ArticleLayout from '../components/layouts/ArticleLayout';
import Meta from '../components/Meta';

export default function ArticleTemplate({ data }) {
  const { markdownRemark: post } = data;
  return (
    <ArticleLayout title={post.frontmatter.title} backHref="/">
      <Meta title={post.frontmatter.title} />
      {/* <h1>{post.frontmatter.title}</h1> */}
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </ArticleLayout>
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
