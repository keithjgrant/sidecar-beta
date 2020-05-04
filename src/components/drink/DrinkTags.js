import React, { useState } from 'react';
// import './DrinkTags.scss';

export default function DrinkTags({ tags = [] }) {
  const showToggle = tags.length > 5;
  const [isExpanded, setIsExpanded] = useState(!showToggle);
  const shownTags = isExpanded ? tags : tags.slice(0, 4);
  return (
    <ul className="drink-tags">
      {shownTags.map((tag) => (
        <li key={tag}>
          <a href={`/tags/${tag}`}>{tag}</a>
        </li>
      ))}
      {showToggle && (
        <li>
          <button
            className="drink-tags__toggle"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded
              ? 'Show less'
              : `${tags.length - shownTags.length} more…`}
          </button>
        </li>
      )}
    </ul>
  );
}
