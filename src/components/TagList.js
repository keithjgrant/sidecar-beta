import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const List = styled.ul`
  width: calc(100vw - 2em);
  max-width: 800px;
  padding-left: 0;
  list-style: none;
`;

const TagLink = styled(Link)`
  display: block;
  padding: 0.5em 1em;
  border: 1px solid var(--gray-4);
  text-decoration: none;
`;

export default function TagList({ tags }) {
  return (
    <List>
      {tags.map((tag) => (
        <li key={tag}>
          <TagLink to={`/tags/${tag}`}>{tag}</TagLink>
        </li>
      ))}
    </List>
  );
}
