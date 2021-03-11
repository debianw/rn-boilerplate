import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import ContactScreen from '../screens/contact/ContactScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import Icon from '../components/atoms/Icon';
import { COLORS, SIZE } from '../constants';

const Tab = createBottomTabNavigator();

const TabIcon = ({ focused, name, label, size = 32 }) => (
  <View style={{
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    ...(focused
      ? {
        top: -20,
        borderRadius: 32,
        borderWidth: 1,
        borderColor: COLORS.primary.main,
        padding: SIZE.spacing(2),
      }
      : null
    ),
  }}>
    <Icon
      name={name}
      size={size}
      color={focused ? COLORS.primary.main : COLORS.black}
    />

    {!focused && (
      <Text style={{
        color: COLORS.black
      }}>
        {label}
      </Text>
    )}
  </View>
);

const DashboardNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          elevation: 0,
          backgroundColor: COLORS.white,
          borderTopColor: 'transparent',
          height: 100,
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              label="Inicio"
              name="home"
            />
          )
        }}
      />

      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              label="Contactenos"
              name="mail"
            />
          )
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              label="Mi Perfil"
              name="settings"
            />
          )
        }}
      />
    </Tab.Navigator>
  )
};

export default DashboardNavigator;