import type { ClientDirective } from "astro";

const click: ClientDirective = (load, options, element) => {
  element.addEventListener(
    "click",
    async () => {
      const hydrate = await load();
      await hydrate();
    },
    { once: true }
  );
};

export default click;
