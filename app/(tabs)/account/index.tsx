import React, { useCallback, useEffect, useState } from 'react';
import {
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// import { LoginManager } from 'react-native-fbsdk-next';
import PlatformTouchable from '@/components/PlatformTouchable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 16,
  },
  facebook: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#FF8D4D',
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    marginTop: 16,
    padding: 12,
  },
});

interface UserData {
  picture?: { data?: { url: string } };
  email?: string;
  name?: string;
  id?: string;
}

const AccountScreen: React.FC = () => {
  const handleFacebookLogout = async () => {
    await AsyncStorage.removeItem('auth');
    // LoginManager.logOut();
    // setAuth({
    //   token: '',
    //   phone: '',
    // }); // Clear auth context
    router.navigate('/');
  };

  const [user, setUser] = useState<UserData | null>(null);

  const loadStoredData = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };

  useEffect(() => {
    loadStoredData();
  }, []);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    loadStoredData();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            enabled
            progressBackgroundColor="#FF8D4D"
            tintColor="#FF8D4D"
            title="Loading..."
            titleColor="#FF8D4D"
            colors={['white']}
          />
        }
      >
        <View>
          <Image
            style={{ width: 50, height: 50 }}
            source={{
              uri: user?.picture?.data?.url ?? 'https://via.placeholder.com/50',
            }}
          />
          <Text style={{ color: 'black' }}>{user?.email}</Text>
          <Text style={{ color: 'black' }}>{user?.name}</Text>
          <Text style={{ color: 'black' }}>{user?.id}</Text>
        </View>
        <PlatformTouchable
          hasShadow
          style={styles.facebook}
          onPress={handleFacebookLogout}
          children={<Text>Log out</Text>}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;
