import React from 'react';
import SectionHeading from './SectionHeading';
import TileLinkList from './tiles/TileLinkList';
import TileLink from './tiles/TileLink';

export default function TechniquesList() {
  return (
    <>
      <SectionHeading>Skills</SectionHeading>
      <TileLinkList>
        <li>
          <TileLink
            href="/techniques/building"
            imageUrl="/images/drinks/pilots-license.jpg"
            imagePosition="50% 40%"
          >
            Building
          </TileLink>
        </li>
        <li>
          <TileLink
            href="/techniques/shaking"
            imageUrl="/images/drinks/angel-city-fizz.jpg"
            imagePosition="50% 40%"
          >
            Shaking
          </TileLink>
        </li>
        <li>
          <TileLink
            href="/techniques/stirring"
            imageUrl="/images/drinks/pilots-license.jpg"
            imagePosition="50% 70%"
          >
            Stirring
          </TileLink>
        </li>
        <li>
          <TileLink href="/techniques/straining">Straining</TileLink>
        </li>
        <li>
          <TileLink href="/techniques/twist">Adding a Twist</TileLink>
        </li>
      </TileLinkList>
      <SectionHeading>Cocktail Families</SectionHeading>
      <TileLinkList>
        <li>
          <TileLink href="/techniques/sour">Sour</TileLink>
        </li>
        {/* <li>
            <TileLink href="/techniques/modified-sour">Modified Sour</TileLink>
          </li>
          <li>
            <TileLink href="/techniques/old-fashioned">Old Fashioned</TileLink>
          </li>
          <li>
            <TileLink href="/techniques/martini">Martini</TileLink>
          </li>
          <li>
            <TileLink href="/techniques/highball">Highball</TileLink>
          </li>
          <li>
            <TileLink href="/techniques/flip">Flip</TileLink>
          </li> */}
      </TileLinkList>
    </>
  );
}
