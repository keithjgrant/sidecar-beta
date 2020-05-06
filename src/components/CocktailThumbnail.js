import React from 'react';
import styled from 'styled-components';
import glasses from './svg/glasses';

const ThumbnailWrapper = styled.div`
  img {
    display: block;
    width: 100%;
    height: 100%;
    color: var(--gray-6);
    object-fit: cover;
    object-position: center center;
  }
  svg {
    height: 7em;
    padding: 3em 0.5em 1em;
    filter: drop-shadow(2px 4px 6px black);
  }
`;

const GENERIC_IMAGE = {
  url: '/images/bartender.jpg',
  alt: 'A well-dressed bartender pouring a spirit into a cocktail shaker',
};

export default function CocktailThumbnail({ drink }) {
  let { image, glass } = drink;
  // TODO: share lookup function with drink/CocktailImage?
  const GlassSvg = glasses[glass];
  if (!image && !GlassSvg) {
    image = GENERIC_IMAGE;
  }

  return (
    <ThumbnailWrapper>
      {image ? (
        <img
          src={image.url}
          alt={image.alt}
          style={{ objectPosition: image.align || '50%' }}
        />
      ) : (
        <div className="svg-wrapper">
          <GlassSvg />
        </div>
      )}
    </ThumbnailWrapper>
  );
}
