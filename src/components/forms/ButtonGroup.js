import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
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

  &&:disabled {
    color: var(--brand-primary);
    cursor: default;

    &:hover {
      color: var(--brand-primary);
      border-color: var(--gray-light);
    }
  }
`;

const RadioButton = styled.button`
  padding: var(--input-padding);
  border: var(--input-border);
  border-radius: 0;
  outline: 0;
  font-weight: 400;
  color: var(--gray-8);
  color: inherit;
  background-color: var(--gray-dark);
  cursor: pointer;

  &:first-child {
    border-top-left-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
  }

  &:last-child {
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
  }

  &:hover {
    color: var(--white);
  }

  &:focus {
    outline: var(--focus-outline);
  }

  &[disabled] {
    cursor: default;
    color: var(--white);
    background: hsl(315, 3.2%, 20%);
  }
`;

export default function ButtonGroup({ value, options, onChange }) {
  return (
    <div>
      {options.map((val) => (
        <RadioButton
          key={val}
          disabled={value === val}
          onClick={(e) => {
            e.preventDefault();
            onChange(val);
          }}
        >
          {val}
        </RadioButton>
      ))}
    </div>
  );
}
