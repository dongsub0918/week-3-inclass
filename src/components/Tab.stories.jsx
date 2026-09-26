import { Tab } from "./Tab.jsx";

const meta = {
  title: "Components/Tab",
  component: Tab,
  tags: ["autodocs"],
  args: {
    variant: "primary",
    disabled: false,
    style: {},
  },

  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'warning', 'danger'],
    },
    disabled: {
      control: 'boolean',
    },
    style: {
      control: 'object',
      description: 'Styles applied to the tab container. These override the component defaults.',
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
  }
};

export const Secondary = {
  args: {
    variant: 'secondary',
    disabled: false,
  },
};

export const Warning = {
  args: {
    variant: 'warning',
  },
};

export const Danger = {
  args: {
    variant: 'danger',
  },
};

export const CustomStyle = {
  args: {
    style: { width: 56, height: 56, borderRadius: 28 },
  },
};
