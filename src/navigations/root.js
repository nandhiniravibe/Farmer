import React, { Component } from 'react';
import { Platform } from 'react-native';

import { createStackNavigator,createDrawerNavigator,createAppContainer } from 'react-navigation';
import SplashScreen from '../screens/splash';
import WelcomeScreen from '../screens/welcome';
import LoginScreen from '../screens/login';
import RegistrationScreen from '../screens/registration';
import ForgotScreen from '../screens/forgot'
import HomeFarmerScreen from '../screens/homeFarmer';
import HomeVendorScreen from '../screens/homeVendor';

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
  },
  ForgotScreen: {
    screen: ForgotScreen,
    navigationOptions: {
      drawerLockMode: 'locked-closed'
    },
  },
  HomeFarmerScreen: {
    screen: HomeFarmerScreen,
    navigationOptions: {
      drawerLockMode: 'locked-closed'
  }
},
  HomeVendorScreen: {
    screen: HomeVendorScreen,
    navigationOptions: {
      drawerLockMode: 'locked-closed'
  }
  }
}

const router = createStackNavigator({
  ...ScenesApp
}, {
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
    cardStyle: { backgroundColor: 'white', shadowOpacity: 0 },
    // contentComponent: props => <SplashScreen/>,
    // drawerPosition: 'left'
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false
    },
    initialRouteName : "SplashScreen"
  })

  const AppNavigator = createAppContainer(router);
export default AppNavigator;

