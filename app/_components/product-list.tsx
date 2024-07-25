import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Text from '@/components/TextCustom';
import ProductCard from '@/app/_components/product-card';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between',
  },
  textHeader: { fontSize: 16 },
});

interface Product {
  id: string;
  name: string;
  price: number;
  // Add other properties as needed
}

interface ProductListProps {
  sourceList?: Product[];
}

function ProductList({ sourceList = [] }: ProductListProps) {
  const [mode, setMode] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const width = useSharedValue<any>('48%');
  const height = useSharedValue<number>(286);

  const config = {
    duration: 150,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => ({
    width: withTiming(width.value, config),
    height: withTiming(height.value, config),
  }));

  const handleSwitchGrid = () => {
    setMode(!mode);
    width.value = mode ? '48%' : '100%';
    height.value = mode ? 286 : 159;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text
            children="Products"
            style={styles.textHeader}
            fontWeight="bold"
          />
        </View>
        <Ionicons
          onPress={handleSwitchGrid}
          name={mode ? 'grid-outline' : 'grid'}
          size={18}
          color="#FF8D4D"
        />
      </View>
      <View style={styles.productContainer}>
        {sourceList.map((item, index) => (
          <ProductCard
            key={item.id}
            modeRow={mode}
            styleMode={style as ViewStyle}
          />
        ))}
      </View>
    </View>
  );
}

export default ProductList;
