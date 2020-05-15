import React from 'react';
import { Link } from 'gatsby';
import useWebP from './useWebP';

export default function TileLink({ href, image, imagePosition, children }) {
  const webp = useWebP();
  let imageUrl = '';
  if (image) {
    const { fluid } = image.childImageSharp;
    imageUrl = webp ? fluid.srcWebp : fluid.src;
  }

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
