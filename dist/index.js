// src/components/Button.jsx
import { Pressable, StyleSheet, Text } from "react-native";
import { jsx } from "react/jsx-runtime";
function Button({ title, onPress, variant = "primary", disabled = false, style }) {
  return /* @__PURE__ */ jsx(
    Pressable,
    {
      onPress,
      disabled,
      style: ({ pressed }) => [
        styles.button,
        variant === "primary" && styles.primary,
        variant === "secondary" && styles.secondary,
        variant === "warning" && styles.warning,
        variant === "danger" && styles.danger,
        pressed && styles.pressed,
        disabled && styles.disabled,
        style
      ],
      children: /* @__PURE__ */ jsx(
        Text,
        {
          style: [
            styles.buttonText,
            variant === "primary" && styles.primary_dangerText,
            variant === "secondary" && styles.secondary_warningText,
            variant === "warning" && styles.secondary_warningText,
            variant === "danger" && styles.primary_dangerText
          ],
          children: title
        }
      )
    }
  );
}
var styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontFamily: "Inter_700Bold",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center"
  },
  primary_dangerText: {
    color: "#fff"
  },
  secondary_warningText: {
    color: "#000000"
  },
  button: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 0
  },
  primary: {
    backgroundColor: "#000000"
  },
  secondary: {
    backgroundColor: "#fff",
    borderColor: "#ACACAC",
    borderRadius: 8,
    borderWidth: 2
  },
  warning: {
    backgroundColor: "#FFBC00"
  },
  danger: {
    backgroundColor: "#f0173A"
  },
  pressed: {
    opacity: 0.78
  },
  disabled: {
    opacity: 0.45
  }
});

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