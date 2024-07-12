import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import ProductCard from '@/app/_components/product-card';
import Text from '@/components/TextCustom';
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface ProductListProps {
  sourceList?: any[];
}

const ProductList: React.FC<ProductListProps> = ({ sourceList = [] }) => {
  const [mode, setMode] = useState(false);

  const width = useSharedValue<any>('48%');
  const height = useSharedValue<any>(286);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(width.value, config),
      height: withTiming(height.value, config),
    };
  });

  const handleSwitchGrid = () => {
    setMode(!mode);
    width.value = mode ? '48%' : '100%';
    height.value = mode ? 286 : 159;
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View>
          <Text
            children="Products"
            style={{ fontSize: 16 }}
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
          <ProductCard key={index} modeRow={mode} styleMode={style} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
  },
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
});

export default ProductList;
