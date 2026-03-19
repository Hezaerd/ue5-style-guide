# ue5-style-guide

This is a Tanstack Start application generated with
[Create Fumadocs](https://github.com/fuma-nama/fumadocs).

## Development

```bash
bun dev
```

## Build and preview (Cloudflare Workers)

The app uses [SPA mode with prerender](https://tanstack.com/start/latest/docs/framework/react/guide/spa-mode) so routes are emitted as static HTML where possible (see [Fumadocs static deploy](https://www.fumadocs.dev/docs/deploying/static#tanstack-start) and [Cloudflare static prerendering](https://developers.cloudflare.com/changelog/2025-12-19-tanstack-start-prerendering/)).

```bash
bun run build
bun run preview
```

Deploy after [Wrangler login](https://developers.cloudflare.com/workers/wrangler/commands/#login):

```bash
bun run deploy
```

Root `wrangler.jsonc` follows the [TanStack Start hosting guide](https://tanstack.com/start/latest/docs/framework/react/guide/hosting) (`main`: `@tanstack/react-start/server-entry`, `nodejs_compat`).
