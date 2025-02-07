import { IconGallery } from './IconGallery';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof IconGallery> = {
  title: 'Components/Icons',
  component: IconGallery,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
    color: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof IconGallery>;

export const Default: Story = {};
