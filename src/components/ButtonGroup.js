import styled from 'styled-components';

const ButtonGroup = styled.div`
  display: inline-flex;
`;
export default ButtonGroup;

export const Button = styled.button`
  background: transparent;
  border: 1px solid var(--gray-light);
  border-right-width: 0;
  color: var(--brand-primary);
  cursor: pointer;

  &:first-child {
    border-top-left-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
  }

  &:last-child {
    border-right-width: 1px;
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
  }

  &:hover {
    border-color: var(--brand-primary);
  }

  &&:disabled {
    color: var(--gray-light);
    cursor: default;

    &:hover {
      color: var(--gray-light);
      border-color: var(--gray-light);
    }
  }
`;
