# Official Vektor SDK eslint config

## General

Install with `yarn add -D @vektor-finance/eslint-config-sdk`

## Configuration

Use `@vektor-finance` for base rules. Make sure to specify your tsconfig under `parserOptions.project` so that you can
correctly use the typescript rules. This configuration comes with

```json
{
  "extends": ["@vektor-finance/sdk"],
  "overrides": [
    {
      "files": ["*.ts", "*.tsx", "*.d.ts"],
      "parserOptions": {
        "project": "./tsconfig.json"
      }
    }
  ]
}
```
