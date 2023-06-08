import type { AstroIntegration } from "astro";

declare module "astro" {
  interface AstroClientDirectives {
    "client:click"?: boolean;
    "client:hover"?: boolean;
    "client:scroll"?: boolean;
  }
}

const directives = (): AstroIntegration => ({
  name: "astro-directives",
  hooks: {
    "astro:config:setup": ({ addClientDirective }) => {
      addClientDirective({
        name: "click",
        entrypoint: "astro-directives/directives/click.ts",
      });
      addClientDirective({
        name: "hover",
        entrypoint: "astro-directives/directives/hover.ts",
      });
      addClientDirective({
        name: "scroll",
        entrypoint: "astro-directives/directives/scroll.ts",
      });
    },
  },
});

export default directives;
