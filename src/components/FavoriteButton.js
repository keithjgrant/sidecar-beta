import React, { useState } from 'react';
import styled from 'styled-components';
import db from '../util/db';
import Star from './svg/Star';

const Button = styled.button`
  display: inline-block;
  padding: 1rem 1.8rem 0.9rem;
  border: 0;
  background: transparent;
  color: var(--brand-primary);
  cursor: pointer;

  &:hover {
    color: var(--white);
  }

  & svg {
    height: 1.2rem;
  }
`;

const drinkName = 'manhattan';

export default function FavoriteButton() {
  const [checked, setChecked] = useState(false);
  const onClick = async () => {
    setChecked(!checked);
    if (checked) {
      db.deleteFavorite(drinkName);
    } else {
      db.addFavorite(drinkName);
    }
    // if (navigator.storage && navigator.storage.persist) {
    //   const isPersisted = await navigator.storage.persisted();
    //   console.log(`Persisted storage granted: ${isPersisted}`);
    // }
  };
  return (
    <Button onClick={onClick} type="button">
      <Star isFilled={checked} />
    </Button>
  );
}
