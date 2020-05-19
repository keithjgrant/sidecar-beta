import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import LogoSvg from '../header/LogoSvg';

const Tiles = styled.div`
  max-width: 500px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 1em;
  display: grid;
  grid-template-rows: 3fr 3fr 1fr 1fr 1fr;
  grid-gap: var(--gap-size);
`;

const TitleTile = styled.div`
  text-align: center;
  align-self: center;
  color: var(--gray-8);
`;

const Heading = styled.h1`
  margin-top: 0;
  font-size: 1.6rem;
  font-family: var(--font-heading);
  color: var(--brand-primary);

  & > svg {
    height: 3rem;
    padding-right: 0.2em;
    vertical-align: -0.25em;
  }
`;

const Tile = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 2 1 auto;
  padding: 0.3em 0.5em;
  border: 1px solid var(--card-border);
  border-radius: var(--border-radius);
  background-color: var(--card-bg);
  text-align: center;
  text-decoration: none;

  &:hover {
    color: var(--white);
    border-color: var(--white);
  }
`;

export default function PwaHomeTiles() {
  return (
    <Tiles>
      <TitleTile>
        <Heading>
          <LogoSvg /> Sidecar
        </Heading>
        <div>
          A curated collection of cocktails
          <br />
          for the home bartender
        </div>
      </TitleTile>
      <Tile to="/drinks">Drinks</Tile>
      <Tile to="/ingredients">Ingredients</Tile>
      <Tile to="/techniques">Techniques</Tile>
      <Tile to="/about">About</Tile>
    </Tiles>
  );
}
