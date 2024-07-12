import { Stack } from 'expo-router';

function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="log-in"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="sign-up"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}

export default AuthLayout;
