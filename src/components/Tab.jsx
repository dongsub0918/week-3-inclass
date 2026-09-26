import { Pressable, StyleSheet } from "react-native";
{/* import icon here */}

export function Tab({ onPress, variant = 'primary', disabled = false, style }) {
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
      {/* Add profile icon here */}
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
    backgroundColor: "#171717"
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
  primary_danger_icon: {
    color: "#fff"
  },
  secondary_warning_icon: {
    color: "#171717"
  },
  pressed: {
    opacity: 0.78,
  },
  disabled: {
    opacity: 0.45,
  },
});
