import styled from 'styled-components';

const IndexMain = styled.main`
  width: 100%;
  margin: 0 auto;
  padding: 0 1em;
  display: grid;
  grid-template-columns: 1rem auto 1rem;

  & > * {
    grid-column: 2;
  }

  @media (min-width: 800px) {
    max-width: 800px;
  }
`;
export default IndexMain;

export const Bleed = styled.div`
  grid-column: 1 / -1;
`;
