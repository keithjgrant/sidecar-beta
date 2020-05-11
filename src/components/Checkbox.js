import React from 'react';
import styled from 'styled-components';

const FormGroup = styled.div`
  user-select: none;
`;

export default function Checkbox({ id, label, checked, onChange }) {
  return (
    <FormGroup>
      <label htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            onChange(e.target.checked);
          }}
        />{' '}
        {label}
      </label>
    </FormGroup>
  );
}
