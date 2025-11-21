import type { Meta, StoryObj } from "@storybook/react";
import SideMenu from "@/app/components/SideMenu/SideMenu";

const meta: Meta<typeof SideMenu> = {
  title: "Layout/SideMenu", // how it appears in the left sidebar
  component: SideMenu,
};

export default meta;

type Story = StoryObj<typeof SideMenu>;

export const Default: Story = {
  args: {
    // put any props your SideMenu takes here
  },
};
