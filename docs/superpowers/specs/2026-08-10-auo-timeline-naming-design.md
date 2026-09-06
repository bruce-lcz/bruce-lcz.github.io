# AUO Timeline Naming Design

## Scope

Update the Chinese Timeline entry for the AUO employment period so its company name uses the English corporate naming consistently.

## Change

- Replace `友達光電－先進製造中心` with `AUO Corporation－先進製造中心`.
- Apply the change only to the Chinese Timeline data in `src/data/config.zh.ts`.
- Keep English content and all non-Timeline content unchanged.

## Verification

Run the project's type and Astro validation after the data-only edit, and confirm that the old Timeline label no longer occurs in the Chinese configuration.
