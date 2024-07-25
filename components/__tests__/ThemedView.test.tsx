import React from 'react';
import { render } from '@testing-library/react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import ThemedView from '../ThemedView';

// Mock useThemeColor hook
jest.mock('@/hooks/useThemeColor', () => ({
  useThemeColor: jest.fn(),
}));

describe('ThemedView', () => {
  it('should apply background color from useThemeColor hook', () => {
    // Mocking useThemeColor hook to return a specific color
    (useThemeColor as jest.Mock).mockReturnValue('blue');

    const { getByTestId } = render(
      <ThemedView testID="themed-view" lightColor="white" darkColor="black" />,
    );

    const themedView = getByTestId('themed-view');
    expect(themedView.props.style[0].backgroundColor).toBe('blue');
  });

  it('should apply additional styles passed via props', () => {
    (useThemeColor as jest.Mock).mockReturnValue('blue');

    const { getByTestId } = render(
      <ThemedView testID="themed-view" style={{ borderWidth: 1 }} />,
    );

    const themedView = getByTestId('themed-view');
    expect(themedView.props.style).toEqual([
      { backgroundColor: 'blue' },
      { borderWidth: 1 },
    ]);
  });

  it('should spread additional props', () => {
    (useThemeColor as jest.Mock).mockReturnValue('blue');

    const { getByTestId } = render(
      <ThemedView testID="themed-view" accessibilityLabel="Themed View" />,
    );

    const themedView = getByTestId('themed-view');
    expect(themedView.props.accessibilityLabel).toBe('Themed View');
  });
});
