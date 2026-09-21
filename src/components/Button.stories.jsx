import { Button } from "./Button.jsx";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    title: "Press me"
  }
};

export default meta;

export const Default = {
  args: {
    onPress: () => alert("Button pressed")
  }
};
