import {
  checkButtonState,
  loadStoredData,
  saveDataToStorage,
  validateEmail,
} from '@/app/_utils/authHelpers';
import { AntDesign, Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useContext, useEffect, useState } from 'react';
import {
  Alert,
  Keyboard,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import Svgs from '@/assets/svgs';
import LoaderCustom from '@/components/LoaderCustom';
import PlatformTouchable from '@/components/PlatformTouchable';
import SeparatorCustom from '@/components/SeparatorCustom';
import StatusbarCustom from '@/components/StatusbarCustom';
import Text from '@/components/TextCustom';
import { AuthContext } from '@/context/AuthContext';
import FacebookLogin from '../_components/FacebookLogin';
import { stylesAuth } from '../_styles/stylesAuth';

function Login() {
  const [loading, setLoading] = useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [emailValid, setEmailValid] = useState<boolean>(true);
  const { setAuth } = useContext(AuthContext);

  useEffect(() => {
    loadStoredData(setEmail, setPassword);
  }, []);

  useEffect(() => {
    checkButtonState(email, password, emailValid, setButtonDisabled);
    validateEmail(email, setEmailValid);
  }, [email, password]);

  const handleEmailChange = (text: string) => {
    setEmail(text);
    checkButtonState(text, password, emailValid, setButtonDisabled);
    validateEmail(text, setEmailValid);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    checkButtonState(email, text, emailValid, setButtonDisabled);
  };

  const handleLogin = () => {
    if (email === 'admin@gmail.com' && password === '123') {
      saveDataToStorage(email, password);
      setAuth({ token: email, phone: '' });
    } else {
      Alert.alert('Sai roi !');
    }
  };

  const handleBackPress = async () => {
    saveDataToStorage(email, password);
    router.back();
  };

  return (
    <SafeAreaView style={stylesAuth.container}>
      <StatusbarCustom color="dark" />
      <View style={stylesAuth.header}>
        <TouchableWithoutFeedback onPress={handleBackPress}>
          <View style={stylesAuth.iconContainer}>
            <AntDesign name="left" size={24} color="#FF8D4D" />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={stylesAuth.content}>
          <View>
            <View>
              <Text style={stylesAuth.title} children="Log in" />
            </View>
            <View>
              <View style={stylesAuth.emailContainer}>
                <TextInput
                  style={[
                    stylesAuth.input,
                    !emailValid &&
                      email?.trim() !== '' &&
                      stylesAuth.invalidInput,
                  ]}
                  placeholder="Email"
                  placeholderTextColor="#979797"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={handleEmailChange}
                />
                {!emailValid && email?.trim() !== '' && (
                  <View style={{ paddingLeft: 4 }}>
                    <Text
                      style={stylesAuth.invalidText}
                      children="Please enter your email address in format:"
                    />
                    <Text
                      style={stylesAuth.invalidText}
                      children="yourname@example.com"
                    />
                  </View>
                )}
              </View>
              <View style={stylesAuth.passwordContainer}>
                <TextInput
                  style={stylesAuth.input}
                  placeholder="Password"
                  secureTextEntry={!passwordVisible}
                  placeholderTextColor="#979797"
                  keyboardType="default"
                  value={password}
                  onChangeText={handlePasswordChange}
                />
                <TouchableOpacity
                  style={[stylesAuth.eyeIcon, stylesAuth.eyeIconLogin]}
                  onPress={() => setPasswordVisible(!passwordVisible)}
                >
                  <Feather
                    name={passwordVisible ? 'eye' : 'eye-off'}
                    size={22}
                    color="#979797"
                  />
                </TouchableOpacity>
                <View style={{ paddingTop: 4, alignItems: 'flex-end' }}>
                  <TouchableOpacity
                    onPress={() => router.navigate('Forgot password?')}
                  >
                    <Text
                      style={{ color: '#FF8D4D', fontWeight: '600' }}
                      children="Forgot password?"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={{ paddingTop: 32 }}>
            <PlatformTouchable
              disabled={buttonDisabled}
              onPress={handleLogin}
              style={[
                stylesAuth.button,
                { backgroundColor: buttonDisabled ? '#CBCBCB' : '#FF8D4D' },
              ]}
            >
              <Text
                style={{ color: buttonDisabled ? '#979797' : 'white' }}
                children="Log in"
              />
            </PlatformTouchable>
          </View>
          <View style={{ paddingTop: 32 }}>
            <SeparatorCustom
              text="Or"
              position="middle"
              propsText={{ fontWeight: '700' }}
            />
          </View>
          <View style={stylesAuth.buttonGroup}>
            <PlatformTouchable
              style={stylesAuth.google}
              hasShadow
              children={
                <Text style={stylesAuth.textGoogle} children="Google" />
              }
              icon={<Svgs.IconGoogle />}
              onPress={() => console.log('Google')}
            />
            <FacebookLogin onLoading={setLoading} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 32,
            }}
          >
            <Text
              style={{ color: '#CBCBCB' }}
              children="Already have an account?"
            />
            <TouchableOpacity onPress={() => router.navigate('sign-up')}>
              <Text
                style={{ color: '#FF8D4D', fontWeight: '600' }}
                children="Sign up"
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
      {loading && <LoaderCustom visible={loading} isLoading={loading} />}
    </SafeAreaView>
  );
}

export default Login;
