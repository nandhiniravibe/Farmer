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
import HomeAdminScreen from '../screens/homeAdmin';
import PoweredScreen from '../screens/powered';
import NonPoweredScreen from '../screens/nonPowered';
import FertilizersScreen from '../screens/fertilizers';
import SeedsScreen from '../screens/seeds';
import RecycleScreen from '../screens/recycle';
import NewsScreen from '../screens/news';
import SupportScreen from '../screens/support';
import WhetherScreen from '../screens/whether';
import InsuranceScreen from '../screens/insurance';
import EventsScreen from '../screens/events';
import CropSelectionScreen from '../screens/cropSelection';


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
  },
  HomeAdminScreen: {
    screen: HomeAdminScreen,
    navigationOptions: {
      drawerLockMode: 'locked-closed'
  }
  },
  PoweredScreen: {
    screen: PoweredScreen,
    navigationOptions: {
      drawerLockMode: 'locked-closed'
  }
  },
  NonPoweredScreen: {
    screen: NonPoweredScreen,
    navigationOptions: {
      drawerLockMode: 'locked-closed'
  }
  },
  FertilizersScreen: {
    screen: FertilizersScreen,
    navigationOptions: {
      drawerLockMode: 'locked-closed'
  }
  },
  SeedsScreen: {
    screen: SeedsScreen,
    navigationOptions: {
      drawerLockMode: 'locked-closed'
  }
  },
  RecycleScreen: {
    screen: RecycleScreen,
    navigationOptions: {
      drawerLockMode: 'locked-closed'
  }
  },
  NewsScreen: {
    screen: NewsScreen
  },
  SupportScreen: {
    screen: SupportScreen
  },
  WhetherScreen: {
    screen: WhetherScreen
  },
  InsuranceScreen: {
    screen: InsuranceScreen
  },
  EventsScreen: {
    screen: EventsScreen
  },
  CropSelectionScreen: {
    screen: CropSelectionScreen
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

