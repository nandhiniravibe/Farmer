import React, { Component } from 'react';
import { Image, View, ImageBackground, BackHandler } from 'react-native';
import { Card,CardItem,Text,Container,Content,Button } from 'native-base'
import logoImage from './../assets/logo-home.png';
import { STYLES } from '../styles/welcome';

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    BackHandler.exitApp();
  };


  render() {
    return (
      <Container>
        <Content>
          <ImageBackground source={require("./../assets/bg_new.jpg")}
            style={STYLES.backgroundImage}>
            <View style={STYLES.container}>
              <Text>Welcome To</Text>
              <Image
                style={STYLES.logo}
                source={logoImage}
                resizeMode={'contain'}
              />
            </View>
            <Text style={STYLES.text}>
              The Platform For Farmers
          </Text>
            <View style={STYLES.btnView}>

              <Button block style={{ backgroundColor: '#FD9801' }} onPress={() => this.props.navigation.navigate('RegistrationScreen')}>
                <Text>Sign Up</Text>
              </Button>
              <Button block style={{ marginTop: 20, backgroundColor: '#2198F5' }} onPress={() => this.props.navigation.navigate('LoginScreen')}>
                <Text>Sign In</Text>
              </Button>
            </View>
          </ImageBackground>
        </Content>
      </Container>
    )
  }
};
