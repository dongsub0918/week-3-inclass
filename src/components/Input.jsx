import { View } from "react-native";
import { StyleSheet, Text, TextInput } from "react-native";

export function Input({ variant = 'primary', disabled = false, value, onChangeText }) {
    return (
        <View style={styles.fieldGroup}>
            <Text style={[styles.title]}>
            </Text>Name
            <TextInput
                style={[ 
                    styles.text_box,
                    variant === "primary" && styles.primary,
                    variant === "secondary" && styles.secondary,
                    variant === "complete" && styles.complete,
                    variant === "danger" && styles.danger,
                    ]
                }
                value={value}
                onChangeText={onChangeText}
                disabled={disabled}
                placeholder="Enter Name"
                textAlignVertical="top"
            />
        </View>
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
  title: {
    fontSize: 26,
    fontWeight: "700",
  },
  fieldGroup: {
    gap: 8,
  },
  text_box: {
    borderRadius: 8,
    borderWidth: 2,
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    lineHeight: 24,
    minHeight: 56,
    maxWidth: 400,
    width: "100%",
    paddingHorizontal: 16,
    marginBottom: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  primary: {
    color: "#171717",
    borderColor: "#171717",
  },
  secondary: {
    color: "#ACACAC",
    borderColor: "#ACACAC",
  },
  complete: {
    color: "#17c33c",
    borderColor: "#17c33c",
  },
  danger: {
    color: "#f0173A",
    borderColor: "#f0173A",
  },
//   primary_text: {
//     color: "#171717",
//   },
//   secondary_text: {
//     color: "#ACACAC",
//   },
//   complete_text: {
//     color: "#17c33c",
//   },
//   danger_text: {
//     color: "#f0173A",
//   },
  disabled: {
    opacity: 0.45,
  },
});
