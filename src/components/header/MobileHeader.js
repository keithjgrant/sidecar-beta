import React from 'react';
import styled from 'styled-components';
import BackButton from './BackButton';

const HeaderBar = styled.header`
  position: sticky;
  top: 0;
  background-image: linear-gradient(
    to bottom,
    var(--gray-dark) 65%,
    transparent 100%
  );
  z-index: 1;
  display: grid;
  margin-bottom: 1rem;
  grid-template-columns: 1fr auto 1fr;
  align-items: baseline;
  background-color: transparent;
  color: var(--brand-primary);
`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: inherit;
  color: var(--gray-8);
  font-family: var(--font-body);
`;

const Left = styled.div`
  justify-self: start;
`;

const Right = styled.div`
  justify-self: end;
  grid-column: 3;
`;

export default function Header({ backHref, title, controls }) {
  return (
    <HeaderBar>
      <Left>
        <BackButton href={backHref} />
      </Left>
      {title ? <Title>{title}</Title> : null}
      <Right>{controls}</Right>
    </HeaderBar>
  );
}
