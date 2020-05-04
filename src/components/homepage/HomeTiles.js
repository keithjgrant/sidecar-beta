import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import TileRow from './TileRow';

const Tiles = styled.div`
  padding: 1em 1em calc(1em - var(--gap-size));
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 2fr;
  grid-template-rows: 3fr 1fr 1fr auto 30vw auto 30vw;

  > * {
    margin-bottom: var(--gap-size);
  }

  @media (min-width: 600px) {
    grid-template-rows: 3fr 1fr 1fr auto 170px auto 170px;
  }

  @media (min-width: 800px) {
    margin: 0 auto;
    width: 800px;
  }
`;

const Tile = styled(Link)`
  grid-column: 1 / -1;
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

function dateSort(a, b) {
  const first = new Date(a.date);
  const second = new Date(b.date);
  if (first > second) {
    return -1;
  }
  if (second > first) {
    return 1;
  }
  return 0;
}

export default function HomeTiles({ featured, recent }) {
  // const store = useContext(Context);
  // const featured = store.drinks.filter((d) => d.featured).slice(0, 3);
  // const latest = store.drinks.sort(dateSort).slice(0, 3);

  return (
    <Tiles>
      <Tile to="/drinks">Drinks</Tile>
      <Tile to="/tags">Tags</Tile>
      <Tile to="/about">About Sidecar</Tile>
      <TileRow drinks={featured} heading="Featured" />
      <TileRow drinks={recent} heading="Recently added" />
    </Tiles>
  );
}
