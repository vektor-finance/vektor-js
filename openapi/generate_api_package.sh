#!/usr/bin/env bash

set -euf -o pipefail

DIR="$(dirname "$(which "$0")")"

export TS_POST_PROCESS_FILE="node_modules/.bin/prettier --write"
openapi-generator generate -c ${DIR}/configuration.yaml -t ${DIR}
