import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
// TODO: add <Meta> ?
// import '../css/blog-post.css'; // make it pretty!

export default function ArticleTemplate({ data }) {
  const { markdownRemark: post } = data; // data.markdownRemark holds your post data
  return (
    <div className="ingredient-container">
      <Helmet title={`${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.frontmatter.intro }} />
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query IngredientPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        intro
      }
    }
  }
`;
