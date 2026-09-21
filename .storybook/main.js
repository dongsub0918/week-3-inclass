import { mergeConfig } from "vite";

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  framework: "@storybook/react-vite",
  stories: ["../docs/**/*.mdx", "../src/**/*.stories.@(js|jsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  docs: {
    autodocs: true
  },
  async viteFinal(viteConfig) {
    return mergeConfig(viteConfig, {
      base: process.env.STORYBOOK_BASE_PATH ?? process.env.STORYBOOK_BASE ?? "/",
      define: {
        global: "globalThis"
      },
      resolve: {
        alias: {
          "react-native": "react-native-web"
        }
      }
    });
  }
};

export default config;
