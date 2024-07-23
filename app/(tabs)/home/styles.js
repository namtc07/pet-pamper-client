import { Platform, StatusBar, StyleSheet } from 'react-native';
import Images from '@/assets/images';

export const banners = [
  { img: Images.BannerHomepage, key: '1' },
  { img: Images.Camera, key: '2' },
  { img: Images.Products, key: '3' },
  { img: Images.Services, key: '4' },
];

export const styles = StyleSheet.create({
  activeDot: {
    backgroundColor: '#FF8D4D',
    width: 15,
  },
  backToTopButton: {
    alignItems: 'center',
    backgroundColor: '#FF8D4D',
    borderRadius: 25,
    bottom: 30,
    height: 50,
    justifyContent: 'center',
    position: 'absolute',
    right: 20,
    width: 50,
  },
  carouselContainer: {
    marginBottom: 10,
    overflow: 'hidden',
    paddingBottom: 40,
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  content: {
    gap: 18,
    marginHorizontal: 20,
    paddingBottom: 20,
  },
  dot: {
    borderRadius: 5,
    height: 8,
    marginHorizontal: 5,
    width: 8,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 0,
    paddingHorizontal: 20,
    paddingTop:
      Platform.OS === 'ios'
        ? StatusBar.currentHeight + 50
        : StatusBar.currentHeight + 20,
    paddingVertical: 4,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
  },
  icon: {
    // paddingVertical: 2,
  },
  image: {
    alignItems: 'center',
    backgroundColor: 'grey',
    height: 225,
    justifyContent: 'center',
  },
  inactiveDot: {
    backgroundColor: '#CBCBCB',
  },
  menuTabBLock: {
    alignSelf: 'center',
    bottom: 15,
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
  },
  pagination: {
    alignSelf: 'center',
    bottom: 65,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    position: 'absolute',
  },
  searchIcon: {
    position: 'absolute',
    // top: 14,
    left: 8,
    zIndex: 1,
  },
  searchIconGroup: {
    flexDirection: 'row',
    gap: 10,
    paddingLeft: 8,
  },
  searchInput: {
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    flex: 1,
    height: 36,
    marginRight: 10,
    paddingHorizontal: 30,
  },
});
