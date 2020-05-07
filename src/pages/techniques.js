import React from 'react';
import IndexLayout from '../components/layouts/IndexLayout';
import Meta from '../components/Meta';
import PageHeading from '../components/PageHeading';
import TechniquesList from '../components/TechniquesList';

export default function TechniquesPage() {
  return (
    <IndexLayout>
      <Meta title="Essential Techniques for Cocktail Making" />
      <PageHeading bleed>Essential Techniques for Cocktail Making</PageHeading>
      <TechniquesList />
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
