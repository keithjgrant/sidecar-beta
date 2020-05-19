import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import CaretLeft from '../svg/CaretLeft';

const BackLink = styled(Link)`
  display: inline-block;
  padding: 1rem 1.8rem 0.9rem;

  &:hover {
    color: var(--white);
  }
`;

export default function BackButton({ href, alt }) {
  // const goBack = (e) => {
  //   e.preventDef
  // }

  return (
    <BackLink to={href || '/'}>
      <CaretLeft title={alt} />
    </BackLink>
  );
}
