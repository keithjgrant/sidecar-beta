import React from 'react';
import Header from '../header/Header';

export default function HomepageLayout({ children }) {
  return (
    <>
      <Header isHome />
      <div>{children}</div>
    </>
  );
}
