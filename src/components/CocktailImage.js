import React from 'react';
import glasses from './svg/glasses';
// TODO: add styles

const GENERIC_IMAGE = {
  url: '/images/bartender.jpg',
  alt: 'A well-dressed bartender pouring a spirit into a cocktail shaker',
};

export default function CocktailImage({ drink, className }) {
  let { image, glass } = drink;
  const GlassSvg = glasses[glass];
  if (!image && !GlassSvg) {
    image = GENERIC_IMAGE;
  }

  return (
    <div className={`cocktail-image ${className}`}>
      {image ? (
        <img
          src={`/static${image.url}`}
          alt={image.alt}
          style={{ objectPosition: image.align || '50%' }}
        />
      ) : (
        <div className="svg-wrapper">
          <GlassSvg />
        </div>
      )}
    </div>
  );
}
