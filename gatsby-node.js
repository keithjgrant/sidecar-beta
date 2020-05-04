/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const DrinkTemplate = path.resolve(`src/templates/drink.js`);
  const IngredientTemplate = path.resolve(`src/templates/ingredient.js`);

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
  const templates = {
    drinks: DrinkTemplate,
    ingredients: IngredientTemplate,
  };
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const [, dirname] = node.frontmatter.path.split('/');
    console.log(dirname);
    createPage({
      path: node.frontmatter.path,
      component: templates[dirname],
      context: {}, // additional data can be passed via context
    });
  });
};
