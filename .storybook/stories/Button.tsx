import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ButtonProps {
  onPress: () => void;
  text: string;
  variant?: 'default' | 'outline';
  iconName?: string;
  iconLibrary?: any;
  colorIcon?: string;
}

export const ButtonCustom = ({
  onPress,
  text,
  variant = 'default',
  iconName,
  iconLibrary: IconLibrary = Icon,
}: ButtonProps) => (
  <Pressable
    style={[styles.container, variant === 'outline' && styles.outlineContainer]}
    onPress={onPress}
  >
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {iconName && (
        <IconLibrary
          name={iconName}
          size={24}
          style={{ marginRight: 8 }}
          color="white"
        />
      )}
      <Text style={[styles.text, variant === 'outline' && styles.outlineText]}>
        {text}
      </Text>
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 8,
    backgroundColor: 'purple',
    alignSelf: 'flex-start',
    borderRadius: 8,
  },
  outlineContainer: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'purple',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  outlineText: {
    color: 'purple',
  },
});
