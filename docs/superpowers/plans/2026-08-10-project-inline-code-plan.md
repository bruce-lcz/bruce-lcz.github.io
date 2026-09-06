# Project detail inline-code rendering Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make single-backtick spans in project detail list items render as semantic inline `code` elements with the existing Typography styling.

**Architecture:** Keep the project page self-contained and add a small pure renderer that converts only matched single-backtick spans into Astro-renderable fragments. Reuse the renderer for English and Chinese list text while leaving all other text unchanged; no new Markdown dependency is needed.

**Tech Stack:** Astro 7, TypeScript, Tailwind Typography, npm scripts (`check`, `build`).

---

### Task 1: Add a failing renderer check

**Files:**
- Create: `src/utils/inlineCode.test.mjs`
- Create: `src/utils/inlineCode.mjs`

- [ ] **Step 1: Write the failing test**

Create a Node-native test that imports the renderer and asserts that a text span is split into plain text plus a `code` fragment, while text without backticks remains unchanged:

```js
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
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test src/utils/inlineCode.test.mjs`

Expected: FAIL because `src/utils/inlineCode.mjs` does not yet export `renderInlineCode`.

### Task 2: Implement and integrate the renderer

**Files:**
- Modify: `src/utils/inlineCode.mjs`
- Modify: `src/pages/projects/[id].astro:1-10,137-223`
- Modify: `src/utils/inlineCode.test.mjs`

- [ ] **Step 1: Implement the minimal renderer**

Export this pure function from `src/utils/inlineCode.mjs`. It scans one string with a single-backtick pair, emits `{ type: 'text' }` fragments for surrounding text, emits `{ type: 'code' }` for matched content, and falls back to one text fragment for unmatched input:

```js
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
```

- [ ] **Step 2: Run the focused test to verify it passes**

Run: `node --test src/utils/inlineCode.test.mjs`

Expected: PASS for both renderer behaviours.

- [ ] **Step 3: Render fragments in the Astro page**

Import `renderInlineCode` near the existing `BaseLayout` and data imports. Add this frontmatter helper:

```astro
const renderProjectText = (text: string) =>
  renderInlineCode(text).map((fragment) =>
    fragment.type === 'code' ? <code>{fragment.value}</code> : fragment.value,
  );
```

Replace each narrative list's English and Chinese text interpolation (`context`, `constraint`, `systemDesign`, `implementationHighlights`, and `outcome`/`impact`) with `{renderProjectText(text)}` and `{renderProjectText(zhText)}`. Astro escapes the text fragments and emits the `code` fragments as semantic elements, allowing the existing `.prose code` styles to apply.

- [ ] **Step 4: Add an unmatched-backtick regression case**

Extend the focused test with `renderInlineCode('Uses `an incomplete span')` and assert that it returns one unchanged text fragment, so malformed content is not silently dropped.

- [ ] **Step 5: Run the focused test again**

Run: `node --test src/utils/inlineCode.test.mjs`

Expected: PASS for all three behaviours.

### Task 3: Verify the Astro page and build

**Files:**
- No additional files.

- [ ] **Step 1: Run Astro type/template validation**

Run: `npm run check`

Expected: Astro check completes successfully with no new errors.

- [ ] **Step 2: Run the production build**

Run: `npm run build`

Expected: `astro check` and the static build both complete successfully.

- [ ] **Step 3: Review the final diff**

Run: `git diff --check; git status --short`

Expected: no whitespace errors, and only the renderer/page/test files are modified beyond the already-committed planning documents.

- [ ] **Step 4: Commit the implementation**

```bash
git add src/utils/inlineCode.mjs src/utils/inlineCode.test.mjs src/pages/projects/[id].astro
git commit -m "fix: render inline code in project details"
```
