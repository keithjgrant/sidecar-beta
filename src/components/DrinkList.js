import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import CocktailThumbnail from './CocktailThumbnail';

const List = styled.ul`
  width: calc(100vw - 2em);
  margin: 0 auto;
  padding-left: 0;
  list-style-type: none;

  @media (min-width: 30em) {
    max-width: 70em;
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
  }
`;

const PreviewLink = styled(Link)`
  --thumbnail-size: 3em;
  --heading-size: 1rem;
  display: flex;
  align-items: center;
  height: 100%;
  border: 1px solid var(--card-border);
  background: var(--card-bg);
  text-decoration: none;

  &:hover {
    color: var(--white);
  }

  img,
  .svg-wrapper {
    display: block;
    width: var(--thumbnail-size);
    height: var(--thumbnail-size);
    object-fit: cover;

    svg {
      height: 100%;
      padding: 1em;
    }
  }

  @media (min-width: 30em) {
    --thumbnail-size: 6em;
    --heading-size: 1.2rem;
  }
`;

const PreviewContent = styled.div`
  padding: 1em;
  font-size: var(--heading-size);
  font-family: var(--font-heading);
`;

function DrinkItem({ drink }) {
  return (
    <li>
      <PreviewLink key={drink.basename} to={drink.path}>
        <CocktailThumbnail drink={drink} />
        <PreviewContent>{drink.title}</PreviewContent>
      </PreviewLink>
    </li>
  );
}

function alphaSort(a, b) {
  const titleA = a.title.toLowerCase();
  const titleB = b.title.toLowerCase();
  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
  }
  return 0;
}

export default function DrinkList({ drinks }) {
  // TODO: sort alphabetically/date-added switch (and other options?)
  const sortedDrinks = drinks.sort(alphaSort);
  return (
    <List>
      {sortedDrinks.map((drink) => (
        <DrinkItem key={drink.path} drink={drink} />
      ))}
    </List>
  );
}
