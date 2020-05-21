import React, { useState } from 'react';
import { Link } from 'gatsby';
import Card from './Card';
import { GridForm, GridFormLabel, ButtonGroup } from './forms';
import CollapsibleSection from './CollapsibleSection';
import DrinkList from './DrinkList';
import { getParams, setParam } from '../util/qs';

export default function Explore({ drinks, imageMap }) {
  const params = getParams();

  const [base, setBase] = useState(params.base || 'all');
  const [family, setFamily] = useState(params.family || 'all');
  const filtersSet = !!(params.base || params.family);

  const filtered = drinks.filter(byBase(base)).filter(byFamily(family));
  return (
    <>
      <CollapsibleSection label="Filter" startExpanded={filtersSet}>
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
              onChange={(value) => {
                setBase(value);
                setParam('base', value);
              }}
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
              onChange={(value) => {
                setFamily(value);
                setParam('family', value);
              }}
            />
          </GridForm>
          <div css="margin-top: 1.8rem">
            <Link to="/tags" className="button">
              Browse tags...
            </Link>
          </div>
        </Card>
      </CollapsibleSection>
      <DrinkList drinks={filtered} imageMap={imageMap} />
    </>
  );
}

function byBase(base) {
  return (drink) => base === 'all' || drink.tags.includes(base);
}

function byFamily(family) {
  return (drink) => family === 'all' || drink.family === family;
}
