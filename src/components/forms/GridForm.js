import React from 'react';
import styled from 'styled-components';

const nbsp = '\u00A0';

const GridForm = styled.form`
  display: grid;
  grid-template-columns: min-content auto;
  grid-gap: var(--gap-size);
  align-items: baseline;
`;

export default GridForm;

const Label = styled.label`
  text-align: right;
`;

export function GridFormLabel({ props, children }) {
  if (typeof children === 'string') {
    return <Label {...props}>{children.replace(' ', nbsp)}</Label>;
  }
  return <Label {...props}>{children}</Label>;
}
