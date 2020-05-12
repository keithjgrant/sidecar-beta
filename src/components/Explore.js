import React, { useState } from 'react';
import { Link } from 'gatsby';
import Card from './Card';
import { GridForm, GridFormLabel, ButtonGroup } from './forms';
import DrinkList from './DrinkList';

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
        <GridForm>
          <GridFormLabel>Base Spirit</GridFormLabel>
          <ButtonGroup
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
          <GridFormLabel>Drink family</GridFormLabel>
          <ButtonGroup
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
        </GridForm>
        <div>
          <Link to="/tags" className="button">
            Browse tags
          </Link>
        </div>
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
