import React from 'react';
import styled from 'styled-components';
import MobileHeader from '../header/MobileHeader';
import Footer from '../Footer';

const Main = styled.main`
  width: calc(100vw - 2em);
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 2rem;
`;

export default function SimpleListLayout({ title, backHref, children }) {
  return (
    <>
      <MobileHeader title={title} backHref={backHref} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
