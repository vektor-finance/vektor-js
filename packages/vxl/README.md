# Vektor VXL types and helpers

Various types and helpers to assist with parsing the VXL AST.

## Known issues

### vxl-parser WASM module packing process

Currently, we compile and package the `vxl-parser` using `wasm-pack` which works but has some brittle steps that could be improved. Currently we are required to rename the package in outputted `package.json` (for convenience sake but necessarily required) and then `yarn link` in the package's directory + `yarn link @vektor-finance/vxl` in our `app` root.

There is an alternative - [wasm-tool/wasm-pack-plugin](https://github.com/wasm-tool/wasm-pack-plugin) - however this has two issues:

1. Doesn't work when the rust crate is outside the current directory. We use a monorepo so this is an issue and we have no real benefit of deploying an npm package for our `vxl-parser` at this time.

2. Doesn't allow us to rename the package. While not as important, `wasm-pack` and `wasm-bindgen` don't allow us to override the `js` package name for our output js bundle. We could rename the crate `vxl-parser` but then this would be confusing in the context of working on the `vxl-parser` since the `js` create is simply the bindings/wrapper module.
