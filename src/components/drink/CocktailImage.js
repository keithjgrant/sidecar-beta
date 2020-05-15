import React from 'react';
import styled, { css } from 'styled-components';
import Img from 'gatsby-image';
import glasses from '../svg/glasses';

const GENERIC_IMAGE = {
  url: '/images/bartender.jpg',
  alt: 'A well-dressed bartender pouring a spirit into a cocktail shaker',
};

const Wrapper = styled.div`
  grid-column: 1;
`;

const Image = styled(Img)`
  width: 100%;
  max-height: 25vh;
  border-top-right-radius: var(--border-radius);
  border-top-left-radius: var(--border-radius);
  object-fit: cover;
  box-shadow: 0.1em 0.1em 0.3em rgba(0, 0, 0, 0.1);

  ${(props) => css`
  & img {
    object-position ${props.position} !important;
  }`}

  @media (min-width: 480px) {
    max-height: initial;
    width: calc(100% + 5rem);
    margin-top: -3rem;
    margin-left: -5rem;
    border-radius: var(--border-radius);
  }

  @media (min-width: 640px) {
    min-height: 15em;
  }
`;

const SvgWrapper = styled.div`
  padding-top: 1em;

  & svg {
    height: auto;
    max-height: initial;
    max-height: 30vh;
    color: var(--orange-8);
    opacity: 0.3;

    @media (max-width: 480px) {
        display: none;
      }
    }
  }
`;

export default function CocktailImage({ drink, imageData }) {
  let { image, glass } = drink;
  // TODO: share lookup function with ../CocktailThumbnail?
  const GlassSvg = glasses[glass];
  if (!image && !GlassSvg) {
    image = GENERIC_IMAGE;
  }

  return (
    <Wrapper>
      {image && imageData ? (
        <Image
          fluid={imageData.childImageSharp.fluid}
          alt={image.alt}
          objectPosition={image.align}
          position={image.align}
        />
      ) : (
        <SvgWrapper>
          <GlassSvg />
        </SvgWrapper>
      )}
    </Wrapper>
  );
}
