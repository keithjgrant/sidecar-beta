import React from 'react';
import styled from 'styled-components';
import Header from '../header/Header';

const Main = styled.main`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 1em 2rem;

  @media (min-width: 500px) {
    width: max-content;
    min-width: 500px;
  }
`;

const Article = styled.article`
  max-width: 40em;
  margin: 1em auto;
  padding: 2em 1em;
  border: 1px solid var(--gray-4);
  border-radius: var(--border-radius);
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.1);
  background-color: var(--gray-dark);

  h1,
  h2,
  h3 {
    color: inherit;
  }

  h1 {
    margin: 1.72rem 0;
  }

  h2 {
    margin: 2.32rem 0 0.85rem;
  }

  > h1:first-child {
    margin-top: 0;
  }

  p,
  ul {
    margin: 1.5em 0;
  }
`;

export default function ArticleLayout({ children }) {
  return (
    <>
      <Header />
      <Main>
        <Article>{children}</Article>
      </Main>
    </>
  );
}
