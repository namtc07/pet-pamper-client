import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ButtonCustom } from './Button';

const button = {
  title: 'ButtonCustom',
  component: ButtonCustom,
  args: {
    text: 'Hello world',
    onPress: () => alert('Button pressed!'),
    colorIcon: 'red',
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ButtonCustom>;

export default button;

type Story = StoryObj<typeof button>;

export const Primary: Story = {
  args: { text: 'Primary' },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    text: 'Outline',
  },
};

export const WithIcon: Story = {
  args: {
    text: 'Button with Icon',
    iconName: 'notifications-outline', // Tên icon
    iconLibrary: Icon, // Loại icon
    colorIcon: 'red',
  },
};
