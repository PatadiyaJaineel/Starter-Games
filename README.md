# JJ Games

**Starter-Games** is the home for JJ's games: a small arcade site plus a folder for each game's source, playable build, and media. Games can use different engines and languages; the showcase stays a lightweight static site.

## Add a game

1. Copy `games/_template/` and rename the copy to a short, lowercase slug, such as `moon-race/`.
2. Put the original project in `source/`. Add a browser build in `web/` if the game has one, with `web/index.html` as its entry point. Add images in `media/`.
3. Add an entry to `games/catalog.json`:

```json
[
  {
    "title": "Moon Race",
    "platform": "Browser",
    "status": "Ready to play",
    "description": "Race the moon before it sets.",
    "cover": "moon-race/media/cover.png",
    "coverAlt": "A tiny rocket racing across a purple moon",
    "play": "moon-race/web/index.html",
    "download": "",
    "source": ""
  }
]
```

Keep paths for `cover` and `play` relative to the `games/` folder. `download` and `source` can be full URLs, such as a GitHub Release or a source page. Leave an action empty when it does not apply. Add multiple game objects to the array as the collection grows. The site only displays games listed in the catalog.

## Publish with GitHub Pages

The workflow in `.github/workflows/pages.yml` publishes the static files whenever you push to `main` or `master`.

1. Push this repository to GitHub.
2. In the repository, open **Settings → Pages** and choose **GitHub Actions** as the build and deployment source.
3. Push a commit to your default branch (`main` or `master`), or run **Publish JJ Games** from the **Actions** tab.

GitHub will show the published site URL in the Pages settings and in the workflow run. The first publish can take a few minutes.

## Preview on your computer

Open a terminal in the repo and run:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`. A local server is needed because the game shelf loads `games/catalog.json`.

## Licensing

No license is included yet. Choose a license for each game's code and media when you are ready.
