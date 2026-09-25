import { Input } from "./Input.jsx";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    variant: "primary",
    disabled: false
  },

  argTypes: {
    value: {
      control: 'text',
    },
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'complete', 'danger'],
    },
    disabled: {
      control: 'boolean',
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
  }
};

export const Secondary = {
  args: {
    variant: 'secondary',
    disabled: true
  },
};

export const Complete = {
  args: {
    variant: 'complete',
  },
};

export const Danger = {
  args: {
    variant: 'danger',
  },
};
