import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, ImageBackground, BackHandler, TouchableOpacity, TextInput, StyleSheet, Image, AsyncStorage } from 'react-native';
import { Card, CardItem, Text, Header, Container, Content, Button, Form, Item, Input, Label, Icon, Left, Body, Right, Spinner } from 'native-base';
import { STYLES } from '../styles/login';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';
import logoImage from './../assets/logo-home.png';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

class WorkersScreen extends Component {
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
    this.props.navigation.navigate('WorkCreatedScreen');
    return true;
  };

  render() {
    return (
      <Container>
        <Header style={COMMONSTYLES.headerBackgroundColor}>
          <Left style={{ flex: null }}>
            <Button transparent onPress={() => this.props.navigation.navigate("WorkCreatedScreen")}>
              <Icon name="angle-left" type="FontAwesome" style={COMMONSTYLES.sideMenuIcon} />
            </Button>
          </Left>
          <Body style={{marginLeft:110}}>
            <Text style={COMMONSTYLES.header}>WORKERS</Text>
          </Body>
        </Header>
        <Content>
          <Card style={{marginLeft :17, marginRight : 17}}>
            <CardItem header>
              <Text > Nandhini Ravi</Text>
            </CardItem>
            <CardItem>
              <Text>Contact : 89404890678</Text>
            </CardItem>
          </Card>
          <Card style={{marginLeft :17, marginRight : 17}}>
            <CardItem header>
              <Text > Durga</Text>
            </CardItem>
            <CardItem>
              <Text>Contact : 8956342312</Text>
            </CardItem>
          </Card>

          <Card style={{marginLeft :17, marginRight : 17}}>
            <CardItem header>
              <Text > Dharshini</Text>
            </CardItem>
            <CardItem>
              <Text>Contact : 9878767766</Text>
            </CardItem>
          </Card>
          <Card style={{marginLeft :17, marginRight : 17}}>
            <CardItem header>
              <Text > Santhosh</Text>
            </CardItem>
            <CardItem>
              <Text>Contact : 89404890678</Text>
            </CardItem>
          </Card>

          <Card style={{marginLeft :17, marginRight : 17}}>
            <CardItem header>
              <Text > Gaja</Text>
            </CardItem>
            <CardItem>
              <Text>Contact : 9865789089</Text>
            </CardItem>
          </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(WorkersScreen);
