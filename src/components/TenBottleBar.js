import React, { useState } from 'react';
import { useLocation, useNavigate } from '@reach/router';
import qs from 'querystring';
import { css } from 'styled-components';
import Card from './Card';
import {
  GridForm,
  GridFormLabel,
  Checkbox,
  SplitLabel,
  ButtonGroup,
  Select,
} from './forms';
import DrinkList from './DrinkList';

const checkboxStyles = css`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;

  @media (min-width: 500px) {
    grid-column: 2;
  }
`;

const excludeTags = [
  'absinthe',
  'aged-rum',
  'apple-brandy',
  'benedictine',
  'campari',
  'drambuie',
  'elderflower-liqueur',
  'genever-gin',
  'green-chartreuse',
  'maraschino-liqueur',
  'mezcal',
  'vodka',
];

export default function TenBottleBar({ allDrinks, imageMap }) {
  const location = useLocation();
  const navigate = useNavigate();
  const query = qs.parse(location.search.replace(/^\?/, ''));

  const [vermouth, setVermouth] = useState(
    ['sweet', 'blanc', 'dry'].includes(query.vermouth)
      ? query.vermouth
      : 'sweet'
  );
  const [tenthBottle, setTenthBottle] = useState(
    excludeTags.includes(query.bottle) ? query.bottle : 'none'
  );
  const [addSyrups, setAddSyrups] = useState(query.syrups === '1');

  const excluded = excludeTags.filter((b) => b != tenthBottle);
  const drinks = allDrinks.filter((drink) => {
    if (drink.tags.includes('ten-bottle-bar')) {
      if (vermouth === 'sweet' || !drink.tags.includes('sweet-vermouth'))
        return true;
    }
    if (!addSyrups && includesFancySyrups(drink)) {
      return false;
    }
    if (!vermouthMatches(vermouth, drink)) {
      return false;
    }
    return tenthBottleMatches(excluded, drink);
  });

  return (
    <>
      <Card>
        <GridForm>
          <GridFormLabel>Type of vermouth</GridFormLabel>
          <ButtonGroup
            name="vermouth"
            value={vermouth}
            options={['sweet', 'blanc', 'dry']}
            onChange={(value) => {
              setVermouth(value);
              const q = qs.stringify({
                ...query,
                vermouth: value,
              });
              navigate(`${location.pathname}?${q}`, { replace: true });
            }}
          />
          <GridFormLabel htmlFor="tenth-bottle">Tenth bottle</GridFormLabel>
          <Select
            id="tenth-bottle"
            css="justify-self: start"
            options={[
              ['none', 'None'],
              // ['absinthe', 'Absinthe'],
              ['aged-rum', 'Aged Rum'],
              ['apple-brandy', 'Apple Brandy'],
              ['benedictine', 'Bénédictine'],
              ['campari', 'Campari'],
              // ['drambuie', 'Drambuie'],
              ['elderflower-liqueur', 'Elderflower Liqueur'],
              ['genever-gin', 'Genever Gin'],
              ['green-chartreuse', 'Green Chartreuse'],
              ['maraschino-liqueur', 'Maraschino Liqueur'],
              ['mezcal', 'Mezcal'],
              ['vodka', 'Vodka'],
            ]}
            value={tenthBottle}
            onChange={(value) => {
              setTenthBottle(value);
              const q = qs.stringify({
                ...query,
                bottle: value,
              });
              navigate(`${location.pathname}?${q}`, { replace: true });
            }}
          />
          <Checkbox
            id="include-syrups"
            css={checkboxStyles}
            checked={addSyrups}
            onChange={(value) => {
              setAddSyrups(value);
              const q = qs.stringify({
                ...query,
                syrups: 0 + value,
              });
              navigate(`${location.pathname}?${q}`, { replace: true });
            }}
            label={
              <SplitLabel htmlFor="include-syrups" heading="Specialty syrups">
                Include drinks that use homemade specialty or infused syrups
              </SplitLabel>
            }
          />
        </GridForm>
      </Card>
      <DrinkList drinks={drinks} imageMap={imageMap} />
    </>
  );
}

const fancySyrups = [
  'ginger',
  'honey',
  'black-pepper-syrup',
  'ipa-syrup',
  'burnt-sugar-syrup',
  'jalapeno-syrup',
  'muscovado-syrup',
];
// non-fancy: simple syrup, demarara, agave

function includesFancySyrups(drink) {
  for (let i = 0; i < fancySyrups.length; i++) {
    if (drink.tags.includes(fancySyrups[i])) {
      return true;
    }
  }
  return false;
}

function vermouthMatches(type, drink) {
  const tag = drink.tags.find((t) => t.endsWith('-vermouth'));
  return !tag || tag === `${type}-vermouth`;
}

function tenthBottleMatches(exclude, drink) {
  for (let i = 0; i < exclude.length; i++) {
    if (drink.tags.includes(exclude[i])) {
      return false;
    }
  }
  return true;
}
