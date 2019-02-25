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
import ProductsScreen from '../screens/products';
import AddEventsScreen from '../screens/addEvents';
import AddNewsScreen from '../screens/addNews';
import ProductDetailScreen from '../screens/productDetail';
import CropListScreen from '../screens/cropList';
import CropDetailScreen from '../screens/cropDetail';
import AddProductsScreen from '../screens/addProducts';
import DailyTipsScreen from '../screens/dailyTips';


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
},
  HomeVendorScreen: {
    screen: HomeVendorScreen,
  },
  HomeAdminScreen: {
    screen: HomeAdminScreen,
  },
  PoweredScreen: {
    screen: PoweredScreen,
  },
  NonPoweredScreen: {
    screen: NonPoweredScreen,
  },
  FertilizersScreen: {
    screen: FertilizersScreen,
  },
  SeedsScreen: {
    screen: SeedsScreen,
  },
  RecycleScreen: {
    screen: RecycleScreen,
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
  },
  ProductsScreen: {
    screen: ProductsScreen
  },
  AddEventsScreen: {
    screen: AddEventsScreen
  },
  AddNewsScreen: {
    screen: AddNewsScreen
  },
  ProductDetailScreen: {
    screen: ProductDetailScreen
  },
  CropListScreen: {
    screen: CropListScreen
  },
  CropDetailScreen: {
    screen: CropDetailScreen
  },
  AddProductsScreen: {
    screen: AddProductsScreen
  },
  DailyTipsScreen: {
    screen: DailyTipsScreen
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

