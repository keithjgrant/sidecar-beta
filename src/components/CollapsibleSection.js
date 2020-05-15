import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';

const Toggle = styled.button`
  position: relative;
  margin-left: 0.6rem;
  padding-right: 1.8em;

  &::after {
    content: '';
    position: absolute;
    top: 0.8em;
    right: 0.6em;
    border: 0.4em solid transparent;
    border-top-color: currentColor;
    transform-origin: center 0.2em;
  }

  ${(props) =>
    props.isExpanded &&
    css`
      color: var(--gray-8);
      &::after {
        transform: rotate(180deg);
      }
    `}
`;

const Drawer = styled.div`
  margin-top: 0.4em;
  transition: height 0.3s cubic-bezier(0.33, 1, 0.68, 1);
  overflow: hidden;
`;

export default function CollapsibleSection({ label, startExpanded, children }) {
  const [isExpanded, setIsExpanded] = useState(startExpanded);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);
  const toggle = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (isExpanded) {
      setHeight(ref.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isExpanded]);

  return (
    <div>
      <Toggle onClick={toggle} isExpanded={isExpanded} className="button">
        {label}
      </Toggle>
      <Drawer
        ref={ref}
        css={css`
          height: ${height}px;
        `}
      >
        {children}
      </Drawer>
    </div>
  );
}

CollapsibleSection.defaultProps = {
  label: 'Expand',
};
