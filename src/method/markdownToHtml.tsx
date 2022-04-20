import React from 'react';

export const markdownToHtml = (markDownText: string) => {
  const alphanumericCharacter = /\w/;
  const regex = /^#\s/;
  if (regex.test(markDownText)) {
    return <h1>{markDownText.substring(markDownText.search(alphanumericCharacter))}</h1>;
  }
  return markDownText;
};
