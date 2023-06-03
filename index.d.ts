declare module "astro" {
  interface AstroClientDirectives {
    "client:click"?: boolean;
    "client:hover"?: boolean;
    "client:scroll"?: boolean;
  }
}

export {};
