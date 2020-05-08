import React from 'react';
import styled, { css } from 'styled-components';

const Controls = styled.div`
  color: var(--gray-8);
`;

const Group = styled.div`
  margin-bottom: 1em;
  display: inline-flex;
  flex-wrap: wrap;
`;

export default function ButtonGroup({ label, children }) {
  return (
    <Controls>
      {label ? <span>{label}: </span> : null}
      <Group>{children}</Group>
    </Controls>
  );
}

const buttonStyles = css`
  padding-right: 0.5em;
  padding-left: 0.5em;
  background: transparent;
  border: 1px solid var(--gray-light);
  color: var(--gray-light);
  font-weight: bold;
  cursor: pointer;
  user-select: none;

  &:first-child {
    border-top-left-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
  }

  &:last-child {
    border-right-width: 1px;
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
  }

  &:hover {
    border-color: var(--brand-primary);
    color: var(--orange-7);
  }
`;

const disabledStyles = css`
  color: var(--brand-primary);
  cursor: default;

  &:hover {
    color: var(--brand-primary);
    border-color: var(--gray-light);
  }
`;

export const Button = styled.button`
  ${buttonStyles}

  &&:disabled {
    ${disabledStyles}
  }
`;

const RadioLabel = styled.label`
  ${buttonStyles}

  ${(props) => (props.disabled ? disabledStyles : null)}
`;

const Radio = styled.input`
  display: none;
`;

export function Options({ name, value, options, onChange }) {
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
          />
          {val}
        </RadioLabel>
      ))}
    </>
  );
}
