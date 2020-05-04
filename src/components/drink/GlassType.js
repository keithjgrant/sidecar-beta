import React from 'react';
import glasses from '../svg/glasses';

export default function GlassType({ drink }) {
  const GlassSvg = glasses[drink.glass];
  if (!GlassSvg) {
    return null;
  }
  return (
    <figure className="style-indicator">
      <GlassSvg />
      <figcaption>
        {drink.glass}
      </figcaption>
    </figure>
  );
}
