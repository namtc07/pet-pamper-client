import Badge from '@/app/_components/Badge';
import DatePicker from '@/app/_components/date-picker';
import MenuTabBlock from '@/app/_components/menu-tab-block';
import ProductList from '@/app/_components/product-list';
import { banners, stylesHome } from '@/app/_styles/styleHome';
import Svgs from '@/assets/svgs';
import StatusbarCustom from '@/components/StatusbarCustom';
import { StatusBarStyle } from 'expo-status-bar';
import React, { useCallback, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  ImageBackground,
  RefreshControl,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Icon from 'react-native-vector-icons/Ionicons';

export const createBackgroundColorInterpolation = (scrollY: Animated.Value) =>
  scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)'],
    extrapolate: 'clamp',
  });

export const fadeIn = (fadeAnim: Animated.Value) => {
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 100,
    useNativeDriver: true,
  }).start();
};

export const fadeOut = (fadeAnim: Animated.Value) => {
  Animated.timing(fadeAnim, {
    toValue: 0,
    duration: 30,
    useNativeDriver: true,
  }).start();
};

function HomeScreen() {
  const scrollViewRef = useRef<ScrollView>(null);

  const { width } = Dimensions.get('window');

  const [currentIndex, setCurrentIndex] = useState(0);
  const [iconColor, setIconColor] = useState('#ffffff');
  const [colorStatus, setColorStatus] = useState('light');
  const [showBackToTop, setShowBackToTop] = useState(false);

  const fadeAnim = useRef(new Animated.Value(1)).current;
  const scrollY = useRef(new Animated.Value(0)).current;

  const backgroundColor = createBackgroundColorInterpolation(scrollY);

  const handleScroll = (event: {
    nativeEvent: { contentOffset: { y: number } },
  }) => {
    const { y } = event.nativeEvent.contentOffset;
    scrollY.setValue(y);

    if (y < 0) {
      fadeOut(fadeAnim);
      setColorStatus('dark');
    } else if (y > 10) {
      fadeIn(fadeAnim);
      setIconColor('#000000');
      setColorStatus('dark');
    } else {
      fadeIn(fadeAnim);
      setIconColor('#ffffff');
      setColorStatus('light');
    }

    if (y > 200) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const menuTabs = [
    {
      title: 'Service',
      icon: <Svgs.IconService />,
    },
    {
      title: 'Products',
      icon: <Svgs.IconProducts />,
    },
    {
      title: 'My pets',
      icon: <Svgs.IconCamera />,
    },
  ];

  return (
    <View style={stylesHome.container}>
      <StatusbarCustom color={colorStatus as StatusBarStyle} />
      <Animated.View style={[stylesHome.header, { backgroundColor }]}>
        <Animated.View
          style={{
            opacity: fadeAnim,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Icon
            name="search-outline"
            size={16}
            color="#999"
            style={stylesHome.searchIcon}
          />
          <TextInput
            clearButtonMode="while-editing"
            style={stylesHome.searchInput}
            placeholder="Tìm kiếm sản phẩm, dịch vụ,..."
            placeholderTextColor="#999"
          />
          <View style={stylesHome.searchIconGroup}>
            <TouchableOpacity style={stylesHome.icon}>
              <Icon name="cart-outline" size={22} color={iconColor} />
              <Badge count={99} style={{ top: -10, right: -10 }} />
            </TouchableOpacity>
            <TouchableOpacity style={stylesHome.icon}>
              <Icon name="notifications-outline" size={22} color={iconColor} />
              <Badge count={3} style={{ top: -10, right: -10 }} />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Animated.View>
      <ScrollView
        onScroll={handleScroll}
        ref={scrollViewRef}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressBackgroundColor="#FF8D4D"
            tintColor="#FF8D4D"
            title="Loading..."
            titleColor="#FF8D4D"
            colors={['white']}
          />
        }
      >
        <View style={stylesHome.carouselContainer}>
          <Carousel
            loop
            width={width}
            height={width / 2}
            autoPlay
            autoPlayInterval={5000}
            data={banners}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => setCurrentIndex(index)}
            renderItem={({ item }) => (
              <View key={item.key}>
                <ImageBackground
                  source={item.img}
                  resizeMode="cover"
                  style={stylesHome.image}
                />
              </View>
            )}
            panGestureHandlerProps={{
              activeOffsetX: [-10, 10],
            }}
          />
          <View style={stylesHome.pagination}>
            {banners.map((_, index) => (
              <View
                style={[
                  stylesHome.dot,
                  currentIndex === index
                    ? stylesHome.activeDot
                    : stylesHome.inactiveDot,
                ]}
              />
            ))}
          </View>
          <View style={stylesHome.menuTabBLock}>
            <MenuTabBlock
              mode="multi"
              source={menuTabs}
              icon={undefined}
              title=""
              onPress={() => console.log('onPress')}
            />
          </View>
        </View>
        <View style={stylesHome.content}>
          <View>
            <DatePicker />
          </View>
          <ProductList
            sourceList={[
              { id: '1', name: 'Product 1', price: 10000 },
              { id: '2', name: 'Product 2', price: 20000 },
              { id: '3', name: 'Product 3', price: 30000 },
              { id: '4', name: 'Product 4', price: 40000 },
              { id: '5', name: 'Product 5', price: 50000 },
            ]}
          />
        </View>
      </ScrollView>
      {showBackToTop && (
        <TouchableOpacity
          style={stylesHome.backToTopButton}
          onPress={() => {
            scrollViewRef.current?.scrollTo({ y: 0, animated: true });
          }}
        >
          <Icon name="arrow-up" size={24} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
}

export default HomeScreen;
