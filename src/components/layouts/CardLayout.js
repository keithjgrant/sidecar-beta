import React from 'react';
import styled from 'styled-components';
import Header from '../header/Header';
import Footer from '../Footer';

const ContentWrapper = styled.div`
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  min-height: var(--fill-height);
  padding-bottom: 0.5em;
  align-items: center;
  justify-content: center;
`;

export default function CardLayout({ children }) {
  return (
    <>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </>
  );
}
