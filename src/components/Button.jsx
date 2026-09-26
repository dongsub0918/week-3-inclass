import { Pressable, StyleSheet, Text } from "react-native";

export function Button({ title, onPress, variant = 'primary', disabled = false, style }) {

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style ={({ pressed }) => [
        styles.button,
        variant === "primary" && styles.primary,
        variant === "secondary" && styles.secondary,
        variant === "warning" && styles.warning,
        variant === "danger" && styles.danger,
        pressed && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
    >
      <Text 
        style={[ 
          styles.buttonText,
          variant === "primary" && styles.primary_dangerText,
          variant === "secondary" && styles.secondary_warningText,
          variant === "warning" && styles.secondary_warningText,
          variant === "danger" && styles.primary_dangerText,]
        }>{title}
      </Text>
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
  buttonText: {
    fontFamily: "Inter_700Bold",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
  },
  primary_dangerText: {
    color: "#fff"
  },
  secondary_warningText: {
    color: "#000000",
  },
  button: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 0,
  },
  primary: {
    backgroundColor: "#000000"
  },
  secondary: {
    backgroundColor: "#fff",
    borderColor: "#ACACAC",
    borderRadius: 8,
    borderWidth: 2,
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
