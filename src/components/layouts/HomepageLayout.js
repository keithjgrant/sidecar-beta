import React from 'react';
import styled from 'styled-components';
import Header from '../header/Header';

const ContentWrapper = styled.div`
  padding-bottom: 2rem;
`;

export default function HomepageLayout({ children }) {
  return (
    <>
      <Header isHome />
      <ContentWrapper>{children}</ContentWrapper>
    </>
  );
}
