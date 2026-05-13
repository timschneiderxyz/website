dev:
  @pnpm dev

clean:
  rm -rf node_modules/
  rm -rf .astro/
  rm -rf .wrangler/
  rm -rf dist/

nuke: clean
  rm -f pnpm-lock.yaml
  @pnpm install
