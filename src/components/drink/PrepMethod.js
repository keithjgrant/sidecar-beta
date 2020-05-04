import React from 'react';

function getMethod(tags) {
  if (tags.includes('shaken')) {
    return 'shaken';
  }
  if (tags.includes('stirred')) {
    return 'stirred';
  }
  if (tags.includes('built')) {
    return 'built';
  }
  return '';
}

export default function PrepMethod({ tags = [] }) {
  const method = getMethod(tags);
  if (!method) {
    return null;
  }
  return <div className="metadata-label">{method}</div>;
}
