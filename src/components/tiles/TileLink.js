import React from 'react';
import { Link } from 'gatsby';

export default function TileLink({ href, imageUrl, imagePosition, children }) {
  const style = {
    backgroundImage: imageUrl ? `url(${imageUrl})` : null,
    backgroundPosition: imagePosition || null,
  };
  return (
    <Link to={href} style={style}>
      {children}
    </Link>
  );
}
