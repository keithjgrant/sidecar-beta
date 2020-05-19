import React from 'react';
import styled from 'styled-components';
import CaretLeft from '../svg/CaretLeft';

const Button = styled.button`
  display: inline-block;
  padding: 1rem 1.8rem 0.9rem;
  border: 0;
  background: transparent;
  color: var(--brand-primary);
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`;

export default function BackButton({ alt }) {
  const onClick = (e) => {
    e.preventDefault();
    window.history.back();
  };

  return (
    <Button onClick={onClick}>
      <CaretLeft title={alt} />
    </Button>
  );
}
