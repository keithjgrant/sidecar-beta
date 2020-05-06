import React from 'react';
import IndexMain, { Bleed } from './IndexMain';
import PageHeading from './PageHeading';
import SectionHeading from './SectionHeading';
import TileLinkList from './tiles/TileLinkList';
import TileLink from './tiles/TileLink';

export default function IngredientsIndex() {
  return (
    <IndexMain>
      <Bleed>
        <PageHeading>Ingredients: Spirits, Syrups, & Mixers</PageHeading>
      </Bleed>
      <SectionHeading>Spirits</SectionHeading>
      <Bleed>
        <TileLinkList>
          <li>
            <TileLink href="/ingredients/vermouth">Vermouth</TileLink>
          </li>
          <li>
            <TileLink href="/ingredients/gin">Gin</TileLink>
          </li>
        </TileLinkList>
      </Bleed>
      <SectionHeading>Syrups & mixers</SectionHeading>
      <Bleed>
        <TileLinkList>
          <li>
            <TileLink href="/ingredients/simple-syrup">Simple Syrup</TileLink>
          </li>
          <li>
            <TileLink href="/ingredients/burnt-sugar-syrup">
              Burnt Sugar Syrup
            </TileLink>
          </li>
          <li>
            <TileLink href="/ingredients/butter-syrup">Butter Syrup</TileLink>
          </li>
        </TileLinkList>
      </Bleed>
    </IndexMain>
  );
}
