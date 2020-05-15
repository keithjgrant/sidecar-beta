import React, { useState } from 'react';
import { arrayOf, shape } from 'prop-types';
import { useLocation, useNavigate } from '@reach/router';
import qs from 'querystring';
import styled from 'styled-components';
import DrinkItem from './DrinkItem';
import { ButtonGroup } from '../forms';

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

const Container = styled.div`
  margin-bottom: var(--gap-size);
  display: flex;
  justify-content: flex-end;
  align-items: baseline;

  & > *:not(:first-child) {
    margin-left: var(--gap-size);
  }
`;

export default function DrinkList({ drinks, imageMap }) {
  const location = useLocation();
  const navigate = useNavigate();
  const query = qs.parse(location.search.replace(/^\?/, ''));

  const [sortBy, setSortBy] = useState(
    ['name', 'date'].includes(query.sort) ? query.sort : 'name'
  );

  const sorted =
    sortBy === 'date' ? drinks.sort(dateSort) : drinks.sort(alphaSort);
  return (
    <>
      <Container>
        <div>Sort by</div>
        <ButtonGroup
          name="sort"
          value={sortBy}
          options={[
            ['name', 'name'],
            ['date', 'most recent'],
          ]}
          onChange={(value) => {
            setSortBy(value);
            const q = qs.stringify({ ...query, sort: value });
            navigate(`${location.pathname}?${q}`, { replace: true });
          }}
        />
      </Container>
      {!sorted.length ? (
        <p css="padding: 0 1em">No drinks matched your query</p>
      ) : null}
      <List>
        {sorted.map((drink) => {
          const slug = drink.path.replace(/^\/drinks\//, '');
          return (
            <DrinkItem key={drink.path} drink={drink} image={imageMap[slug]} />
          );
        })}
      </List>
    </>
  );
}
DrinkList.propTypes = {
  drinks: arrayOf(shape).isRequired,
  imageMap: shape().isRequired,
};

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
