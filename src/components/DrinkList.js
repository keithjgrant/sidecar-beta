import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import ButtonGroup, { Button } from './ButtonGroup';
import CocktailThumbnail from './CocktailThumbnail';

const List = styled.ul`
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

const Controls = styled.div`
  text-align: right;
  color: var(--gray-8);
`;

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
  if (a.dateObj < b.dateObj) {
    return 1;
  }
  if (a.dateObj > b.dateObj) {
    return -1;
  }
  return 0;
}

function addDates(drinks) {
  return drinks.map((drink) => ({
    ...drink,
    dateObj: drink.date ? new Date(drink.date) : null,
  }));
}

export default function DrinkList(props) {
  const [drinks, setDrinks] = useState(addDates(props.drinks));
  const [isSortByDate, setIsSortByDate] = useState(false);

  const sortByDate = () => {
    setIsSortByDate(true);
    setDrinks(drinks.sort(dateSort));
  };

  const sortByName = () => {
    setIsSortByDate(false);
    setDrinks(drinks.sort(alphaSort));
  };

  return (
    <>
      <Controls>
        Sort by:{' '}
        <ButtonGroup>
          <Button onClick={sortByName} disabled={!isSortByDate}>
            Name
          </Button>
          <Button onClick={sortByDate} disabled={isSortByDate}>
            Last added
          </Button>
        </ButtonGroup>
      </Controls>
      <List>
        {drinks.map((drink) => (
          <DrinkItem key={drink.path} drink={drink} />
        ))}
      </List>
    </>
  );
}
