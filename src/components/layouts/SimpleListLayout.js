import React from 'react';
import styled from 'styled-components';
import Header from '../header/Header';
import Footer from '../Footer';

const Main = styled.main`
  width: calc(100vw - 2em);
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 2rem;
`;

export default function SimpleListLayout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
