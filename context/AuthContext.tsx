import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useRouter } from 'expo-router';
import React, { createContext, useEffect, useMemo, useState } from 'react';

interface AuthData {
  token: string;
  phone: string;
}

interface AuthContextType {
  auth: AuthData | undefined;
  setAuth: (newAuthState: AuthData) => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

// Create a context
const AuthContext = createContext<AuthContextType>({
  auth: undefined,
  setAuth: () => {},
});

const configureAxiosHeaders = (token: string, phone: string) => {
  axios.defaults.headers['X-Auth-Token'] = token;
  axios.defaults.headers['X-Auth-Phone'] = phone;
};

function AuthProvider({ children }: AuthProviderProps) {
  const [auth, setAuthState] = useState<AuthData | undefined>(undefined);
  const routerCustom = useRouter();

  // Get current auth state from AsyncStorage
  const getAuthState = async () => {
    try {
      const authDataString = await AsyncStorage.getItem('auth');
      const authData: AuthData = JSON.parse(authDataString || '{}');
      // Configure axios headers
      configureAxiosHeaders(authData.token, authData.phone);
      setAuthState(authData);
    } catch (err) {
      setAuthState(undefined);
    }
  };

  // Update AsyncStorage & context state
  const updateAuthState = async (newAuthState: AuthData) => {
    try {
      await AsyncStorage.setItem('auth', JSON.stringify(newAuthState));
      // Configure axios headers
      configureAxiosHeaders(newAuthState.token, newAuthState.phone);
      setAuthState(newAuthState);
    } catch (error) {
      console.error('Failed to update auth state in AsyncStorage:', error);
    }
  };

  useEffect(() => {
    getAuthState();
  }, []);

  useEffect(() => {
    if (auth?.token) {
      routerCustom.replace('/(tabs)/home/home');
    }
  }, [auth]);

  const contextValue = useMemo(
    () => ({ auth, setAuth: updateAuthState }),
    [auth],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
