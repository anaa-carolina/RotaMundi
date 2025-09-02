import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Screens/HomeScreen';
import PreferenceScreen from './Screens/PreferenceScreen';
import RecommendationScreen from './Screens/RecommendationScreen';
import DestinationDetails from './Screens/DestinationDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'RotaMundi - Home' }}
        />
        <Stack.Screen
          name="Preferences"
          component={PreferenceScreen}
          options={{ title: 'RotaMundi - Preferências' }}
        />
        <Stack.Screen
          name="Recommendations"
          component={RecommendationScreen}
          options={{ title: 'RotaMundi - Recomendações' }}
        />
        <Stack.Screen
          name="Details"
          component={DestinationDetails}
          options={{ title: 'RotaMundi - Detalhes do Destino' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
