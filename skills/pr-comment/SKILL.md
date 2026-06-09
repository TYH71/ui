---
name: pr-comment
description: Use when the user asks to write, draft, summarize, or compose a pull request description or change summary. Covers reviewer-facing PR bodies, strict Summary plus Key Changes formatting, and issue-closing keywords when the linked issue is known.
---

# PR Comment

This skill writes PR descriptions, not inline review replies.

## Output rules

- Output only one fenced `markdown` block.
- Use `## Summary` and `## Key Changes`.
- Include issue-closing text like `Closes #43` when appropriate.

## Workflow

1. Identify the user-visible change and root cause.
2. Summarize the change for reviewers before diff details.
3. Group key changes by area when the diff spans multiple surfaces.
4. Keep the write-up concise and copy-paste ready.
