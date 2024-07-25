import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import Text from '@/components/TextCustom';

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
interface BadgeProps {
  count: number;
  style?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  textColor?: string;
}

function Badge({ count, style, backgroundColor, textColor }: BadgeProps) {
  if (count <= 0) return null;

  return (
    <View style={[styles.container, style, { backgroundColor }]}>
      <Text style={[styles.text, { color: textColor }]} fontWeight="bold">
        {count}
      </Text>
    </View>
  );
}

// Đặt giá trị mặc định cho các prop không bắt buộc
Badge.defaultProps = {
  backgroundColor: '#FF8D4D',
  textColor: '#fff',
  style: {},
};

export default Badge;
