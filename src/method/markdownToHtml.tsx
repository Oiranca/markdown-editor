import React from 'react';

export const markdownToHtml = (markDownText: string) => {
  const regex = /^#\s/;
  if (regex.test(markDownText)) {
    return <h1>{markDownText.replace('#', '')}</h1>;
  }
  return markDownText;
};
