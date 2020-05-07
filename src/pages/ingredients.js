import React from 'react';
import IndexLayout from '../components/layouts/IndexLayout';
import Meta from '../components/Meta';
import PageHeading from '../components/PageHeading';
import IngredientsList from '../components/IngredientsList';

export default function IngredientsPage() {
  return (
    <IndexLayout>
      <Meta title="Ingredients: Spirits, Syrups, & Mixers" />
      <PageHeading bleed>Ingredients: Spirits, Syrups, & Mixers</PageHeading>
      <IngredientsList />
    </IndexLayout>
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
