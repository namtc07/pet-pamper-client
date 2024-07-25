import { router } from 'expo-router';
import {
  Image,
  ImageStyle,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import Images from '@/assets/images';
import PlatformTouchable from '@/components/PlatformTouchable';
import StatusbarCustom from '@/components/StatusbarCustom';
import Text from '@/components/TextCustom';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusbarCustom color="dark" />
      <View style={styles.header}>
        <Text style={styles.title} children="Pet pamper" />
        <Text style={styles.subtitle} children="Taking care of your pet" />
      </View>
      <View style={styles.middle}>
        <Image style={styles.img as ImageStyle} source={Images.BannerPreview} />
      </View>
      <View style={styles.footer}>
        <PlatformTouchable
          onPress={() => router.navigate('sign-up')}
          style={styles.signUp}
          hasShadow
        >
          <Text style={styles.textSignUp} children="Sign Up" />
        </PlatformTouchable>
        <PlatformTouchable
          onPress={() => {
            router.navigate('log-in');
          }}
          style={styles.logIn}
        >
          <Text style={styles.textLogIn} children="Log in" />
        </PlatformTouchable>
      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    display: 'flex',
    flex: 1,
    gap: 24,
    justifyContent: 'center',
    textAlign: 'center',
  },
  footer: {
    display: 'flex',
    gap: 18,
    width: 342,
  },
  header: {
    // paddingTop: 57,
  },
  img: {
    height: 343,
    width: 343,
  },
  logIn: {
    backgroundColor: 'orange',
  },
  middle: {
    alignItems: 'center',
  },
  signUp: {
    backgroundColor: 'white',
    shadowColor: '#000',
  },
  subtitle: {
    color: '#FF8D4D',
    fontSize: 18,
    lineHeight: 27,
    paddingBottom: 30,
    textAlign: 'center',
  },
  textLogIn: {
    color: 'white',
    fontFamily: 'Exo-Bold',
  },
  textSignUp: {
    color: '#FF8D4D',
    fontFamily: 'Exo-Bold',
  },
  title: {
    color: '#5A2828',
    fontSize: 36,
    lineHeight: 54,
    textTransform: 'uppercase',
  },
});
