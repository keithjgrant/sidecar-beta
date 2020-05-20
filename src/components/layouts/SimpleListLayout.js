import React from 'react';
import styled from 'styled-components';
import PageAnimationWrapper from '../PageAnimationWrapper';
import Header from '../header/Header';
import PwaHeader from '../header/PwaHeader';
import PageHeading from '../PageHeading';
import Footer from '../Footer';
import isPwa from '../../util/isPwa';

const Main = styled.main`
  width: calc(100vw - 2em);
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 2rem;
`;

export default function SimpleListLayout({ title, children }) {
  return (
    <PageAnimationWrapper>
      {isPwa() ? <PwaHeader title={title} /> : <Header />}
      <Main>
        {!isPwa() ? <PageHeading>All Tags</PageHeading> : null}
        {children}
      </Main>
      <Footer />
    </PageAnimationWrapper>
  );
}
