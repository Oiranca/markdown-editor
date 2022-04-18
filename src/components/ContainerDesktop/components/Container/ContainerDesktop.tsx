import React, { ReactNode, useState } from 'react';
import { markdownToHtml } from '../../../../method/markdownToHtml';
import './ContainerDeskop.css';

export const ContainerDesktop = () => {
  const [text, setText] = useState<string>('');
  const [previewText, setPreviewText] = useState<ReactNode>('');

  const onHandledText = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const eventTarget = event.currentTarget.value;
    setText(eventTarget);
    setPreviewText(markdownToHtml(eventTarget));
  };

  return (
    <div className={'container'}>
      <textarea className={'desktopDashboard'} onChange={onHandledText} value={text} />
      <div id={'previewDashboard'}>{previewText}</div>
    </div>
  );
};
