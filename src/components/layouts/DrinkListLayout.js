import React from 'react';
import styled from 'styled-components';
import GrowWrapper from './GrowWrapper';
import Header from '../header/Header';
import Footer from '../Footer';

const Main = styled.main`
  flex: 1;
  width: calc(100vw - 2em);
  margin: 0 auto;
  padding-bottom: 2rem;

  @media (min-width: 30em) {
    max-width: 70em;
  }
`;

export default function DrinkListLayout({ children }) {
  return (
    <GrowWrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </GrowWrapper>
  );
}
