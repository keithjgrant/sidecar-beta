import React from 'react';
import styled from 'styled-components';
import GrowWrapper from './GrowWrapper';
import Header from '../header/Header';
import MobileHeader from '../header/MobileHeader';
import PageHeading from '../../components/PageHeading';
import Footer from '../Footer';
import isPwa from '../../util/isPwa';

const Main = styled.main`
  flex: 1;
  width: calc(100vw - 2em);
  margin: 0 auto;
  padding-bottom: 2rem;

  @media (min-width: 30em) {
    max-width: 70em;
  }
`;

export default function DrinkListLayout({ title, children }) {
  return (
    <GrowWrapper>
      {isPwa() ? <MobileHeader title={title} /> : <Header />}
      <Main>
        {!isPwa() ? <PageHeading>{title}</PageHeading> : null}
        {children}
      </Main>
      <Footer />
    </GrowWrapper>
  );
}
