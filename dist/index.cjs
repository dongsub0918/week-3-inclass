var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.js
var index_exports = {};
__export(index_exports, {
  Button: () => Button,
  tokens: () => tokens
});
module.exports = __toCommonJS(index_exports);

// src/components/Button.jsx
var import_react_native = require("react-native");
function Button({ title, onPress, variant = "primary", disabled = false }) {
  return /* @__PURE__ */ React.createElement(
    import_react_native.Pressable,
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
        disabled && styles.disabled
      ]
    },
    /* @__PURE__ */ React.createElement(
      import_react_native.Text,
      {
        style: [
          styles.buttonText,
          variant === "primary" && styles.primary_dangerText,
          variant === "secondary" && styles.secondary_warningText,
          variant === "warning" && styles.secondary_warningText,
          variant === "danger" && styles.primary_dangerText
        ]
      },
      title
    )
  );
}
var styles = import_react_native.StyleSheet.create({
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  tokens
});
//# sourceMappingURL=index.cjs.map