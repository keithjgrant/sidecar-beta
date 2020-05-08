import React from 'react';
import styled from 'styled-components';
import GrowWrapper from './GrowWrapper';
import Header from '../header/Header';
import Footer from '../Footer';

const ContentWrapper = styled.div`
  flex: 1;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  padding-bottom: 0.5em;
  align-items: center;
  justify-content: center;
`;

export default function CardLayout({ children }) {
  return (
    <GrowWrapper>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </GrowWrapper>
  );
}
