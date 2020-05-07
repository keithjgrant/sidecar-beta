import React from 'react';
import styled from 'styled-components';
import Header from '../header/Header';

const Main = styled.main`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 1em 2rem;
  display: grid;
  grid-template-columns: 1rem auto 1rem;

  & > * {
    grid-column: 2;
  }

  & > ul {
    grid-column: 1 / -1;
  }

  @media (min-width: 800px) {
    max-width: 800px;
  }
`;

export default function IndexLayout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}
