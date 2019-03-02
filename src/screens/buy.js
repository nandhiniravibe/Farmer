import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Image, View, ImageBackground, BackHandler, TextInput, AsyncStorage } from 'react-native';
import { Card, CardItem, Text, Container, Content, Button, Form, Item, Input, Label, Icon, Header, Left, Body, Picker, Spinner, Right } from 'native-base'
import { STYLES } from '../styles/registration';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';

class BuyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: true
    };
    this.onBackPress = this.onBackPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFirstname = this.handleChangeFirstname.bind(this);
    this.handleChangeLastname = this.handleChangeLastname.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  };

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  };

  onBackPress = () => {
    this.props.navigation.navigate('WelcomeScreen');
    return true;
  };

  handleChangeFirstname(e) {
    this.setState({ fname: e })
  };

  handleChangeLastname(e) {
    this.setState({ lname: e })
  };

  handleChangeEmail(e) {
    this.setState({ email: e });
  };

  checkIsEmailUnique() {
    const where = `email = '${this.state.email}'`;
    const queryParams = {
      where
    };
    this.props.login(queryParams).then(res => {
      const { value: { success, data } } = res;
      if (success && (data && data.length > 0)) {
        return this.setState({ showEmailErrorMsg: true });
      } else {
        this.setState({
          email: this.state.email,
          showEmailErrorMsg: false,
        })
      }
    })
  };

  handleChangePassword(e) {
    if (e && e.length >= 5) {
      return this.setState({ password: e, showPasswordErrorMsg: false, validPassword: true })
    } else {
      this.setState({ showPasswordErrorMsg: true });
    }
  };

  checkIsValidEmail() {
    const email = this.state.email;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) return this.setState({ showIncorrectEmailErrorMsg: true });
    this.setState({ email, showIncorrectEmailErrorMsg: false })
  };

  handleSubmit() {
    const { fname, lname, email, password, showPasswordErrorMsg, showIncorrectEmailErrorMsg, showEmailErrorMsg, selectedRelationship } = this.state;
    if (!fname) return alert("Please enter Name");
    if (!lname) return alert("Please enter Phone number")
    if (!password) return alert("Please enter Password");

    // if (showIncorrectEmailErrorMsg) return alert("Please enter valid Email");
    if (fname && lname && password) {
      this.setState({ showSpinner: false });
      this.props.navigation.navigate("LoginScreen")
    } else {
      alert(' Please fill out all fields');
      this.setState({ showSpinner: false });
    }
  };

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
            <Text style={COMMONSTYLES.header}>SIGN UP</Text>
          </Body>
        </Header>
        <Content>
          <Card transparent style={STYLES.container}>
          </Card>
          <CardItem>
            <View style={STYLES.inputContainer}>
              <Icon name="user" type="FontAwesome" style={STYLES.inlineIcons} />
              <TextInput
                style={{ flex: 1, height: responsiveHeight(6) }}
                placeholder="Name *"
                underlineColorAndroid="transparent"
                onChangeText={this.handleChangeFirstname}
              />
            </View>
            <View style={STYLES.inputContainer}>
              <Icon name="phone" type="FontAwesome" style={STYLES.inlineIcons} />
              <TextInput
                style={{ flex: 1, height: responsiveHeight(6) }}
                placeholder="Phone number *"
                keyboardType='numeric'
                underlineColorAndroid="transparent"
                onChangeText={this.handleChangeLastname}
              />
            </View>
            <View style={STYLES.inputContainer}>
              <Icon name="envelope" type="FontAwesome" style={STYLES.inlineIcons} />
              <TextInput
                style={{ flex: 1, height: responsiveHeight(6) }}
                placeholder="Email"
                underlineColorAndroid="transparent"
                onChangeText={this.handleChangeEmail}
                onBlur={(e) => { this.checkIsValidEmail() }}
              />
            </View>
          </CardItem>

          <CardItem>
            <View style={STYLES.inputContainer}>
              <Icon name="address-card" type="FontAwesome" style={STYLES.inlineIcons} />
              <TextInput
                style={{ flex: 1, height: responsiveHeight(6) }}
                placeholder="House/Street *"
                underlineColorAndroid="transparent"
                onChangeText={this.handleChangeHouse}
                onBlur={(e) => { this.checkIsValidEmail() }}
              />
            </View>
            <View style={STYLES.inputContainer}>
              <Icon name="map-marker" type="FontAwesome" style={STYLES.inlineIcons} />
              <TextInput
                style={{ flex: 1, height: responsiveHeight(6) }}
                placeholder="City *"
                underlineColorAndroid="transparent"
                onChangeText={this.handleChangeCity}
                onBlur={(e) => { this.checkIsValidEmail() }}
              />
            </View>

            <View style={STYLES.inputContainer}>
              <Icon name="map-pin" type="FontAwesome" style={STYLES.inlineIcons} />
              <TextInput
                style={{ flex: 1, height: responsiveHeight(6) }}
                placeholder="State *"
                underlineColorAndroid="transparent"
                onChangeText={this.handleChangeState}
                onBlur={(e) => { this.checkIsValidEmail() }}
              />
            </View>

            <View style={STYLES.inputContainer}>
              <Icon name="thumb-tack" type="FontAwesome" style={STYLES.inlineIcons} />
              <TextInput
                style={{ flex: 1, height: responsiveHeight(6) }}
                placeholder="Pin code *"
                keyboardType='numeric'
                underlineColorAndroid="transparent"
                onChangeText={this.handleChangePin}
              />
            </View>
          </CardItem>
          <View style={STYLES.btnView}>
            <Button block success style={STYLES.btns} 
            // onPress={this.handleSubmit} style={{ marginBottom: 20 }}
            >
              <Text>Next</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(BuyScreen);
