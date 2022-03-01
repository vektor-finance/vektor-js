.PHONY: install build publish

install:
	yarn install;

build:
	yarn build;

publish:
	yarn lerna publish from-package --registry=${NPM_REGISTRY};

test:
	yarn lerna test
