import { StatusBar, StyleSheet } from 'react-native';

export const EMAIL_REGEX = /\S+@\S+\.\S+/;

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 12,
    height: 52,
    justifyContent: 'center',
    width: '100%',
    zIndex: 1,
  },
  buttonGroup: {
    display: 'flex',
    gap: 18,
    paddingVertical: 32,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  content: {
    flex: 1,
    marginTop: 18,
    paddingHorizontal: 24,
  },
  emailContainer: {
    marginBottom: 16,
  },
  eyeIcon: {
    paddingBottom: 10,
    paddingEnd: 10,
    paddingStart: 10,
    paddingTop: 10,
    position: 'absolute',
    right: 0,
    top: '50%',
  },
  eyeIconLogin: {
    transform: [{ translateY: -32 }],
  },
  eyeIconSignup: {
    transform: [{ translateY: -20 }],
  },
  facebook: {
    backgroundColor: 'white',
  },
  google: {
    backgroundColor: 'white',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: StatusBar.currentHeight,
  },
  iconContainer: {
    alignItems: 'center',
    height: 32,
    justifyContent: 'center',
    width: 32,
  },
  input: {
    backgroundColor: '#CBCBCB30',
    borderColor: 'transparent',
    borderRadius: 12,
    borderWidth: 1,
    color: '#5A2828',
    fontSize: 14,

    height: 52,
    padding: 10,
  },
  invalidInput: {
    borderColor: 'red',
  },
  invalidText: {
    color: 'red',
    fontSize: 12,
  },
  passwordContainer: {
    marginBottom: 16,
    position: 'relative',
  },
  textFacebook: {
    color: '#CBCBCB',
  },
  textGoogle: {
    color: '#CBCBCB',
  },
  textSignUp: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    color: '#5A2828',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 36,
    marginBottom: 18,
  },
});
