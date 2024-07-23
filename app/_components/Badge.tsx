// src/components/Badge.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '@/components/TextCustom';

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
    alignItems: 'center',
    backgroundColor: '#FF8D4D',
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 0.5,
    height: 20,
    justifyContent: 'center',
    position: 'absolute',
    width: 20,
  },
  text: {
    color: '#fff',
    fontSize: 10,
  },
});

export default Badge;
