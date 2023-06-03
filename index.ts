import type { AstroIntegration } from "astro";

const directives = (): AstroIntegration => ({
  name: "astro-directives",
  hooks: {
    "astro:config:setup": ({ addClientDirective }) => {
      addClientDirective({
        name: "click",
        entrypoint: "directives/click.ts",
      });
      addClientDirective({
        name: "hover",
        entrypoint: "directives/hover.ts",
      });
      addClientDirective({
        name: "scroll",
        entrypoint: "directives/scroll.ts",
      });
    },
  },
});

export default directives;
