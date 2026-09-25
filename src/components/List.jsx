import { Pressable, StyleSheet, Text } from "react-native";

export function List({ text, subline, variant = 'one-line', disabled = false }) {

  return (
    <Pressable
      disabled={disabled}
      style={[
        styles.list,
        variant === "one-line" && styles.oneLine,
        variant === "bullet" && styles.bullet,
        variant === "double-line" && styles.doubleLine,
        variant === "link" && styles.link,
        disabled && styles.disabled,
      ]}
    >
      <Text style=
        {[styles.text, variant === "link" && styles.linkText,]}>
        {variant === "bullet" && "• "}{text}
      </Text>

      {variant === "double-line" && subline && (
        <Text style={styles.sublineText}>{subline}
        </Text>
      )}
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
  list: {
    alignSelf: "stretch",
    alignItems: "flex-start",
    justifyContent: "center",
    minHeight: 40,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  oneLine: {
    color: "#000000"
  },
  bullet: {
    color: "#000000"
  },
  text: {
    textAlign: "left",
    fontFamily: "Inter_700Bold",
    fontSize: 16,
    lineHeight: 24,
    color: "#000000"
  },
  linkText: {
    color: "#0048FF",
    textDecorationLine: "underline",
  },
  sublineText: {
    color: "#5B5B5B",
    textAlign: "left",
    fontFamily: "Inter_700Bold",
    fontSize: 10,
    lineHeight: 12,
  },
  disabled: {
    opacity: 0.45,
  },
});