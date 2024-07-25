import React from 'react';
import { render } from '@testing-library/react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import ThemedView from '../ThemedView';

// Mock useThemeColor hook
jest.mock('@/hooks/useThemeColor', () => ({
  useThemeColor: jest.fn(),
}));

describe('ThemedView Snapshot Tests', () => {
  it('should match snapshot with light color', () => {
    // Mocking useThemeColor hook to return a specific color
    (useThemeColor as jest.Mock).mockReturnValue('white');

    const { toJSON } = render(
      <ThemedView lightColor="white" darkColor="black" />,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('should match snapshot with dark color', () => {
    // Mocking useThemeColor hook to return a specific color
    (useThemeColor as jest.Mock).mockReturnValue('black');

    const { toJSON } = render(
      <ThemedView lightColor="white" darkColor="black" />,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('should match snapshot with additional styles and props', () => {
    (useThemeColor as jest.Mock).mockReturnValue('blue');

    const { toJSON } = render(
      <ThemedView
        lightColor="white"
        darkColor="black"
        style={{ borderWidth: 1 }}
        accessibilityLabel="Themed View"
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
