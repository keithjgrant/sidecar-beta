import React from 'react';
import styled from 'styled-components';
import DrinkTile from './DrinkTile';

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
  grid-gap: var(--gap-size);
`;

const Heading = styled.div`
  && {
    margin-bottom: 0;
  }

  grid-column: 1 / -1;
  padding: 0.2rem 0.5rem 0.1rem;
  color: var(--white);
  opacity: 0.3;
  font-size: 0.8rem;
  text-align: right;
`;

export default function TileRow({ drinks, heading, imageMap }) {
  return (
    <>
      <Heading>{heading}</Heading>
      <Row>
        {drinks.map((drink) => {
          const slug = drink.path.replace(/^\/drinks\//, '');
          return (
            <DrinkTile key={drink.path} drink={drink} image={imageMap[slug]} />
          );
        })}
      </Row>
    </>
  );
}
