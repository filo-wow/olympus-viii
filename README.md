# Olympus VIII — WoW: Forever

The website for Olympus VIII, a WoW: Forever guild formed as part of the Olympus community following Asmongold’s call to create Olympus guilds. We take Azeroth by storm, united through guild events and shared adventures.

The site introduces the guild, shares screenshots, lists the guild master and officers, and links visitors to our [Discord community](https://discord.com/invite/fbEGSfdJa). It is currently under construction.

## Current setup

This is currently a static website built with HTML, CSS, and vanilla JavaScript. The content is simple and does not currently require a backend, database, application server, or build step.

A backend will be chosen later if the site needs one. These contribution guidelines will be updated when that decision is made. Until then, contributions should work within the existing static setup.

```text
dist/
  index.html                 Page structure, metadata, and fallback copy
  assets/
    guild-content.js         Editable page copy, Discord URL, and roster
    site.js                  Applies content and renders the roster
    styles.css               Shared styling and responsive layout
    *.jpg / *.png            Site screenshots and images
.openai/
  hosting.json               Existing Sites hosting configuration
```

Despite its name, `dist/` contains the authored site files. Edit these files directly; there is no generated build output to recreate.

## Preview locally

Clone the repository, open a terminal in its root directory, and run:

```bash
python3 -m http.server 4173 --directory olympus-viii.com
```

Open <http://localhost:4173> in your browser. Stop the server with `Ctrl+C`. Python 3 is only used for this local preview; the deployed site does not require Python.

## Editing content

- **Page copy, roster, and Discord link:** edit `dist/assets/guild-content.js`. Keep roster names and ranks accurate.
- **Page structure and metadata:** edit `dist/index.html`. When changing existing copy, also update its HTML fallback so the initial page and JavaScript-rendered content agree. Update the title and description when relevant.
- **Styling:** edit `dist/assets/styles.css` and preserve the existing brown, parchment, and bronze theme.
- **Browser behavior:** edit `dist/assets/site.js`, keeping it compatible with the current plain JavaScript setup.
- **Images:** add appropriately sized files to `dist/assets/`, use descriptive filenames and alt text, and set accurate image dimensions in HTML. Use images you have permission to share and identify their source in your PR. Do not describe community screenshots as Olympus VIII events unless that is accurate.

## Contributing

Guild members are welcome to contribute. **All proposed changes must be submitted through a pull request (PR). Do not push changes directly to the main branch.** Maintainers review and merge PRs.

1. Fork the repository, or create a feature branch if you have repository access.
2. Make a focused change that follows the current structure and conventions.
3. Preview and check your changes locally.
4. Open a PR against `main`, explaining what changed and why.
5. Address review feedback before the PR is merged.

### Scope and conventions

- Keep contributions consistent with the existing static HTML, CSS, and vanilla JavaScript setup. Reuse the central content file and existing styles where appropriate.
- Do not introduce a backend, database, authentication system, frontend framework, package dependency, or build pipeline as part of a routine contribution. Propose larger architectural changes for discussion first; backend selection will happen separately when needed.
- Preserve the guild’s Olympus VIII identity and WoW: Forever context. Avoid unrelated redesigns or speculative features.
- Keep changes focused. Separate unrelated fixes or features into different PRs.
- Maintain readable text, accessible links, keyboard navigation, and layouts that work on both mobile and desktop.
- Do not commit passwords, API keys, access tokens, private member information, or local environment files.
- Leave hosting configuration unchanged unless your PR specifically concerns deployment and explains the change. Opening a PR does not require publishing the site.

### Before opening a PR

- Check the affected sections in a browser at narrow and wide window sizes.
- Confirm images load, text is readable, and the layout does not scroll sideways unexpectedly.
- Confirm the roster and Discord links still work when your change affects them.
- Check the browser console for JavaScript errors.
- If you edited JavaScript and have Node.js installed, optionally check syntax with:

  ```bash
  node --check dist/assets/guild-content.js
  node --check dist/assets/site.js
  ```

In your PR, include a short summary, how you checked the change, and screenshots for visible layout or styling changes. Mention any new image sources, known limitations, or follow-up work.
