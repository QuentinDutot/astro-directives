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

**Use a directive**:

```jsx
<Component client:hover />
```

## Directives

| Attribute                      | Load the javascript and hydrate when ...                             |
| ------------------------------ | -------------------------------------------------------------------- |
| client:click                   | element is clicked                                                   |
| client:hover                   | element is hovered                                                   |
| client:scroll                  | window is scrolled                                                   |
