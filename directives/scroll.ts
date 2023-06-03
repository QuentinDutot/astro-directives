import type { ClientDirective } from "astro";

const scroll: ClientDirective = (load, options, element) => {
  window.addEventListener(
    "scroll",
    async () => {
      const hydrate = await load();
      await hydrate();
    },
    { once: true }
  );
};

export default scroll;
