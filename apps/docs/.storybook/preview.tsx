import React from "react";
import type { Preview } from "@storybook/react";
import { Toaster } from "@rd-kit/ui";
import "@rd-kit/ui/src/styles/globals.css";
import "./tailwind-imports.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
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
