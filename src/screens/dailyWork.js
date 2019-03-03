import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, ImageBackground, BackHandler, TouchableOpacity, TextInput, StyleSheet, Image, AsyncStorage } from 'react-native';
import { Card, CardItem, Text, Header, Container, Content, Button, Form, Item, Input, Label, Icon, Left, Body, Spinner } from 'native-base';
import { STYLES } from '../styles/home';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';
import logoImage from './../assets/logo-home.png';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

class DailyWorkScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.onBackPress = this.onBackPress.bind(this);
  }
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    this.props.navigation.navigate('HomeFarmerScreen');
    return true;
  };

  render() {
    return (
      <Container>
        <Header style={COMMONSTYLES.headerBackgroundColor}>
          <Left style={{ flex: null }}>
            <Button transparent onPress={() => this.props.navigation.navigate("HomeFarmerScreen")}>
              <Icon name="angle-left" type="FontAwesome" style={COMMONSTYLES.sideMenuIcon} />
            </Button>
          </Left>
          <Body style={STYLES.headerText}>
            <Text style={COMMONSTYLES.header}>DAILY WORKS</Text>
          </Body>
        </Header>
        <Content>
          
            <View style={STYLES.container}>
              <Image
                style={STYLES.logo}
                source={logoImage}
                resizeMode={'contain'}
              />
            </View>

            <View style={STYLES.btnView}>

              <Button block style={{ backgroundColor: '#2198F5' }} 
              onPress={() => this.props.navigation.navigate('NeedWorkersScreen')}
              >
                <Text>NEED WORKERS ?</Text>
              </Button>
              <Button block style={{ marginTop: 20, backgroundColor: '#2198F5' }} 
              onPress={() => this.props.navigation.navigate('ApplyForAWorkScreen')}
              >
                <Text>LIKE TO WORK ?</Text>
              </Button>
              <Button block style={{ marginTop: 20, backgroundColor: '#2198F5' }} 
              onPress={() => this.props.navigation.navigate('MyWorksScreen')}
              >
                <Text>MY WORK POSTS</Text>
              </Button>
            </View>
        </Content>
      </Container>
    )
  }
};


const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

const mapStateToProps = state => ({
  reducerObj: state.reducerObj
});

export default connect(mapStateToProps, mapDispatchToProps)(DailyWorkScreen);
