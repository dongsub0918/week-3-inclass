import { View } from "react-native";
import { tokens } from "../src/tokens.js";

const preview = {
  decorators: [
    (Story) => (
      <View
        style={{
          backgroundColor: tokens.colors.background,
          padding: tokens.spacing.lg,
          flex: 1
        }}
      >
        <Story />
      </View>
    )
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: tokens.colors.background },
        { name: "muted", value: tokens.colors.muted },
        { name: "dark", value: tokens.colors.foreground }
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    viewport: {
      viewports: {
        mobile: { name: "Mobile", styles: { width: "375px", height: "667px" } },
        tablet: { name: "Tablet", styles: { width: "768px", height: "1024px" } }
      }
    }
  }
};

export default preview;
