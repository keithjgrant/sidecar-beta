import React from 'react';
import styled, { css } from 'styled-components';

const Controls = styled.div`
  color: var(--gray-8);
`;

const Group = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
`;

export default function RadioGroup({ label, children }) {
  return (
    <Controls>
      {label ? <span>{label}: </span> : null}
      <Group>{children}</Group>
    </Controls>
  );
}

const disabledStyles = css`
  color: var(--brand-primary);
  cursor: default;

  &:hover {
    color: var(--brand-primary);
    border-color: var(--gray-light);
  }
`;

const RadioLabel = styled.label`
  ${(props) => (props.disabled ? disabledStyles : null)}
`;

const Radio = styled.input`
  margin-left: 1em;
`;

export function RadioOptions({ name, value, options, onChange }) {
  return (
    <>
      {options.map((val) => (
        <RadioLabel key={val} disabled={value === val}>
          <Radio
            type="radio"
            name={name}
            value={val}
            checked={value === val}
            onChange={(event) => onChange(event.target.value)}
          />{' '}
          {val}
        </RadioLabel>
      ))}
    </>
  );
}
