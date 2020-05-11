import React, { useState } from 'react';
import Card from './Card';
import RadioGroup, { RadioOptions } from './RadioGroup';
import Select, { SelectOptions } from './Select';
import Checkbox from './Checkbox';
import DrinkList from './DrinkList';

const bottleOptions = [
  'absinthe',
  'aged-rum',
  'apple-brandy',
  'bourbon',
  'benedictine',
  'campari',
  'drambuie',
  'elderflower-liqueur',
  'genever gin',
  'green-chartreuse',
  'maraschino-liqueur',
  'mezcal',
  'vodka',
];

export default function TenBottleBar({ allDrinks }) {
  const [vermouth, setVermouth] = useState('sweet');
  const [tenthBottle, setTenthBottle] = useState('none');
  const [addSyrups, setAddSyrups] = useState(false);

  const bottleTag = tenthBottle.toLowerCase().replace(' ', '-');
  const excluded = bottleOptions.filter((b) => b != bottleTag);
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
        <RadioGroup label="Type of vermouth">
          <RadioOptions
            options={['sweet', 'blanc', 'dry']}
            value={vermouth}
            onChange={setVermouth}
          />
        </RadioGroup>
        <Select label="Tenth bottle" onChange={setTenthBottle}>
          <SelectOptions
            options={[
              'none',
              'absinthe',
              'aged rum',
              'apple brandy',
              'bourbon',
              'Benedictine',
              'Campari',
              'drambuie',
              'elderflower liqueur',
              'genever gin',
              'Green Chartreuse',
              'maraschino liqueur',
              'mezcal',
              'vodka',
            ]}
            onChange={setTenthBottle}
          />
        </Select>
        <Checkbox
          id="include-syrups"
          label={'Include drinks that use specialty homemade syrups'}
          checked={addSyrups}
          onChange={setAddSyrups}
        />
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

function tenthBottleMatches(excludeTags, drink) {
  for (let i = 0; i < excludeTags.length; i++) {
    if (drink.tags.includes(excludeTags[i])) {
      return false;
    }
  }
  return true;
}
