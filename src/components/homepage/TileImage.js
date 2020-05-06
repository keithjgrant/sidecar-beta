import React from 'react';
import styled from 'styled-components';
import glasses from '../svg/glasses';

const Wrapper = styled.div`
  grid-column: 1;
  grid-row: 1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  img,
  svg {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
  img {
    color: var(--gray-6);
  }
  svg {
    height: 7em;
    padding: 3em 0.5em 1em;
    color: var(--orange-8);
    filter: drop-shadow(2px 4px 6px black);
  }
`;

const GENERIC_IMAGE = {
  url: '/images/bartender.jpg',
  alt: 'A well-dressed bartender pouring a spirit into a cocktail shaker',
};

export default function TileImage({ drink }) {
  let { image, glass } = drink;
  // TODO: share lookup function with drink/CocktailImage?
  const GlassSvg = glasses[glass];
  if (!image && !GlassSvg) {
    image = GENERIC_IMAGE;
  }

  return (
    <Wrapper>
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
    </Wrapper>
  );
}
