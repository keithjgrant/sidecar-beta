import React, { createElement } from 'react';
import Markdown from 'react-markdown';

export default function InlineMarkdown({ source }) {
  return (
    <Markdown
      source={source}
      renderers={{
        paragraph: (props) => createElement('span', props),
      }}
    />
  );
}
