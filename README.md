# astro-directives

An astro integration for more client directives.

## How to use

**Install the package**

```
npm i astro-directives
```

**Update astro.config.(js/ts)**

```tsx
import { defineConfig } from "astro/config";
import directives from "astro-directives";

// https://astro.build/config
export default defineConfig({
  integrations: [directives()],
  experimental: {
    customClientDirectives: true,
  },
});
```

The experimental.customClientDirectives flag may not be needed in the future.

**Use a directive**:

```jsx
<Component client:hover />
```

## Directives

| Attribute                      | Load the javascript and hydrate on ...                               |
| ------------------------------ | -------------------------------------------------------------------- |
| client:click                   | element click event                                                  |
| client:hover                   | element mouseover event                                              |
| client:scroll                  | window scroll event                                                  |
