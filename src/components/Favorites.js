import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import DrinkList from './DrinkList';
import db from '../util/db';

const NonPwa = styled.div`
  @media (display-mode: standalone) {
    display: none;
  }
`;

const PwaOnly = styled.div`
  display: none;

  @media (display-mode: standalone) {
    display: block;
  }
`;

export default function Favorites({ allDrinks, imageMap }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    (async () => {
      const loaded = await db.getFavorites();
      const drinks = [];
      loaded.forEach((favorite) => {
        const match = allDrinks.find(
          (d) => d.path === `/drinks/${favorite.name}`
        );
        if (match) {
          drinks.push({
            ...match,
            date: formatDate(favorite.date),
          });
        }
      });
      setFavorites(drinks);
    })();
  }, []);

  return (
    <>
      {favorites.length ? (
        <DrinkList drinks={favorites} imageMap={imageMap} />
      ) : (
        <>
          <NonPwa>
            <p>
              You must <Link to="/install">install</Link> in order to save
              favorites.
            </p>
          </NonPwa>
          <PwaOnly>
            <p>
              Tap the star when viewing a drink recipe to save it to your
              favorites.
            </p>
          </PwaOnly>
        </>
      )}
      <p className="footnote">
        Your favorites are saved locally in your browser. They will not carry
        over between browsers or devices.
      </p>
    </>
  );
}

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function formatDate(date) {
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}
