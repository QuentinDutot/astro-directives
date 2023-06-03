import type { AstroIntegration } from "astro";

const directives: AstroIntegration = {
  name: "astro-directives",
  hooks: {
    "astro:config:setup": ({ addClientDirective }) => {
      addClientDirective({
        name: "click",
        entrypoint: "@confluence/directives/click.ts",
      });
      addClientDirective({
        name: "hover",
        entrypoint: "@confluence/directives/hover.ts",
      });
      addClientDirective({
        name: "scroll",
        entrypoint: "@confluence/directives/scroll.ts",
      });
    },
  },
};

export default directives;
