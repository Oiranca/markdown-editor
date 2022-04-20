import { markdownToHtml } from './markdownToHtml';

describe('Markdown style', () => {
  it('Is a h1 tag', () => {
    const markdownText = '# This is a H1 tag';
    const method = markdownToHtml(markdownText);
    expect(method).toMatchObject({ type: 'h1', props: { children: 'This is a H1 tag' } });
  });
});
