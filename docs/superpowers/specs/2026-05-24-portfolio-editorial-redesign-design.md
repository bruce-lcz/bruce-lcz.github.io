# Portfolio Editorial Redesign Design

## Goal

Redesign the personal portfolio layout while preserving the current white, gray, and Google-blue color direction. The primary issue to solve is visual hierarchy: the page currently feels clean but too evenly weighted, so visitors do not get a strong first impression or a clear reading path.

The redesign should make the site feel like a refined tech editorial profile for Bruce Cheng: professional, calm, precise, and more personal than a generic resume template.

## Scope

This design covers the home page layout and presentation details:

- Hero composition
- Section navigation
- Experience, Projects, and Skills hierarchy
- Shared spacing, cards, motion, and visual rhythm
- Chinese text encoding cleanup where broken UI labels affect polish

This design does not change the content model, routing strategy, project data structure, or deployment setup unless a small change is needed to support the visual layout.

## Aesthetic Direction

The selected direction is **Editorial Focus**.

The site should keep the existing light theme, soft gray surfaces, and blue primary color, but shift from a centered resume layout to a more intentional editorial composition. The visual memory should be: "a sharp AI application engineer profile with a calm publication-like rhythm."

The design should avoid generic portfolio patterns by using:

- A stronger above-the-fold composition
- Asymmetric hero layout on desktop
- Clear section hierarchy instead of equal-weight blocks
- A more intentional relationship between avatar, role, CTA, and capability proof points
- Restrained motion that supports reading flow

## Hero

The hero becomes the main visual anchor of the page.

Desktop layout:

- Use a two-column composition.
- Left column contains name, role, tagline, primary CTA, secondary social/resume links, and language toggle placement that does not compete with the headline.
- Right column contains the avatar and a compact stack of editorial "signal cards" such as role, domain, and workflow focus.
- Keep the subtle grid background, but add a soft blue glow or framed surface so the hero has depth without losing the clean palette.

Mobile layout:

- Collapse into a single-column layout.
- Keep the avatar near the top, but ensure the headline and CTA remain the dominant reading path.
- Signal cards can become a compact stacked group below the CTA.

The hero should communicate Bruce's position quickly: LLM application engineering, AI workflow/product building, and enterprise/manufacturing context.

## Section Navigation

Replace the current centered segmented control feel with an editorial chapter selector.

Behavior stays the same: switching between Experience, Projects, and Skills.

Visual changes:

- Present tabs as content routes rather than generic pill buttons.
- Give the active tab a stronger indicator, such as a blue underline, raised card treatment, or numbered chapter marker.
- Add short contextual helper text if space allows, so visitors understand the difference between the routes.
- Keep keyboard and click behavior straightforward.

The navigation should sit close enough to the hero to feel like the next step in the page story.

## Experience

Experience should read like a professional timeline rather than a list of identical cards.

Design changes:

- Keep current company, role, period, description, achievements, related projects, and tech stack data.
- Make current role more visually prominent with a clearer status mark.
- Use a subtle timeline rail or editorial section marker to guide scanning.
- Improve spacing between role metadata, description, achievements, related projects, and tech tags.
- Related project buttons should feel like meaningful cross-links, not secondary form controls.

The section should preserve readability over decoration.

## Projects

Projects should avoid equal-weight card monotony.

Design changes:

- Use a stronger section heading and intro.
- Highlight the first or most important project with a larger card treatment when layout space allows.
- Keep remaining projects in a tidy grid with clearer title, category, summary, and tag hierarchy.
- Add subtle hover elevation and arrow motion, but avoid excessive animation.

The project cards should make it easy to understand not only what was built, but what kind of problem Bruce tends to solve.

## Skills

Skills should support the story instead of becoming a disconnected tag wall.

Design changes:

- Keep grouped skill categories.
- Present the groups as a capability map with stronger category headings and calmer tags.
- Use lighter visual weight than Projects and Experience.
- Keep motion simple and staggered.

## Shared Visual System

The redesign should preserve the core palette:

- White and near-white backgrounds
- Slate/Google-like grays
- Google-blue primary accent
- Sparse semantic accents only when useful

Refinements:

- Consider replacing or reducing reliance on generic typography if the change is low-risk, but do not make typography the main scope.
- Standardize card radius, border softness, shadows, and hover behavior.
- Use CSS variables or Tailwind theme values where practical.
- Keep animations modest: page/section entrance, tab content transitions, and hover details.
- Respect reduced-motion preferences if modifying motion behavior.

## Accessibility And Responsiveness

The redesign must:

- Preserve semantic buttons and links.
- Keep visible focus styles for interactive controls.
- Maintain readable contrast.
- Work at mobile, tablet, and desktop widths.
- Avoid layout shifts caused by tab switching where practical.

## Testing And Verification

After implementation, verify:

- `npm run build` succeeds.
- The site renders in a local browser.
- Hero, tabs, Experience, Projects, Skills, modal links, language toggle, contact link, social links, and resume download still work.
- Responsive layouts are acceptable on mobile and desktop widths.
- No broken or garbled Chinese UI labels remain in visible navigation, buttons, footer, or headings.

## Non-Goals

- No full brand rewrite.
- No dark mode.
- No new backend or CMS.
- No data-model redesign unless required by visual presentation.
- No large dependency additions.

