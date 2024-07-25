import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const RedText = styled(Text)`
  color: red;
`;

function CategoriesScreen() {
  return (
    <StyledSafeAreaView>
      <View>
        <RedText>CategoriesScreen</RedText>
      </View>
    </StyledSafeAreaView>
  );
}

export default CategoriesScreen;
