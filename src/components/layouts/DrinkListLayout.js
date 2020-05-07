import React from 'react';
import styled from 'styled-components';
import Header from '../header/Header';

const Main = styled.main`
  width: calc(100vw - 2em);
  margin: 0 auto;
  padding-bottom: 2rem;

  @media (min-width: 30em) {
    max-width: 70em;
  }
`;

export default function DrinkListLayout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}
