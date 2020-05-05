import React from 'react';
import PropTypes from 'prop-types';
import Header from './header/Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      {/* TODO: Footer component */}
      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer> */}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
