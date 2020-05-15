import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import glasses from '../svg/glasses';

const ThumbnailWrapper = styled.div`
  height: var(--thumbnail-size);
  width: var(--thumbnail-size);

  svg {
    height: 7em;
    padding: 3em 0.5em 1em;
    filter: drop-shadow(2px 4px 6px black);
  }
`;

export default function CocktailThumbnail({ drink, image }) {
  console.log(image);
  const GlassSvg = glasses[drink.glass] || glasses.rocks;

  return (
    <ThumbnailWrapper>
      {drink.image && image ? (
        <Image
          fluid={image.fluid}
          alt={drink.image.alt}
          imgStyle={{ objectPosition: drink.image.align }}
        />
      ) : (
        <div className="svg-wrapper">
          <GlassSvg />
        </div>
      )}
    </ThumbnailWrapper>
  );
}
