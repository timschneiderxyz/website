.PHONY: dev
dev:
	@pnpm dev ||:

.PHONY: build
build:
	@pnpm build ||:

.PHONY: preview
preview:
	@pnpm preview ||:

.PHONY: clean
clean:
	rm -rf node_modules/
	rm -rf .astro/
	rm -rf dist/

.PHONY: nuke
nuke: clean
	rm -f pnpm-lock.yaml
	@pnpm install ||:

%:
	@:
