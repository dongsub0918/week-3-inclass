import { Button as ReactNativeButton } from "react-native";

/** A minimal button component for consumer-app integration tests. */
export function Button({ title, onPress, disabled = false }) {
  return <ReactNativeButton title={title} onPress={onPress} disabled={disabled} />;
}
