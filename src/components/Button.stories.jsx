import { Button } from "./Button.jsx";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    title: "Save",
    variant: "primary",
    disabled: false
  },

  argTypes: {
    title: {
      control: 'text',
    },
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'warning', 'danger'],
    },
    disabled: {
      control: 'boolean',
    },
    onPress: {
      action: 'pressed',
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

export const Primary = {
  args: {
    variant: 'primary',
    title: 'Primary',
    onPress: () => alert("Button pressed")
  }
};

export const Secondary = {
  args: {
    variant: 'secondary',
    title: 'Secondary',
    disabled: true
  },
};

export const Warning = {
  args: {
    variant: 'warning',
    title: 'Warning',
  },
};

export const Danger = {
  args: {
    variant: 'danger',
    title: 'Danger',
  },
};
