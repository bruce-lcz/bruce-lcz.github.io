# Project detail inline-code rendering

## Goal

Render text wrapped in single backticks inside project-detail list items as inline code, without changing how the rest of the item text is displayed.

## Scope

- Add a small renderer for inline code spans in `src/pages/projects/[id].astro`.
- Preserve plain text before, between, and after code spans.
- Render each matched code span as a semantic `code` element so the existing Typography styles apply.
- Use the renderer for both English and Chinese project-detail list items that are currently emitted as raw text.

## Non-goals

- Do not introduce a full Markdown parser or dependency.
- Do not support block-level Markdown, links, emphasis, or fenced code blocks.
- Do not alter project content strings.

## Behaviour

For `Developed \`asc_read\` to decode files`, output text nodes for `Developed ` and ` to decode files`, with a `code` element containing `asc_read` between them. Strings without a matched pair of backticks remain unchanged.

## Verification

Add an automated regression test for the renderer, including a normal inline-code span and text without code spans. Then run the project test/build checks relevant to the Astro page.
