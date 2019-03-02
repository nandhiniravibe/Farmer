import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, ImageBackground, BackHandler, TouchableOpacity, TextInput, StyleSheet, Image, AsyncStorage } from 'react-native';
import { Card, CardItem, Text, Header, Container, Content, Button, Form, Item, Input, Label, Icon, Left, Body, Spinner } from 'native-base';
import { STYLES } from '../styles/login';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

class LoginScreen extends Component {
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
    this.props.navigation.navigate('WelcomeScreen');
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
    if (email  && password ) {
      if(email ==3  && password == 3){
        const user_id =1
        AsyncStorage.setItem('user_id', user_id.toString());
      this.props.navigation.navigate("HomeFarmerScreen")
      }
      // else if(email ==2 && password ==2){
      //   const user_id =2
      //   AsyncStorage.setItem('user_id', user_id.toString());
      //   this.props.navigation.navigate("ProductsScreen")
      // }
      else if(email ==1 && password ==1){
        const user_id =0
        AsyncStorage.setItem('user_id', user_id.toString());
        this.props.navigation.navigate("HomeFarmerScreen")
      }
      else{
        alert("Invalid username or password")
      }
    } else {
      alert(' Please fill out all fields ')
    }
  }

  render() {
    return (
      <Container>
        <Header style={COMMONSTYLES.headerBackgroundColor}>
          <Left style={{ flex: null }}>
            <Button transparent onPress={() => this.props.navigation.navigate("WelcomeScreen")}>
              <Icon name="angle-left" type="FontAwesome" style={COMMONSTYLES.sideMenuIcon} />
            </Button>
          </Left>
          <Body style={STYLES.headerText}>
            <Text style={COMMONSTYLES.header}>SIGN IN</Text>
          </Body>
        </Header>
        <Content>
          <Card transparent style={STYLES.container}>
            <CardItem>
              <View>
                <Image
                  style={STYLES.logo}
                  source={require("./../assets/tractorIcon.png")}
                  resizeMode={'contain'}
                />
              </View>
            </CardItem>
          </Card>
          {this.state.showSpinner && <Spinner color='green' />}
          <View style={STYLES.inputContainer}>
            <Icon name="user" type="FontAwesome" style={STYLES.inlineIcons} />
            <TextInput
              style={{ flex: 1, height: responsiveHeight(7) }}
              placeholder="Phone number"
              keyboardType='numeric'
              underlineColorAndroid="transparent"
              onChangeText={this.handleChangeEmail}
            />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon name="unlock-alt" type="FontAwesome" style={STYLES.inlineIcons} />
            <TextInput
              style={{ flex: 1, height: responsiveHeight(7) }}
              placeholder="Password"
              underlineColorAndroid="transparent"
              secureTextEntry={this.state.showPassword}
              onChangeText={this.handleChangePassword}
            />
            <Icon name='eye' type="FontAwesome" style={COMMONSTYLES.passwordEye}
              onPress={() => this.setState({ showPassword: !this.state.showPassword })} />
          </View>
          <View style={STYLES.btnView}>
            <Button block success style={STYLES.btns} onPress={this.handleSubmitFarmer}>
              <Text>SIGN IN</Text>
            </Button>
            {/* <Button block success style={STYLES.btns} onPress={this.handleSubmitVendor}>
              <Text>SIGN IN AS VENDOR</Text>
            </Button>
            <Button block success style={STYLES.btns} onPress={this.handleSubmitFarmer}>
              <Text>SIGN IN AS ADMIN</Text>
            </Button> */}
            <Text style={STYLES.forgotPassword}
              onPress={() => this.props.navigation.navigate('ForgotScreen')}>
              Forgot Password ?
            </Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
