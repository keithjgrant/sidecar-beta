import React from 'react';
import { graphql, Link } from 'gatsby';
import DrinkListLayout from '../../components/layouts/DrinkListLayout';
import PageHeading from '../../components/PageHeading';
import Meta from '../../components/Meta';
import SimpleContent from '../../components/SimpleContent';
import TenBottleBar from '../../components/TenBottleBar';

export default function TenBottleBarPage({ data: { drinks } }) {
  return (
    <DrinkListLayout>
      <Meta title="Drinks From Your Ten Bottle Bar" />
      <PageHeading>Your Ten Bottle Bar</PageHeading>
      <SimpleContent>
        <p>
          If you’ve stocked your{' '}
          <Link to="/ingredients/ten-bottle-bar">Ten Bottle Bar</Link>, you can
          make any of the drinks listed here. Use the options below to filter
          the results to match your bar.
        </p>
      </SimpleContent>
      <TenBottleBar
        allDrinks={drinks.edges.map((item) => item.node.frontmatter)}
      />
    </DrinkListLayout>
  );
}

export const pageQuery = graphql`
  query TenBottleBarDrinks {
    drinks: allMarkdownRemark(
      filter: { frontmatter: { tenBottleCandidate: { eq: true } } }
      sort: { order: ASC, fields: [frontmatter___path] }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "DD MMM YYYY")
            glass
            tags
            image {
              url
              alt
              align
            }
          }
        }
      }
    }
  }
`;
