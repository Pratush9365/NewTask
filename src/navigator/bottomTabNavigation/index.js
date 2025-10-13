import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import HomeScreen from '../../screens/home';
import accountScreen from '../../screens/account';
import favoriteScreen from '../../screens/favorites';
import {Images} from '../../assets';
import MenuStackNavigator from '../stackNavigation/tab+stackNavgation';
import colors from '../../utils/colors';
import {screenNames} from '../../utils/screenNames';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
      }}>
      <Tab.Screen
        name={screenNames.HOME}
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: () => (
            <Image
              source={Images.bottomTabHome}
              style={{width: 20, height: 20, tintColor: colors.gray29C}}
            />
          ),
        }}
      />

      <Tab.Screen
        name={screenNames.ACCOUNT}
        component={accountScreen}
        options={{
          title: 'Account',
          tabBarIcon: () => (
            <Image
              source={Images.bottomTabAccount}
              style={{width: 20, height: 20, tintColor: colors.gray29C}}
            />
          ),
        }}
      />
      <Tab.Screen
        name={screenNames.FAVORITE}
        component={favoriteScreen}
        options={{
          title: 'FAVORITE',
          tabBarIcon: () => (
            <Image
              source={Images.bottomTabFavourite}
              style={{width: 20, height: 20, tintColor: colors.gray29C}}
            />
          ),
        }}
      />
      <Tab.Screen
        name={screenNames.MENU}
        component={MenuStackNavigator}
        options={{
          title: 'Menu',
          tabBarIcon: () => (
            <Image
              source={Images.bottomTabMenu}
              style={{width: 20, height: 20, tintColor: colors.blue4BA}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
