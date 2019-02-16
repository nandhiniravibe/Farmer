import React, { Component } from 'react';
import { Image,StyleSheet,ImageBackground,AsyncStorage } from 'react-native';
import { Card,CardItem,Text } from 'native-base'
import { responsiveHeight, responsiveWidth,responsiveFontSize } from 'react-native-responsive-dimensions';
import logoImage from './../assets/logo-home.png';
import { STYLES } from '../styles/splash';


class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
        this.props.navigation.navigate('WelcomeScreen');
    }, 2000);
  }
  
  render() {
    return (
      <Card transparent style={STYLES.container}>
        <CardItem>
          <Image
            style={STYLES.logo}
            source={logoImage}
            resizeMode={'contain'}
          />
        </CardItem>
      </Card>
    )
  }
}

export default SplashScreen;