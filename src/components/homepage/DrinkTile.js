import React from 'react';
import { Link } from 'gatsby';
import CocktailThumbnail from '../CocktailThumbnail';

export default function DrinkTile({ drink, className }) {
  return (
    <Link to={`/drinks/${drink.basename}`}>
      <a className={`drink-tile ${className}`}>
        <CocktailThumbnail drink={drink} className="drink-tile__image" />
        <div className="drink-tile__title">{drink.title}</div>
      </a>
    </Link>
  );
}
