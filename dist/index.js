// src/components/Button.jsx
import { Button as ReactNativeButton } from "react-native";
import { jsx } from "react/jsx-runtime";
function Button({ title, onPress, disabled = false }) {
  return /* @__PURE__ */ jsx(ReactNativeButton, { title, onPress, disabled });
}

// src/tokens.js
var tokens = {
  colors: {
    background: "#ffffff",
    foreground: "#1f2937",
    primary: "#2563eb",
    muted: "#f3f4f6"
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32
  }
};
export {
  Button,
  tokens
};
//# sourceMappingURL=index.js.map