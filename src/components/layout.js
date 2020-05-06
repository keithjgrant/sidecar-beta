import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './header/Header';

const ContentWrapper = styled.div`
  padding-bottom: 2rem;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
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
