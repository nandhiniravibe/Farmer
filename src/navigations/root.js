import React, { Component } from 'react';
import { Platform } from 'react-native';

import { createDrawerNavigator } from 'react-navigation';
import SplashScreen from '../screens/splash';
import WelcomeScreen from '../screens/welcome';
import LoginScreen from '../screens/login';
import RegistrationScreen from '../screens/registration';
const ScenesApp = {

  SplashScreen: {
    screen: SplashScreen
  },
  WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: {
      drawerLockMode: 'locked-closed'
    }
  },
  RegistrationScreen: {
    screen: RegistrationScreen,
    navigationOptions: {
      drawerLockMode: 'locked-closed'
    }
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      drawerLockMode: 'locked-closed'
    }
  }
}

const AppNavigator = createDrawerNavigator({
  ...ScenesApp
}, {
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
    cardStyle: { backgroundColor: 'white', shadowOpacity: 0 },
    contentComponent: props => <SideMenu {...props} />,
    drawerPosition: 'left'
  })
export default AppNavigator

