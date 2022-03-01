# Vektor SDKs for JavaScript

Official Vektor SDKs for JavaScript.

## PLEASE READ FIRST

When working in this project, please assume it will be open-sourced. For now a `LICENSE` has not been selected and none of those details have been discussed, but we do plan to make Vektor work with via the API and this SDK will help with that. With that in mind, do not add proprietary code here and keep it as clean and well documented as possible.

## Requirements

| Name                                                | Purpose                      | Install                                                           | Version                         |
| :-------------------------------------------------- | :--------------------------- | :---------------------------------------------------------------- | :------------------------------ |
| [NVM](https://github.com/nvm-sh/nvm)                | Managing versions of Node.js | `brew install nvm`                                                | Node.js `14.x`                  |
| [yarn](https://classic.yarnpkg.com/en/docs/install) | JavaScript Package manager   | `brew install yarn` - should be installed via `Node.js`           | `1.22.x`                        |


## Supported Platforms

For each major JavaScript platform, there is a specific high-level SDK that provides all the tools you need in a single package. Please refer to the README and instructions of those SDKs for more detailed information:

- [`@vektor-finance/browser`](vektor-js/packages/browser): SDK for browsers

### Future Supported Platforms

- @vektor-finance/node: SDK for Node, including integrations for Express, Koa, Loopback, Sails and Connect _for integrating Vektor from a backend_
- @vektor-finance/react: browser SDK with React integration enabled - _for web app_
- @vektor-finance/react-native: SDK for React Native with support for native crashes _for mobile apps_
- @vektor-finance/electron: SDK for Electron with support for native crashes _for desktop app_

## Installation and Usage

To install a SDK, simply add the high-level package, for example:

```sh
npm install --save @vektor-finance/browser
yarn add @vektor-finance/browser
```

Setup and usage of these SDKs always follows the same principle.

```javascript
import Vektor from '@vektor-finance/browser'

const vektor = Vektor('<authToken>')

vektor.gateway.subscribe((event) => {
  console.log(JSON.stringify(event, null, 2))
})

vektor.gateway.connect(userId)
```

## Other Packages

Besides the high-level SDKs, this repository contains shared packages, helpers and configuration used for SDK
development. If you're thinking about contributing to or creating a JavaScript-based SDK, have a look at the resources
below:

- [`@vektor-finance/utils`](vektor-js/packages/utils): A set of helpers and
  utility functions useful for various SDKs.
- [`@vektor-finance/types`](vektor-js/packages/types): Types used in all
  packages.

## Publishing NPM Packages

The packages in this project are published to [GitHub Packages](https://github.com/features/packages) as NPM packages.

Currently, if you have the `write:packages` privilege, this can be done manually using the following command: `yarn lerna publish from-package --registry=$NPM_REGISTRY`

In the future we will automate this.

## Known Issues

### Rollup.js

Some libraries do not work well with [rollup.js](https://rollupjs.org/) and therefore currently cannot be compiled to other bundle formats such as `commonjs`. In the respective packages these are listed.
