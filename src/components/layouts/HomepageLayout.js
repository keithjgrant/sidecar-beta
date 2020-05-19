import React from 'react';
import Header from '../header/Header';
import isPwa from '../../util/isPwa';

export default function HomepageLayout({ children }) {
  return (
    <>
      {!isPwa() ? <Header isHome /> : null}
      <div>{children}</div>
    </>
  );
}
