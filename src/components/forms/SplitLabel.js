import React from 'react';
import styled from 'styled-components';

const Heading = styled.strong`
  display: block;
  font-weight: 400;
`;

export default function SplitLabel({ heading, className, children }) {
  return (
    <div className={className}>
      {heading ? <Heading>{heading}</Heading> : null}
      {children}
    </div>
  );
}
