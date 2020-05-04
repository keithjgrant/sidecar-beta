import React from 'react';
import InlineMarkdown from '../InlineMarkdown';
// import './IngredientList.scss';

export default function IngredientList({ items = [], garnish }) {
  return (
    <ul className="ingredients">
      {items.map((ingredient, i) => (
        <li key={i} className="p-ingredient">
          <InlineMarkdown source={ingredient} />
        </li>
      ))}
      {garnish && (
        <li className="ingredients__garnish p-ingredient">
          <span className="ingredients__label">garnish:</span>{' '}
          <InlineMarkdown source={garnish} />
        </li>
      )}
    </ul>
  );
}
