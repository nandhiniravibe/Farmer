import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, ImageBackground, BackHandler, TouchableOpacity, TextInput, StyleSheet, Image, AsyncStorage } from 'react-native';
import { Card, CardItem, Text, Header, Container, Content, Button, Form, Item, Input, Label, Icon, Left, Body,Right, Spinner } from 'native-base';
import { STYLES } from '../styles/login';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

class CropSelectionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: true,
      email: undefined,
      password: undefined,
    };
    this.onBackPress = this.onBackPress.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmitFarmer = this.handleSubmitFarmer.bind(this);
  }
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    this.props.navigation.navigate('HomeAdminScreen');
    return true;
  };
  handleChangeEmail(e) {
    this.setState({ email: e });
  };
  handleChangePassword(e) {
    this.setState({ password: e });
  };

  handleSubmitFarmer() {
    const { email, password } = this.state;
    if (!email) return alert("Please enter Phone number");
    if (!password) return alert("Please enter Password");
    if (email == '1' && password == '1') {
      this.props.navigation.navigate("HomeAdminScreen")
    } else {
      alert(' Please fill out all fields ')
    }
  }

  render() {
    return (
      <Container>
        <Header style={COMMONSTYLES.headerBackgroundColor}>
          <Left style={{ flex: null }}>
            <Button transparent onPress={() => this.props.navigation.navigate("HomeAdminScreen")}>
              <Icon name="angle-left" type="FontAwesome" style={COMMONSTYLES.sideMenuIcon} />
            </Button>
          </Left>
          <Body style={STYLES.headerText}>
            <Text style={COMMONSTYLES.header}>CROP SELECTION</Text>
          </Body>
          <Right>
          <Button transparent onPress={() => this.props.navigation.navigate("HomeAdminScreen")}>
              <Icon name="plus" type="FontAwesome" style={COMMONSTYLES.sideMenuIcon} />
            </Button>
          </Right>
        </Header>
        <Content>
          <Card>
            <CardItem header>
              <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 25 }}>FOOD CROPS :</Text>
            </CardItem>
            <Text style={{fontSize: 18}}>WHEAT :</Text>
            <Image
              source={require('../assets/tractor.png')}
              resizeMode='stretch'
              style={{ width: responsiveWidth(100), height: responsiveHeight(35) }} />
            <Text style={{fontSize: 18}}>MILLET :</Text>
            <Image
              source={require('../assets/tractor.png')}
              resizeMode='stretch'
              style={{ width: responsiveWidth(100), height: responsiveHeight(35) }} />
            <Text style={{fontSize: 18}}>BARLEY :</Text>
            <Image
              source={require('../assets/tractor.png')}
              resizeMode='stretch'
              style={{ width: responsiveWidth(100), height: responsiveHeight(35) }} />
            <Text style={{fontSize: 18}}>CORN :</Text>
            <Image
              source={require('../assets/tractor.png')}
              resizeMode='stretch'
              style={{ width: responsiveWidth(100), height: responsiveHeight(35) }} />
          </Card>
        </Content>
      </Container>
    )
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  // login,
  // getAllChild
}, dispatch);

const mapStateToProps = state => ({
  reducerObj: state.reducerObj
});

export default connect(mapStateToProps, mapDispatchToProps)(CropSelectionScreen);
