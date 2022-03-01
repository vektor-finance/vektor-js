#!/usr/bin/env bash

set -euf -o pipefail

VXL_PARSER_DIR="../../../vxl-parser/js"

echo "[vxl-parser]: Building vxl-parser (dev)"
wasm-pack build --scope=vektor "${VXL_PARSER_DIR}" "$@"

echo "[vxl-parser]: Renaming @vektor-finance/js -> @vektor-finance/vxl-parser"
sed -i -e 's/"name": "@vektor-finance\/js"/"name": "@vektor-finance\/vxl-parser"/g' "${VXL_PARSER_DIR}/pkg/package.json"

echo "[vxl-parser]: Done"
