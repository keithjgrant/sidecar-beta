import React from 'react';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import TechniquesList from '../components/TechniquesList';

export default function TechniquesPage() {
  return (
    <Layout>
      <Meta title="Essential Techniques for Cocktail Making" />
      <TechniquesList />
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
