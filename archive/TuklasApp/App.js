import React, { useState } from 'react';
import { View, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import HomeScreen from './screens/HomeScreen';
import DiscoverScreen from './screens/DiscoverScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const cacheAssets = async () => {
  // List of images to cache
  const images = [
    require('./assets/tuklas-logo.png'),
    require('./assets/explore-icon.png'),
    require('./assets/learn-icon.png'),
    require('./assets/connect-icon.png'),
    // Add other assets here
  ];

  // Caching images
  const cacheImages = images.map((image) => Asset.fromModule(image).downloadAsync());
  await Promise.all(cacheImages);
};

const cacheFonts = async () => {
  await Font.loadAsync({
    // Define custom fonts to load
    'Roboto': require('./assets/fonts/Roboto.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    // Add other fonts as needed
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);

  // Function to load all resources
  const loadResources = async () => {
    await cacheAssets();
    await cacheFonts();
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadResources}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
