import React from 'react';

export default function Select({ id, label, children }) {
  return (
    <div>
      {label ? <label htmlFor={id}>{label}: </label> : null}
      {children}
    </div>
  );
}

export function SelectOptions({ id, name, value, options, onChange }) {
  return (
    <select
      id={id}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      {options.map((val) => (
        <option key={val} type="radio" name={name} value={val}>
          {val}
        </option>
      ))}
    </select>
  );
}
