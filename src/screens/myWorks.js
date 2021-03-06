import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, ImageBackground, BackHandler, TouchableOpacity, TextInput, StyleSheet, Image, AsyncStorage } from 'react-native';
import { Card, CardItem, Text, Header, Container, Content, Button, Form, Item, Input, Label, Icon, Left, Body, Right, Spinner } from 'native-base';
import { STYLES } from '../styles/login';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';
import logoImage from './../assets/logo-home.png';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

class MyWorksScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id:0,
      showPassword: true,
      email: undefined,
      password: undefined,
    };
    this.onBackPress = this.onBackPress.bind(this);
  }

  componentWillMount() {
    this.update();
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  async update() {
    const user_id = await AsyncStorage.getItem('user_id');
    this.setState({
    user_id
    });
    };
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    this.props.navigation.navigate('DailyWorkScreen');
    return true;
  };

  render() {
    return (
      <Container>
        <Header style={COMMONSTYLES.headerBackgroundColor}>
          <Left style={{ flex: null }}>
            <Button transparent onPress={() => this.props.navigation.navigate("DailyWorkScreen")}>
              <Icon name="angle-left" type="FontAwesome" style={COMMONSTYLES.sideMenuIcon} />
            </Button>
          </Left>
          <Body style={{marginLeft:110}}>
            <Text style={COMMONSTYLES.header}>WORK POSTS</Text>
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
              onPress={() => this.props.navigation.navigate('WorkCreatedScreen')}
              >
                <Text>WORKS CREATED BY ME</Text>
              </Button>
              <Button block style={{ marginTop: 20, backgroundColor: '#2198F5' }} 
              onPress={() => this.props.navigation.navigate('WorkAppliedScreen')}
              >
                <Text>WORKS APPLIED BY ME</Text>
              </Button>
            </View>
          {/* <Card style={{marginLeft :17, marginRight : 17}}>
            <CardItem header>
              <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 25 }}> Nandhini Ravi</Text>
            </CardItem>
            <CardItem>
              <Text>Location : OOTY</Text>
            </CardItem>
            <CardItem>
              <Text>No of workers needed : 5 </Text>
            </CardItem>
            <CardItem>
              <Text> From : 03-03-2019</Text>
            </CardItem>
            <CardItem>
              <Text> To : 08-03-2019</Text>
            </CardItem>
            <CardItem>
              <Text> Timing : 10am to 6pm</Text>
            </CardItem>
            <CardItem>
              <Text> Wage per day : Rs.250</Text>
            </CardItem>
          </Card>

          <Card style={{marginLeft :17, marginRight : 17, marginTop:15}}>
            <CardItem header>
              <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 25 }}> Hari Haran</Text>
            </CardItem>
            <CardItem>
              <Text>Location : OOTY</Text>
            </CardItem>
            <CardItem>
              <Text>No of workers needed : 5 </Text>
            </CardItem>
            <CardItem>
              <Text> From : 03-03-2019</Text>
            </CardItem>
            <CardItem>
              <Text> To : 08-03-2019</Text>
            </CardItem>
            <CardItem>
              <Text> Timing : 10am to 6pm</Text>
            </CardItem>
            <CardItem>
              <Text> Wage per day : Rs.250</Text>
            </CardItem>
          </Card> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(MyWorksScreen);
