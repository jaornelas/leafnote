import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './components/AuthScreen';
import NoteCreator from './components/NoteCreator';
import { firebaseApp } from './firebaseConfig'; // Ensure this path is correct

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Create Note" component={NoteCreator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
