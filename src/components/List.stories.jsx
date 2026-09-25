import { List } from "./List.jsx";

const meta = {
  title: "Components/List",
  component: List,
  tags: ["autodocs"],
  args: {
    text: "Add text",
    variant: "one-line",
    disabled: false
  },

  argTypes: {
    text: {
      control: 'text',
    },
    variant: {
      control: 'inline-radio',
      options: ['one-line', 'bullet', 'double-line', 'link'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

export const OneLine = {
  args: {
    variant: 'one-line',
  }
};

export const Bullet = {
  args: {
    variant: 'bullet',
    disabled: true
  },
};

export const DoubleLine = {
  args: {
    variant: 'double-line',
    subline: "Smaller text",
  },
};

export const Link = {
  args: {
    variant: 'link',
  },
};
