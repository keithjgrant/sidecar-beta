import React from 'react';
import { Indicator, Caption } from './Indicator';
import glasses from '../svg/glasses';

export default function GlassType({ drink }) {
  const GlassSvg = glasses[drink.glass];
  if (!GlassSvg) {
    return null;
  }
  return (
    <Indicator>
      <GlassSvg />
      <Caption>{drink.glass}</Caption>
    </Indicator>
  );
}
