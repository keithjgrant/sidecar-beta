import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import TileRow from './TileRow';

const Tiles = styled.div`
  padding: 1em 1em calc(1em - var(--gap-size));
  display: grid;
  grid-template-rows: auto 3fr 1fr 1fr auto 30vw auto 30vw;

  > * {
    margin-bottom: var(--gap-size);
  }

  @media (min-width: 600px) {
    grid-template-rows: auto 3fr 1fr 1fr auto 170px auto 170px;
  }

  @media (min-width: 800px) {
    margin: 0 auto;
    width: 800px;
  }
`;

const Tagline = styled.div`
  padding: 0.5rem 0 1rem;
  text-align: center;
  color: var(--gray-8);
  font-style: italic;
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

export default function HomeTiles({ featured, recent, imageMap }) {
  return (
    <Tiles>
      <Tagline>A curated collection of cocktails</Tagline>
      <Tile to="/drinks">Drinks</Tile>
      <Tile to="/tags">Tags</Tile>
      <Tile to="/about">About Sidecar</Tile>
      <TileRow drinks={featured} heading="Featured" imageMap={imageMap} />
      <TileRow drinks={recent} heading="Recently added" imageMap={imageMap} />
    </Tiles>
  );
}
