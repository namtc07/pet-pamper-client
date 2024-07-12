// src/components/Badge.tsx
import React from 'react';
import Text from '@/components/TextCustom';
import { View, StyleSheet } from 'react-native';

interface BadgeProps {
  count: number;
  style?: object;
  backgroundColor?: string;
  textColor?: string;
}

const Badge: React.FC<BadgeProps> = ({ count, style }) => {
  if (count <= 0) return null;

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text} children={count} fontWeight="bold" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#FF8D4D',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 0.5,
  },
  text: {
    color: '#fff',
    fontSize: 10,
  },
});

export default Badge;
