import { Tab } from "./Tab.jsx";
import { Text } from "react-native";

const meta = {
  title: "Components/Tab",
  component: Tab,
  tags: ["autodocs"],
  args: {
    variant: "primary",
    disabled: false,
    style: {},
    children: <Text style={{ color: '#171717' }}>Tab</Text>,
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
    children: {
      control: false,
      description: 'Content rendered inside the tab, such as an icon and label.',
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
    children: <Text style={{ color: '#171717' }}>Tab</Text>,
  },
};

export const Warning = {
  args: {
    variant: 'warning',
    children: <Text style={{ color: '#171717' }}>Tab</Text>,
  },
};

export const Danger = {
  args: {
    variant: 'danger',
    children: <Text style={{ color: '#FFFFFF' }}>Tab</Text>,
  },
};

export const CustomStyle = {
  args: {
    style: { width: 56, height: 56, borderRadius: 28 },
  },
};
