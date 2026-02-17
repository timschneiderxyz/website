dev:
  @pnpm dev

clean:
  rm -rf node_modules/
  rm -rf .astro/
  rm -rf dist/

nuke: clean
  rm pnpm-lock.yaml
  @pnpm install
