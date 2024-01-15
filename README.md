# Vektor SDKs for JavaScript

Official Vektor SDKs for JavaScript.

## PLEASE READ FIRST

This project has not been publically released yet - a license has not been added and it is not currently published on NPM. If you wish to use the Vektor API, please contact `engineering [at] vektor [dot] finance`.

## Requirements

| Name                                                | Purpose                      | Install                                                           | Version                         |
| :-------------------------------------------------- | :--------------------------- | :---------------------------------------------------------------- | :------------------------------ |
| [NVM](https://github.com/nvm-sh/nvm)                | Managing versions of Node.js | `brew install nvm`                                                | Node.js `14.x`                  |
| [yarn](https://classic.yarnpkg.com/en/docs/install) | JavaScript Package manager   | `brew install yarn` - should be installed via `Node.js`           | `1.22.x`                        |


## Supported Platforms

For each major JavaScript platform, there is a specific high-level SDK that provides all the tools you need in a single package. Please refer to the README and instructions of those SDKs for more detailed information:

- [`@vektor-finance/browser`](packages/browser): SDK for browsers
- [`@vektor-finance/node`](packages/node): SDK for Node

## Installation

`@vektor-finanance/*` packages are currently private and hosted on GitHub.

This means you will need to instruct `npm` or `yarn` to look for packages scoped under `@vektor-finance` to be fetched from GitHub Packages and to use an authentication token:

1. Generate a [Github Personal Access Token](https://github.com/settings/tokens) with `read:packages` permission

2. Create a file in your home directory `~/.npmrc`

3. Add the following contents to it:

```bash
  @vektor-finance:registry="https://npm.pkg.github.com"
  //npm.pkg.github.com/:_authToken="${GITHUB_PKG_AUTH_TOKEN}"
  always-auth=true
```

4. Use thw PAT you created for the `${GITHUB_PKG_AUTH_TOKEN}` value directly or set it in your shell environment to be replaced automatically

5. Install a SDK (or other packages) `npm install --save @vektor-finance/browser` or `yarn add @vektor-finance/browser`

## Usage

Setup and usage of these SDKs always follows the same principle.

```javascript
import Vektor from '@vektor-finance/browser'

const authToken = '<authToken>'
const userId = '<userId>'

// Setup Vektor SDK
const vektor = new Vektor(authToken)

// Connect to Gateway
vektor.gateway.connect(userId)

// Subscribe to Gateway events
vektor.gateway.subscribe((event) => {
  console.log(JSON.stringify(event, null, 2))
})

// Submit a VXL Command
const vxl = "price(eth)"
const body = { vxl, stream: true }
const response = await vektor.api.vxl.submit(body, { headers: { Authorization: `Bearer ${authToken}` } })
console.log(JSON.stringify(response, null, 2))
```

## Other Packages

Besides the high-level SDKs, this repository contains shared packages, helpers and configuration used for SDK
development. If you're thinking about contributing to or creating a JavaScript-based SDK, have a look at the resources
below:

- [`@vektor-finance/utils`](packages/utils): A set of helpers and utility functions useful for various SDKs.
- [`@vektor-finance/types`](packages/types): Types used in all packages.

## Publishing NPM Packages

The packages in this project are published to [GitHub Packages](https://github.com/features/packages) as NPM packages.

Currently, if you have the `write:packages` privilege, this can be done manually using the following command: `yarn lerna publish from-package --registry=$NPM_REGISTRY`

In the future we will automate this.

## Known Issues

### Rollup.js

Some libraries do not work well with [rollup.js](https://rollupjs.org/) and therefore currently cannot be compiled to other bundle formats such as `commonjs`. In the respective packages these are listed.
