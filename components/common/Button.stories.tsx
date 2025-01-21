import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "기본 버튼 컴포넌트입니다.",
      },
    },
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "기본 버튼",
  },
};

export const 링크_버튼: Story = {
  args: {
    href: "/test",
    children: "링크 버튼",
  },
};

export const 커스텀_스타일: Story = {
  args: {
    children: "커스텀 스타일",
    className: "my-4",
  },
};
