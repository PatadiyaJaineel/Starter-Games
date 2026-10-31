# New game template

Copy this folder and rename the copy to a short, lowercase game slug. Keep the original game project in `source/`, add a browser-ready build in `web/` when you have one, and put cover art or screenshots in `media/`.

Then add an entry to [`../catalog.json`](../catalog.json) so JJ Games can show it. The catalog starts empty on purpose. See the root [README](../../README.md) for the entry fields and publishing steps.

## Folders

- `source/` — editable project files, including engine-specific files.
- `web/` — standalone browser build; its entry point should be `index.html`.
- `media/` — cover art, screenshots, and trailer thumbnails.

Choose a license for this game when you are ready. The starter repo does not add one for you.
