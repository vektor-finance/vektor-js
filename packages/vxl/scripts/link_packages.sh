#!/usr/bin/env bash

set -euf -o pipefail

# Setup links
VXL_PARSER_DIR="../../../vxl-parser/js/pkg"
cd "$VXL_PARSER_DIR" && yarn link && cd -

# Link packages
yarn link @vektor-finance/vxl-parser
