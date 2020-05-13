import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useLocation, useNavigate } from '@reach/router';
import qs from 'querystring';
import Card from './Card';
import { GridForm, GridFormLabel, ButtonGroup } from './forms';
import CollapsibleSection from './CollapsibleSection';
import DrinkList from './DrinkList';

export default function Explore({ drinks }) {
  const location = useLocation();
  const navigate = useNavigate();
  const query = qs.parse(location.search.replace(/^\?/, ''));

  const [base, setBase] = useState(query.base || 'all');
  const [family, setFamily] = useState(query.family || 'all');
  const filtersSet = query.base || query.family;

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
                const q = qs.stringify({ ...query, base: value });
                navigate(`${location.pathname}?${q}`, { replace: true });
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
                const q = qs.stringify({ ...query, family: value });
                navigate(`${location.pathname}?${q}`, { replace: true });
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
