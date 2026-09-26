import { View } from "react-native";
import { StyleSheet, Text, TextInput } from "react-native";

export function Input({ 
  variant = 'primary', 
  disabled = false, 
  value, 
  onChangeText, 
  placeholder = "Enter Name" 
}) {
    return (
        <View style={styles.fieldGroup}>
            <Text style={[styles.title]}>Name
            </Text>
            <TextInput
                style={[ 
                    styles.text_box,
                    variant === "primary" && styles.primary,
                    variant === "secondary" && styles.secondary,
                    variant === "complete" && styles.complete,
                    variant === "danger" && styles.danger,
                    disabled && styles.disabled,
                    ]
                }
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={
                  variant === "primary" ? styles.primary.color :
                  variant === "secondary" ? styles.secondary.color :
                  variant === "complete" ? styles.complete.color :
                  styles.danger.color
                }
                editable={!disabled}
                textAlignVertical="center"
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
    fontSize: 16,
  },
  fieldGroup: {
    gap: 8,
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
    paddingVertical: 0,
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
  disabled: {
    opacity: 0.45,
  },
});
