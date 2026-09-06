export function renderInlineCode(text) {
  const fragments = [];
  const pattern = /`([^`]+)`/g;
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      fragments.push({ type: 'text', value: text.slice(lastIndex, match.index) });
    }
    fragments.push({ type: 'code', value: match[1] });
    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    fragments.push({ type: 'text', value: text.slice(lastIndex) });
  }

  return fragments.length > 0 ? fragments : [{ type: 'text', value: text }];
}
