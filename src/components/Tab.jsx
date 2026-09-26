import { Pressable, StyleSheet } from "react-native";

export function Tab({ children, onPress, variant = 'primary', disabled = false, style }) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style ={({ pressed }) => [
        styles.icon,
        variant === "primary" && styles.primary,
        variant === "secondary" && styles.secondary,
        variant === "warning" && styles.warning,
        variant === "danger" && styles.danger,
        pressed && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 40,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 0,
  },
  primary: {
    backgroundColor: "#000000"
  },
  secondary: {
    backgroundColor: "#ACACAC",
  },
  warning: {
    backgroundColor: "#FFBC00"
  },
  danger: {
    backgroundColor: "#f0173A"
  },
  pressed: {
    opacity: 0.78,
  },
  disabled: {
    opacity: 0.45,
  },
});
