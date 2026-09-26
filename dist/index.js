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

// src/components/Input.jsx
import { View } from "react-native";
import { StyleSheet as StyleSheet2, Text as Text2, TextInput } from "react-native";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function Input({
  variant = "primary",
  disabled = false,
  value,
  onChangeText,
  placeholder = "Enter Name",
  style
}) {
  return /* @__PURE__ */ jsxs(View, { style: styles2.fieldGroup, children: [
    /* @__PURE__ */ jsx2(Text2, { style: [styles2.title], children: "Name" }),
    /* @__PURE__ */ jsx2(
      TextInput,
      {
        style: [
          styles2.text_box,
          variant === "primary" && styles2.primary,
          variant === "secondary" && styles2.secondary,
          variant === "complete" && styles2.complete,
          variant === "danger" && styles2.danger,
          disabled && styles2.disabled,
          style
        ],
        value,
        onChangeText,
        placeholder,
        placeholderTextColor: variant === "primary" ? styles2.primary.color : variant === "secondary" ? styles2.secondary.color : variant === "complete" ? styles2.complete.color : styles2.danger.color,
        editable: !disabled,
        textAlignVertical: "center"
      }
    )
  ] });
}
var styles2 = StyleSheet2.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 16
  },
  fieldGroup: {
    gap: 8
  },
  text_box: {
    borderRadius: 4,
    borderWidth: 2,
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    lineHeight: 24,
    height: 40,
    width: "100%",
    paddingHorizontal: 8,
    marginBottom: 16,
    paddingVertical: 0
  },
  primary: {
    color: "#171717",
    borderColor: "#171717"
  },
  secondary: {
    color: "#ACACAC",
    borderColor: "#ACACAC"
  },
  complete: {
    color: "#17c33c",
    borderColor: "#17c33c"
  },
  danger: {
    color: "#f0173A",
    borderColor: "#f0173A"
  },
  disabled: {
    opacity: 0.45
  }
});

// src/components/List.jsx
import { Pressable as Pressable2, StyleSheet as StyleSheet3, Text as Text3 } from "react-native";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function List({ text, subline, variant = "one-line", disabled = false, style }) {
  return /* @__PURE__ */ jsxs2(
    Pressable2,
    {
      disabled,
      style: [
        styles3.list,
        variant === "one-line" && styles3.oneLine,
        variant === "bullet" && styles3.bullet,
        variant === "double-line" && styles3.doubleLine,
        variant === "link" && styles3.link,
        disabled && styles3.disabled,
        style
      ],
      children: [
        /* @__PURE__ */ jsxs2(Text3, { style: [styles3.text, variant === "link" && styles3.linkText], children: [
          variant === "bullet" && "\u2022 ",
          text
        ] }),
        variant === "double-line" && subline && /* @__PURE__ */ jsx3(Text3, { style: styles3.sublineText, children: subline })
      ]
    }
  );
}
var styles3 = StyleSheet3.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  list: {
    alignSelf: "stretch",
    alignItems: "flex-start",
    justifyContent: "center",
    minHeight: 40,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 8
  },
  oneLine: {
    color: "#000000"
  },
  bullet: {
    color: "#000000"
  },
  text: {
    textAlign: "left",
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    lineHeight: 24,
    color: "#000000"
  },
  linkText: {
    color: "#0048FF",
    textDecorationLine: "underline"
  },
  sublineText: {
    color: "#5B5B5B",
    textAlign: "left",
    fontFamily: "Inter_400Regular",
    fontSize: 10,
    lineHeight: 12
  },
  disabled: {
    opacity: 0.45
  }
});

// src/components/Tab.jsx
import { Pressable as Pressable3, StyleSheet as StyleSheet4 } from "react-native";
import { jsx as jsx4 } from "react/jsx-runtime";
function Tab({ children, onPress, variant = "primary", disabled = false, style }) {
  return /* @__PURE__ */ jsx4(
    Pressable3,
    {
      onPress,
      disabled,
      style: ({ pressed }) => [
        styles4.icon,
        variant === "primary" && styles4.primary,
        variant === "secondary" && styles4.secondary,
        variant === "warning" && styles4.warning,
        variant === "danger" && styles4.danger,
        pressed && styles4.pressed,
        disabled && styles4.disabled,
        style
      ],
      children
    }
  );
}
var styles4 = StyleSheet4.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 40,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 0
  },
  primary: {
    backgroundColor: "#000000"
  },
  secondary: {
    backgroundColor: "#ACACAC"
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
  Input,
  List,
  Tab,
  tokens
};
//# sourceMappingURL=index.js.map