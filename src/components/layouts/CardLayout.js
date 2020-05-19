import React from 'react';
import styled from 'styled-components';
import GrowWrapper from './GrowWrapper';
import MobileHeader from '../header/MobileHeader';
import Footer from '../Footer';
import isPwa from '../../util/isPwa';

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
      {isPwa() ? <MobileHeader /> : null}
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </GrowWrapper>
  );
}
