import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import HomeScreen from './src/screens/HomeScreen';
import CompletedTasksScreen from './src/screens/CompletedTasksScreen';
import { store } from './src/store';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Completed Tasks" component={CompletedTasksScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
