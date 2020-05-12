import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { ButtonGroup } from './forms';
import CocktailThumbnail from './CocktailThumbnail';

const List = styled.ul`
  margin: 0;
  padding-left: 0;
  list-style-type: none;

  @media (min-width: 30em) {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
  }
`;

const PreviewLink = styled(Link)`
  --thumbnail-size: 3em;
  --heading-size: 1rem;
  position: relative;
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

const PublishDate = styled.time`
  position: absolute;
  right: 0.2em;
  bottom: 0.2em;
  font-size: 0.8rem;
  color: var(--gray-5);
`;

function DrinkItem({ drink }) {
  return (
    <li>
      <PreviewLink key={drink.basename} to={drink.path}>
        <CocktailThumbnail drink={drink} />
        <PreviewContent>{drink.title}</PreviewContent>
        <PublishDate>{drink.date}</PublishDate>
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

function dateSort(a, b) {
  const aDate = new Date(a.date);
  const bDate = new Date(b.date);
  if (aDate < bDate) {
    return 1;
  }
  if (aDate > bDate) {
    return -1;
  }
  return 0;
}

const Container = styled.div`
  margin-bottom: var(--gap-size);
  display: flex;
  justify-content: flex-end;
  align-items: baseline;

  & > *:not(:first-child) {
    margin-left: var(--gap-size);
  }
`;

export default function DrinkList({ drinks }) {
  const [sortBy, setSortBy] = useState('name');

  const sorted =
    sortBy === 'last added' ? drinks.sort(dateSort) : drinks.sort(alphaSort);
  return (
    <>
      <Container>
        <div>Sort by</div>
        <ButtonGroup
          name="sort"
          value={sortBy}
          options={['name', 'last added']}
          onChange={setSortBy}
        />
      </Container>
      {!sorted.length ? (
        <p css="padding: 0 1em">No drinks matched your query</p>
      ) : null}
      <List>
        {sorted.map((drink) => (
          <DrinkItem key={drink.path} drink={drink} />
        ))}
      </List>
    </>
  );
}
