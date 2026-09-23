import type { Preview } from "@storybook/react";
import "@rd-kit/ui/src/styles/globals.css";
import "./tailwind-imports.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
