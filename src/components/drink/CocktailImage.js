import React from 'react';
import styled from 'styled-components';
import glasses from '../svg/glasses';

const GENERIC_IMAGE = {
  url: '/images/bartender.jpg',
  alt: 'A well-dressed bartender pouring a spirit into a cocktail shaker',
};

const Wrapper = styled.div`
  grid-column: 1;
`;

const Image = styled.img`
  width: 100%;
  max-height: 25vh;
  border-top-right-radius: var(--border-radius);
  border-top-left-radius: var(--border-radius);
  object-fit: cover;
  box-shadow: 0.1em 0.1em 0.3em rgba(0, 0, 0, 0.1);

  @media (min-width: 30em) {
    max-height: initial;
    width: calc(100% + 5rem);
    margin-top: -3rem;
    margin-left: -5rem;
    border-radius: var(--border-radius);
  }

  @media (min-width: 40em) {
    min-height: 15em;
  }
`;

const SvgWrapper = styled.div`
  & svg {
    height: auto;
    max-height: 30vh;
    color: var(--orange-8);
    opacity: 0.3;

    @media (min-width: 30em) {
      max-height: initial;
    }
  }
`;

export default function CocktailImage({ drink }) {
  let { image, glass } = drink;
  // TODO: share lookup function with ../CocktailThumbnail?
  const GlassSvg = glasses[glass];
  if (!image && !GlassSvg) {
    image = GENERIC_IMAGE;
  }

  return (
    <Wrapper>
      {image ? (
        <Image
          src={image.url}
          alt={image.alt}
          style={{ objectPosition: image.align || '50%' }}
        />
      ) : (
        <SvgWrapper>
          <GlassSvg />
        </SvgWrapper>
      )}
    </Wrapper>
  );
}
