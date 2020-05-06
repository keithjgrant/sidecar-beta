import React from 'react';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import IngredientsList from '../components/IngredientsList';

export default function IngredientsPage() {
  return (
    <Layout>
      <Meta title="Ingredients: Spirits, Syrups, & Mixers" />
      <IngredientsList />
    </Layout>
  );
}

// export const pageQuery = graphql`
//   query AllIngredients {
//     ingredients: allMarkdownRemark(
//       filter: { frontmatter: { path: { regex: "/^/ingredients//" } } }
//       sort: { order: DESC, fields: [frontmatter___path] }
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//             path
//             date(formatString: "MMMM DD, YYYY")
//             glass
//             image {
//               url
//               alt
//               align
//             }
//           }
//         }
//       }
//     }
//   }
// `;
