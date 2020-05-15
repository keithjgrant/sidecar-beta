import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import glasses from '../svg/glasses';

const Wrapper = styled.div`
  grid-column: 1;
  grid-row: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    height: 5em;
    padding: 1em 0.5em;
    color: var(--orange-8);
    filter: drop-shadow(2px 4px 6px black);
  }
`;

export default function TileImage({ drink, image }) {
  const GlassSvg = glasses[drink.glass] || glasses.rocks;

  return (
    <Wrapper>
      {drink.image && image ? (
        <Image
          fixed={image.fixed}
          alt={drink.image.alt}
          style={{ width: '100%' }}
          imgStyle={{ objectPosition: drink.image.align }}
        />
      ) : (
        <div className="svg-wrapper">
          <GlassSvg />
        </div>
      )}
    </Wrapper>
  );
}
