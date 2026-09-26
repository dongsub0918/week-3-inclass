import { Input } from "./Input.jsx";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    variant: "primary",
    disabled: false,
    placeholder: "Enter name",
    value: "",
    style: {},
  },

  argTypes: {
    value: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'complete', 'danger'],
    },
    disabled: {
      control: 'boolean',
    },
    style: {
      control: 'object',
      description: 'Styles applied to the text input. These override the component defaults.',
    },
    onChangeText: {
      action: 'changed',
    },
  },
};

export default meta;

export const Primary = {
  args: {
    variant: 'primary',
    value: "",
    disabled: false,
  }
};

export const Secondary = {
  args: {
    variant: 'secondary',
    value: "Jason Miller",
    placeholder: "",
    disabled: true
  },
};

export const Complete = {
  args: {
    variant: 'complete',
    value: "Thanks!",
    placeholder: "",
    disabled: false,
  },
};

export const Danger = {
  args: {
    variant: 'danger',
    value: "",
    placeholder: "Please enter your name",
    disabled: false,
  },
};

export const CustomStyle = {
  args: {
    style: { height: 56, width: 280, marginBottom: 0 },
  },
};
