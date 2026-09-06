import assert from 'node:assert/strict';
import test from 'node:test';
import { renderInlineCode } from './inlineCode.mjs';

test('renders a single-backtick span as an inline code fragment', () => {
  assert.deepEqual(renderInlineCode('Developed `asc_read` to decode files'), [
    { type: 'text', value: 'Developed ' },
    { type: 'code', value: 'asc_read' },
    { type: 'text', value: ' to decode files' },
  ]);
});

test('leaves text without a matched code span unchanged', () => {
  assert.deepEqual(renderInlineCode('Plain project detail'), [
    { type: 'text', value: 'Plain project detail' },
  ]);
});

test('leaves an unmatched backtick span unchanged', () => {
  assert.deepEqual(renderInlineCode('Uses `an incomplete span'), [
    { type: 'text', value: 'Uses `an incomplete span' },
  ]);
});
