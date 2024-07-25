import React from 'react';
import {
  Platform,
  Pressable,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import Text from './TextCustom';

const commonStyles = StyleSheet.create({
  button: {
    borderRadius: 12,
    width: '100%',
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  } as ViewStyle,
  icon: {
    marginLeft: 12,
    width: 24,
    height: 24,
  } as ViewStyle,
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
      },
      android: {
        elevation: 5,
      },
    }),
  } as ViewStyle,
  text: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 27,
    textAlign: 'center',
  } as TextStyle,
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  } as ViewStyle,
});

interface PlatformTouchableProps {
  onPress?: () => void;
  children?: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
  disabled?: boolean;
  hasShadow?: boolean;
  icon?: React.ReactNode;
}

function PlatformTouchable({
  onPress,
  children,
  style,
  disabled,
  hasShadow,
  icon,
}: PlatformTouchableProps) {
  const buttonStyle = [
    commonStyles.button,
    style,
    hasShadow ? commonStyles.shadow : null,
  ];

  const paddingStyle: TextStyle = icon ? { paddingRight: 32 } : {};

  return (
    <Pressable onPress={onPress} disabled={disabled}>
      <View style={buttonStyle}>
        {icon && <View style={commonStyles.icon}>{icon}</View>}
        <View style={commonStyles.textContainer}>
          <Text style={[commonStyles.text, paddingStyle]}>{children}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default PlatformTouchable;
