---
name: 8sl-pattern-review
description: Use when reviewing, debugging, or cleaning up existing 8StarLabs UI usage. Focus on import correctness, component composition, docs drift, unnecessary rewrites, and mismatches between intended registry usage and actual implementation.
---

# 8StarLabs Pattern Review

This skill reviews existing 8StarLabs UI usage.

## Focus

- Wrong imports or aliases
- Bad component composition
- Integration mistakes
- Drift from repo docs or examples
- Custom rewrites where registry usage should be preserved

## Workflow

1. Read the current code and identify the actual user-visible issue.
2. Separate correctness bugs from style or pattern drift.
3. Recommend the smallest fix that restores aligned usage.
4. Keep findings concise and grounded in the code.

## References

- Add references here as the skill grows.
