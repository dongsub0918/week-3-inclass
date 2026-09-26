import { List } from "./List.jsx";

const meta = {
  title: "Components/List",
  component: List,
  tags: ["autodocs"],
  args: {
    text: "One-line",
    variant: "one-line",
    disabled: false,
    subline: "Subline",
    style: {},
  },

  argTypes: {
    text: {
      control: 'text',
    },
    subline: {
      control: "text",
    },
    variant: {
      control: 'inline-radio',
      options: ['one-line', 'bullet', 'double-line', 'link'],
    },
    disabled: {
      control: 'boolean',
    },
    style: {
      control: 'object',
      description: 'Styles applied to the list item container. These override the component defaults.',
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
    text: "One-line with bullet point"
  },
};

export const DoubleLine = {
  args: {
    variant: 'double-line',
    text: "Double-line",
    subline: "Subline",
  },
};

export const Link = {
  args: {
    variant: 'link',
    text: "Link",
  },
};

export const CustomStyle = {
  args: {
    text: 'Custom style',
    style: { backgroundColor: '#EEEEEE', paddingVertical: 16 },
  },
};
