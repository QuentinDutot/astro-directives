# astro-directives [![npm](https://img.shields.io/npm/v/astro-directives.svg)](https://www.npmjs.com/package/astro-directives)

An astro integration for more client directives.

## How to use

### Install the package

```
npm install astro-directives
```

### Update astro.config.mjs

```tsx
import { defineConfig } from "astro/config";
import directives from "astro-directives";

export default defineConfig({
  // ...
  integrations: [directives()],
  experimental: {
    customClientDirectives: true,
  },
});
```

> **Note**
> The experimental.customClientDirectives flag may not be needed in the future.


### Use a directive

```jsx
<Component client:hover />
```

## Directives

| Attribute                      | Load the javascript and hydrate on ...                               |
| ------------------------------ | -------------------------------------------------------------------- |
| client:click                   | element click event                                                  |
| client:hover                   | element mouseover event                                              |
| client:scroll                  | window scroll event                                                  |
