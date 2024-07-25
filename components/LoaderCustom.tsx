import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Modal,
  Platform,
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  modalBackground: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    flex: 1,
    justifyContent: 'center',
  },
});

interface LoaderCustomProps {
  isLoading?: boolean;
  visible?: boolean;
}

function LoaderCustom({ isLoading, visible }: LoaderCustomProps) {
  const osName = Platform.OS;
  const screenHeight = Dimensions.get('screen').height;

  if (!isLoading) return null;

  return (
    <Modal transparent animationType="none" visible={visible}>
      <View style={[styles.modalBackground, { height: screenHeight }]}>
        <ActivityIndicator
          animating={isLoading}
          color="#FF8D4D"
          size={osName === 'ios' ? 'large' : 50}
        />
      </View>
    </Modal>
  );
}

export default LoaderCustom;
