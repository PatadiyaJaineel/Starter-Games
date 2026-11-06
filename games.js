const list = document.querySelector("#game-list");
const emptyState = document.querySelector("#empty-state");
const count = document.querySelector("#shelf-count");
const errorMessage = document.querySelector("#load-error");

function makeLink(label, href, className, newTab = false) {
  if (!href) return null;
  const link = document.createElement("a");
  link.className = className;
  link.href = href;
  link.textContent = label;
  if (newTab) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
  return link;
}

function renderGame(game) {
  const row = document.createElement("article");
  row.className = "game-row";

  if (game.cover) {
    const cover = document.createElement("img");
    cover.className = "game-cover";
    cover.src = `games/${game.cover}`;
    cover.alt = game.coverAlt || `${game.title} cover art`;
    cover.loading = "lazy";
    row.append(cover);
  } else {
    const cover = document.createElement("div");
    cover.className = "game-cover";
    cover.setAttribute("aria-hidden", "true");
    row.append(cover);
  }

  const info = document.createElement("div");
  info.className = "game-info";
  const title = document.createElement("h3");
  title.textContent = game.title;
  info.append(title);

  const meta = document.createElement("div");
  meta.className = "game-meta";
  for (const [label, className] of [[game.platform, "game-tag"], [game.status, "game-tag game-tag--blue"]]) {
    if (!label) continue;
    const tag = document.createElement("span");
    tag.className = className;
    tag.textContent = label;
    meta.append(tag);
  }
  info.append(meta);
  if (game.description) {
    const description = document.createElement("p");
    description.textContent = game.description;
    info.append(description);
  }
  row.append(info);

  const actions = document.createElement("div");
  actions.className = "game-actions";
  const play = makeLink("Play", game.play ? `games/${game.play}` : null, "game-action");
  const download = makeLink("Get the game", game.download, "game-action game-action--secondary", true);
  const source = makeLink("Source", game.source, "game-action game-action--secondary", true);
  for (const action of [play, download, source]) if (action) actions.append(action);
  if (actions.childElementCount) row.append(actions);
  return row;
}

async function loadGames() {
  try {
    const response = await fetch(`games/catalog.json?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error("Game catalog unavailable");
    const games = await response.json();
    if (!Array.isArray(games)) throw new Error("Game catalog must be a list");

    if (games.length === 0) {
      emptyState.hidden = false;
      count.textContent = "0 games so far";
    } else {
      count.textContent = `${games.length} ${games.length === 1 ? "game" : "games"}`;
      for (const game of games) list.append(renderGame(game));
    }
  } catch {
    errorMessage.hidden = false;
    count.textContent = "Shelf unavailable";
  } finally {
    list.setAttribute("aria-busy", "false");
  }
}

loadGames();
