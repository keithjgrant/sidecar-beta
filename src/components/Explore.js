import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Card from './Card';
import DrinkList from './DrinkList';
import ButtonGroup, { Options } from './ButtonGroup';

const CleanLink = styled(Link)`
  text-decoration: none;
`;

/*
 * TODO: Add (collapsible) "in my bar" filters
 */
export default function Explore({ drinks }) {
  const [base, setBase] = useState('all');
  const [family, setFamily] = useState('all');

  const filtered = drinks.filter(byBase(base)).filter(byFamily(family));
  return (
    <>
      <Card>
        <ButtonGroup label="Base spirit">
          <Options
            name="base"
            value={base}
            options={[
              'all',
              'brandy',
              'gin',
              'mezcal',
              'rum',
              'tequila',
              'vodka',
              'whiskey',
            ]}
            onChange={setBase}
          />
        </ButtonGroup>
        <ButtonGroup label="Drink family">
          <Options
            name="family"
            value={family}
            options={[
              'all',
              'fizz',
              'flip',
              'highball',
              'martini',
              'old fashioned',
              'sidecar',
              'sour',
            ]}
            onChange={setFamily}
          />
        </ButtonGroup>
        <CleanLink to="/tags">Browse tags »</CleanLink>
      </Card>
      <DrinkList drinks={filtered} />
    </>
  );
}

function byBase(base) {
  return (drink) => base === 'all' || drink.tags.includes(base);
}

function byFamily(family) {
  return (drink) => family === 'all' || drink.family === family;
}
