import React from 'react';

export const markdownToHtml = (markDownText: string) => {
  const alphanumericCharacter = /\w/;
  const regexFirstHeader = /^#\s/;
  if (regexFirstHeader.test(markDownText)) {
    return <h1>{markDownText.slice(markDownText.search(alphanumericCharacter))}</h1>;
  }
  return markDownText;
};
