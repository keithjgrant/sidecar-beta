import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import { Context } from '../PageAnimationWrapper';
import CaretLeft from '../svg/CaretLeft';
import { long } from '../../util/haptic';

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
  const context = useContext(Context);
  const timeout = useRef(null);

  const onClick = async (e) => {
    e.preventDefault();
    const initialPage = window.location.href;
    await context.animateOut();
    window.history.back();
    setTimeout(() => {
      if (window.location.href === initialPage) {
        window.location.href = '/';
      }
    }, 500);
  };

  const onTouchStart = () => {
    timeout.current = setTimeout(() => {
      long();
      setTimeout(() => {
        window.location.href = '/';
      }, 150);
    }, 1000);
  };

  const onTouchEnd = () => {
    clearTimeout(timeout.current);
  };

  return (
    <Button
      onClick={onClick}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <CaretLeft title={alt} />
    </Button>
  );
}
