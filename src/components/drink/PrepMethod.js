import React from 'react';
import styled from 'styled-components';

const Label = styled.div`
  margin-top: 28px;
  text-align: center;
  text-transform: uppercase;
  color: var(--gray-8);
  font-size: 0.7rem;
  letter-spacing: 0.02em;

  @media (min-width: 40em) {
    margin-top: 0;
  }
`;

function getMethod(tags) {
  if (tags.includes('shaken')) {
    return 'shaken';
  }
  if (tags.includes('stirred')) {
    return 'stirred';
  }
  if (tags.includes('built')) {
    return 'built';
  }
  return '';
}

export default function PrepMethod({ tags = [] }) {
  const method = getMethod(tags);
  if (!method) {
    return null;
  }
  return <Label>{method}</Label>;
}
