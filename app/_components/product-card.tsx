import React from 'react';
import { Image, Platform, StyleSheet, View, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import Images from '@/assets/images';
import Svgs from '@/assets/svgs';
import Text from '@/components/TextCustom';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    borderRadius: 12,
    display: 'flex',
    gap: 8,
    paddingHorizontal: 6,
    paddingVertical: 6,
    ...Platform.select({
      ios: {
        // shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  containerColumn: {
    flexDirection: 'column',
    width: '48%',
  },
  containerRow: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 159,
    width: '100%',
  },
  content: {
    flex: 1,
    gap: 16,
  },
  discountContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  discountText: {
    // color: '#fff',
    fontSize: 10,
    position: 'absolute',
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageProduct: {
    borderRadius: 12,
    height: 147,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceCurrent: {
    // color: '#FF8D4D',
    fontFamily: 'Exo-Bold',
    fontSize: 16,
  },
  priceOld: {
    // color: '#979797',
    fontSize: 10,
    textDecorationLine: 'line-through',
  },
  priceTextContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
  },
  ratingContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 6,
  },
  ratingStar: {
    paddingTop: 1,
  },
  ratingText: {
    // color: '#979797',
    fontSize: 10,
  },
  ratingTextContainer: {
    alignContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    fontSize: 10,
  },
  separator: {
    // color: '#979797',
    fontSize: 10,
  },
  textContainer: {
    display: 'flex',
    flex: 1,
  },
  textPrimary: {
    // color: '#5A2828',
    fontFamily: 'Exo-Bold',
    fontSize: 12,
    lineHeight: 18,
  },
  textSecondary: {
    // color: '#5A2828',
    fontSize: 12,
  },
});

interface ProductCardProps {
  modeRow?: boolean;
  styleMode?: ViewStyle;
}

function ProductCard({ modeRow, styleMode }: ProductCardProps) {
  return (
    <Animated.View
      style={[
        styles.container,
        modeRow ? styles.containerRow : styles.containerColumn,
        styleMode,
      ]}
    >
      <View style={styles.imageContainer}>
        <Image // TODO: fix linter no-inline-styles
          style={{ ...styles.imageProduct, width: !modeRow ? '100%' : 147 }}
          source={Images.ProductCard}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.textPrimary} children="Brit Care" />
          <Text
            style={styles.textSecondary}
            lines={2}
            children="Wet cat food salmon & herring supper puppies & adults"
          />
        </View>
        <View style={styles.priceContainer}>
          <View style={styles.priceTextContainer}>
            <Text style={styles.priceCurrent} children="$18" />
            <Text style={styles.priceOld} children="$20" />
          </View>
          <View style={styles.discountContainer}>
            <Svgs.ZigzagTag />
            <Text style={styles.discountText} children="Giảm 100%" />
          </View>
        </View>
        <View style={styles.ratingContainer}>
          <View style={styles.ratingTextContainer}>
            <View style={styles.ratingStar}>
              <Svgs.IconStart />
            </View>
            <Text style={styles.ratingText} children="4.8" />
          </View>
          <Text style={styles.separator} children="|" />
          <Text style={styles.ratingText} children="1,6k sold" />
        </View>
      </View>
    </Animated.View>
  );
}

export default ProductCard;
