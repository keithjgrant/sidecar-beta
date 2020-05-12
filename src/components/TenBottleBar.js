import React, { useState } from 'react';
import { useLocation, useNavigate } from '@reach/router';
import qs from 'querystring';
import styled from 'styled-components';
import Card from './Card';
import { Options } from './ButtonGroup';
import Select from './Select';
import Checkbox from './Checkbox';
import DrinkList from './DrinkList';

const nbsp = '\u00A0';

const Form = styled.form`
  display: grid;
  grid-template-columns: min-content auto;
  grid-gap: var(--gap-size) 3em;
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

export default function TenBottleBar({ allDrinks }) {
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
        <Form>
          <label css="text-align: right">
            Type{nbsp}of{nbsp}vermouth
          </label>
          <Options
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
          <label htmlFor="tenth-bottle" css="text-align: right">
            Tenth{nbsp}bottle
          </label>
          <Select
            id="tenth-bottle"
            css="justify-self: start"
            options={[
              ['none', 'None'],
              ['absinthe', 'Absinthe'],
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
          <div css="grid-column: 1 / -1">
            <Checkbox
              id="include-syrups"
              label={
                'Include drinks that use homemade specialty/infused syrups'
              }
              checked={addSyrups}
              onChange={(value) => {
                setAddSyrups(value);
                const q = qs.stringify({
                  ...query,
                  syrups: 0 + value,
                });
                navigate(`${location.pathname}?${q}`, { replace: true });
              }}
            />
          </div>
        </Form>
      </Card>
      <DrinkList drinks={drinks} />
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
