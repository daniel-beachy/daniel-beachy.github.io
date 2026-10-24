# Portfolio site: instructions for agents

This is Daniel Beachy's portfolio, live at **https://daniel-beachy.github.io**. It is a Create React
App (React 18 + react-bootstrap + Sass) site in the repo `daniel-beachy/daniel-beachy.github.io`.
Most requests are "add my new project as a card" or "update a card". Follow the checklist below.

## Where things are

| What | Where |
| --- | --- |
| Project list (cards) | `src/components/Projects.jsx` (one object per card) |
| Card markup | `src/components/ProjectCard.jsx` |
| Card tests | `src/components/Projects.test.jsx` |
| Thumbnails | `src/img/<slug>-image.png` |
| Styles | `src/custom.scss` (`.projects-grid` is 2 columns, 1 on phones) |
| Thumbnail tool | `scripts/screenshot.sh` |
| Deploy | `.github/workflows/deploy.yml` (every push to `main`) |

Each project lives in its own folder next to this one (`~/AI_PROJECTS/<repo>`) and its own GitHub
repo. Never edit a project's code from here unless asked.

## Adding a project card

1. **Find the project's live URL.**
   - GitHub Pages project site (`daniel-beachy.github.io/<repo>/`): use the **relative** URL
     `"<repo>/"` with the trailing slash, as for `flossforge/` and `nfl-season-tracker-v3/`.
   - Cloudflare Workers or another host: use the full `https://…` URL.
   - Open the URL and check that it loads before you add the card.
2. **Make the thumbnail** (spec below):
   `scripts/screenshot.sh "<live url>" <slug>`. Then **open the PNG and look at it**. If you're not
   sure which view Daniel would find most eye-catching, capture several candidates and let him pick
   before you go on (see "Pick the most eye-catching view").
3. **Add the card** to the `projects` array in `Projects.jsx` and import the image at the top. Ask
   Daniel where it goes in the order (see "Card order"); if he doesn't say, put it last.
   ```js
   import deepRoots from "../img/deep-roots-image.png";
   // …
   { imgUrl: deepRoots, title: "Deep Roots", buttonUrl: "time-tree-v1/",
     description: "Pick any two living things and find out how long ago they were family.",
     builtWith: { kind: "ai", label: "Claude Opus 5.5" } },
   ```
4. **Update the tests** in `Projects.test.jsx`: change the `toHaveLength(N)` card count, update the
   expected title order in the "chosen order" test, and add a test that clicking the new card's
   button opens its URL (copy an existing test).
5. **Verify**, then **deploy** (sections below).

### Thumbnail spec

The thumbnail is what makes a visitor click, so it should be **as eye-catching as possible and
show off the app's most visually appealing feature**, not just whatever the landing page shows
first. Every thumbnail must also match the others in format, or the grid looks inconsistent.

#### Pick the most eye-catching view

- Look around the app first: the richest chart, map, tree, board or animation frame usually beats a
  form, a list or a mostly empty landing page. Prefer a screen full of color and real-looking
  content.
- Reach that view with a deep link (URL path, hash or query string) so the script can capture it.
- **If you aren't sure which view Daniel would find most visually appealing, don't guess.** Capture
  2–4 candidates with different slugs (e.g. `<slug>-option-a`, `<slug>-option-b`), look at each one
  yourself, then show them all to Daniel with a line on what each shows, and wait for his pick.
  Rename the chosen file to `src/img/<slug>-image.png` and delete the rest before committing.

#### Format

- **1200 × 750 px PNG** (16:10, the card's `aspect-ratio`), at **1× scale**. A retina capture
  (2400×1500) is the wrong size.
- **The page only**: no browser chrome, scrollbars, cursor, or OS window.
- **Dark mode.** All current thumbnails are dark. If an app has a light/dark toggle, capture it dark.
- **Top of the page, with the app's own header visible**, showing the view chosen above (Deep Roots
  uses a deep link to its blue-whale-vs-hippo comparison rather than its landing page).
- Everything loaded: no spinners, empty states, or missing photos. Use real-looking data, never
  personal data.
- Use `src/img/<slug>-image.png` with a kebab-case slug, and keep it under about 400 KB.

The script handles size, scale, chrome and wait time. Dark mode is forced via the
`prefers-color-scheme` flag. Check the result yourself with an image viewer or your Read tool.

### Card copy style

- **Title:** the app's display name ("Sunday HQ", "Deep Roots"), not the repo name.
- **Description:** one short, casual sentence of about 50–80 characters, ending with a period. Say
  what it does for the visitor, with no tech stack and no marketing words. Examples:
  "A little visual solver for the N-Queens puzzle." "All the fantasy football stuff I want to see on
  Sundays."
- The grid has 2 columns, so an odd number of cards leaves one alone in the last row. Mention this
  to Daniel rather than changing the layout unasked.

### Card order

The order is Daniel's choice, not chronological: the two hand-coded originals (N-Queens, Sorting
Visualizer) stay first, then the AI-built projects from favorite to least favorite. As of
2026-10-23 (reordered by Daniel) that is: Deep Roots, Genome Dashboard, Gospels Explorer, Game Pass
Companion, NFL Season Tracker, Sunday HQ, Secret Santa Coordinator, FlossForge. Never reorder unasked.

### "Built with" label (required on every card)

Daniel wants it to be clear which projects he coded himself and which an AI model wrote. Every card
has `builtWith: { kind, label }`, shown as a small pill on the thumbnail's bottom-left corner:

- `kind: "hand"` with `label: "Hand-coded · <year>"` means written by Daniel without AI. Only N-Queens
  and Sorting (2024) qualify. Later Copilot maintenance commits don't change that.
- `kind: "ai"` with the **specific model** as the label, e.g. `"Claude Opus 5.5"`, `"GPT-5.6 Sol"`.
  Name the model that wrote most of the code. For a project you build in this session, that's you.
  Keep the label short (it has to fit on a phone-width card).
- If the model can't be verified, use the tool name (e.g. `"GitHub Copilot"`) rather than guessing,
  and tell Daniel.

How to find it for a past project:
- Claude Code: the `Co-Authored-By: Claude <model>` commit trailer names the model.
- GitHub Copilot CLI: commits carry `Co-authored-by: Copilot` and often `Copilot-Session: <id>`.
  Sessions run on this Mac are logged in `~/.copilot/session-state/<id>/events.jsonl`; its
  `session.start` event has `selectedModel`. You can also match the repo's first commit time to a
  session's `created_at` in `~/.copilot/session-store.db`. Sessions from Daniel's work laptop
  (commits by `danielbeachy@microsoft.com`) are not on this machine.

Current provenance:
- Deep Roots: Claude Opus 5.5 (Claude Code).
- Gospels Explorer (`gospels-explorer-v1`): Claude Opus 5.5 (Claude Code). The thumbnail is the home
  page (headline plus the four-Gospel ribbon map) captured at a 1920×1200 window and scaled down to
  1200×750 with `sips -z 750 1200`, so the whole map fits; Daniel asked for that zoomed-out view.
- Game Pass Companion (`game-pass-companion-v1`): Claude Opus 5.5 (Claude Code). The thumbnail is the
  It Takes Two detail view, showing a Claude-written note.
- Genome Dashboard (`wgs-analysis-v1`): Claude Opus 5.5. Steps 0–8 came from Copilot CLI session `01783dc9…`
  (Opus 5.5, with Claude Sonnet 5 subagents), later steps from Claude Code. The card shows the public HG002
  demo, never Daniel's own genome.
- Secret Santa: GPT-5.6 Sol (Copilot CLI session `e31981e5…`, started 7 minutes before the first
  commit).
- NFL Season Tracker and Sunday HQ: GPT-6 Astra (Copilot CLI on the work laptop, confirmed by Daniel).
- FlossForge: Claude Opus 5 (Copilot CLI on the work laptop, confirmed by Daniel). Daniel isn't happy
  with it and plans to redo it with Opus 5.5. When that happens, update the card's URL, thumbnail and
  label.

### Project-side convention

Each project app has a **"More projects" link in its header** pointing to
`https://daniel-beachy.github.io/`. Use exactly that wording, not "Portfolio" (Daniel renamed it in
every app on 2026-10-23). An icon-only home link (N-Queens, Sorting) is fine as is. If a new project
lacks the link, add it in the project's own repo (matching that app's style), check that it fits at
phone width, and redeploy it **before** taking the thumbnail.

## Verify locally

```bash
npm ci                                       # first time only
CI=true npx react-scripts test --watchAll=false
BROWSER=none PORT=3000 npm start             # http://localhost:3000
```

Scroll to "Personal projects". Check the new card at desktop width and phone width (one column). The
image should fill the card's media area with no letterboxing, and the "View project" button should
open the right URL.

## Deploy

```bash
git add -A && git commit -m "Add <Project> project card"
git push origin main
gh run watch "$(gh run list --limit 1 --json databaseId -q '.[0].databaseId')" --exit-status
```

The workflow runs `npm ci` and `npm run build` with `CI=false` (CRA would otherwise fail the build on
lint warnings), then publishes `build/` to Pages. Never commit `build/`, which is gitignored. After the
run succeeds, load https://daniel-beachy.github.io (hard refresh) and click the new card's button on
the live site.

Commits go straight to `main`; this repo doesn't use PRs.
