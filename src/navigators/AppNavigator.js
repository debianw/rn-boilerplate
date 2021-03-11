import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardNavigator from './DashboardNavigator';
import SettingsScreen from '../screens/settings/SettingsScreen';

// const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator(); 

const AppNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={DashboardNavigator} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  )
};

export default AppNavigator;