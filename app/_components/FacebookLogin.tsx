import Svgs from '@/assets/svgs';
import PlatformTouchable from '@/components/PlatformTouchable';
import Text from '@/components/TextCustom';
import Colors from '@/constants/Colors';
import { AuthContext } from '@/context/AuthContext';
import { requestTrackingPermissionsAsync } from 'expo-tracking-transparency';
import React, { useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  facebook: {
    backgroundColor: Colors.light.background,
  },
  textFacebook: {
    color: '#CBCBCB',
  },
});

interface FacebookLoginProps {
  onLoading: (loading: boolean) => void;
}

function FacebookLogin({ onLoading }: FacebookLoginProps) {
  const { setAuth } = useContext(AuthContext);

  useEffect(() => {
    const requestTracking = async () => {
      const { status } = await requestTrackingPermissionsAsync();
      // if (Platform.OS === 'ios') {
      //   Settings.initializeSDK();
      // }
      // if (status === 'granted' && Platform.OS === 'ios') {
      //   await Settings.setAdvertiserTrackingEnabled(true);
      // }
    };
    requestTracking();
  }, []);

  const handleFacebookLogin = async () => {
    console.log('Login');
  };

  return (
    <PlatformTouchable
      hasShadow
      style={styles.facebook}
      onPress={handleFacebookLogin}
      children={<Text style={styles.textFacebook} children="Facebook" />}
      icon={<Svgs.IconFacebook />}
    />
  );
}

export default FacebookLogin;
