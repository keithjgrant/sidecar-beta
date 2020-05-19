import React from 'react';
import { graphql } from 'gatsby';
import IndexLayout from '../components/layouts/IndexLayout';
import Meta from '../components/Meta';
import PageHeading from '../components/PageHeading';
import TechniquesList from '../components/TechniquesList';
import isPwa from '../util/isPwa';

export default function TechniquesPage({ data }) {
  return (
    <IndexLayout title="Techniques">
      <Meta title="Essential Techniques for Cocktail Making" />
      {!isPwa() ? (
        <PageHeading bleed>
          Essential Techniques for Cocktail Making
        </PageHeading>
      ) : null}
      <TechniquesList thumbnails={data} />
    </IndexLayout>
  );
}

export const pageQuery = graphql`
  query Techniques {
    building: file(
      relativePath: { eq: "drinks/french-kiss.jpg" }
      sourceInstanceName: { eq: "images" }
    ) {
      childImageSharp {
        fluid(maxWidth: 250, webpQuality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    shaking: file(
      relativePath: { eq: "drinks/angel-city-fizz.jpg" }
      sourceInstanceName: { eq: "images" }
    ) {
      childImageSharp {
        fluid(maxWidth: 250, webpQuality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    stirring: file(
      relativePath: { eq: "drinks/pilots-license.jpg" }
      sourceInstanceName: { eq: "images" }
    ) {
      childImageSharp {
        fluid(maxWidth: 250, webpQuality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
