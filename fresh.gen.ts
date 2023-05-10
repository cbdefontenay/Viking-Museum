// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_app.tsx";
import * as $1 from "./routes/about.tsx";
import * as $2 from "./routes/about/jorvik-story.tsx";
import * as $3 from "./routes/index.tsx";
import * as $$0 from "./islands/ButtonWithMenu.tsx";
import * as $$1 from "./islands/Navigation.tsx";

const manifest = {
  routes: {
    "./routes/_app.tsx": $0,
    "./routes/about.tsx": $1,
    "./routes/about/jorvik-story.tsx": $2,
    "./routes/index.tsx": $3,
  },
  islands: {
    "./islands/ButtonWithMenu.tsx": $$0,
    "./islands/Navigation.tsx": $$1,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
