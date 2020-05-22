import React from 'react';
import { graphql } from 'gatsby';
import CardLayout from '../components/layouts/CardLayout';
import Meta from '../components/Meta';
import DrinkCard from '../components/drink/DrinkCard';

const nbsp = '\u00A0';

export default function DrinkTemplate({ data }) {
  const drink = {
    ...data.post.frontmatter,
    content: data.post.html,
  };
  const slug = drink.path.replace('/drinks/', '');

  const image = drink.image ? drink.image.url : null;
  let photoCredit;
  if (drink.image && drink.image.photographer) {
    const name = drink.image.photographer.replace(' ', nbsp);
    photoCredit = (
      <span>
        Photo by{' '}
        {drink.image.creditUrl ? (
          <a href={drink.image.creditUrl}>{name}</a>
        ) : (
          name
        )}
      </span>
    );
  }
  console.log(drink);
  return (
    <CardLayout drinkName={slug} footerContent={photoCredit}>
      <Meta title={drink.title} image={image} />
      <DrinkCard drink={drink} imageData={data.image} />
    </CardLayout>
  );
}

export const pageQuery = graphql`
  query DrinkPostByPath($path: String!, $imagePath: String!) {
    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMM YYYY")
        path
        glass
        sweetness
        booziness
        family
        ingredients
        garnish
        tags
        featured
        image {
          url
          alt
          align
          photographer
          creditUrl
        }
        intro
      }
    }
    image: file(relativePath: { eq: $imagePath }) {
      relativePath
      childImageSharp {
        fixed(width: 290, webpQuality: 85) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;
