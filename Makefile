
watch:
	@./node_modules/.bin/webpack -w

build:
	@./node_modules/.bin/webpack

.PHONY: build watch