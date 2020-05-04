/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const DrinkTemplate = path.resolve(`src/templates/DrinkTemplate.js`);
  const ArticleTemplate = path.resolve(`src/templates/ArticleTemplate.js`);

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  result.data.allMarkdownRemark.edges.forEach(({ node: { frontmatter } }) => {
    createPage({
      path: frontmatter.path,
      component: frontmatter.path.startsWith('/drinks/')
        ? DrinkTemplate
        : ArticleTemplate,
      context: {}, // additional data can be passed via context
    });
  });
};
