import type { ClientDirective } from "astro";

const hover: ClientDirective = (load, options, element) => {
  element.addEventListener(
    "mouseover",
    async () => {
      const hydrate = await load();
      await hydrate();
    },
    { once: true }
  );
};

export default hover;
