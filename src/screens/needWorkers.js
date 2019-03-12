import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Image, View, ImageBackground, BackHandler, TextInput, AsyncStorage } from 'react-native';
import { Card, CardItem, Text, Container, Content, Button, Form, Item, Input, Label, Icon, Header, Left, Body, Picker, Spinner, Right } from 'native-base'
import { STYLES } from '../styles/registration';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';
// import RazorpayCheckout from 'react-native-razorpay';

class NeedWorkersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: true
    };
    this.onBackPress = this.onBackPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFirstname = this.handleChangeFirstname.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeState = this.handleChangeState.bind(this);
    this.handleChangePin = this.handleChangePin.bind(this);
  }
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  };

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  };

  onBackPress = () => {
    this.props.navigation.navigate('DailyWorkScreen');
    return true;
  };

  handleChangeFirstname(e) {
    this.setState({ fname: e })
  };

  handleChangePhone(e) {
    this.setState({ phone: e })
  };

  handleChangeEmail(e) {
    this.setState({ email: e });
  };

  handleChangeAddress(e) {
    this.setState({ address: e });
  };

  handleChangeCity(e) {
    this.setState({ city: e });
  };

  handleChangeState(e) {
    this.setState({ state: e });
  };

  handleChangePin(e) {
    this.setState({ pin: e });
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
    const { fname, phone, email, password, address, city, state, pin } = this.state;
    if (!fname) return alert("Please enter Name");
    if (!phone) return alert("Please enter Phone number")
    if (!address) return alert("Please enter Address")
    if (!city) return alert("Please enter City")
    if (!state) return alert("Please enter State")
    if (!pin) return alert("Please enter Pin")

    // if (showIncorrectEmailErrorMsg) return alert("Please enter valid Email");
    if (fname && phone && address && city && state && pin) {
      this.setState({ showSpinner: false });
      alert('Created Successfully !!!')
      this.props.navigation.navigate("WorkCreatedScreen")
    } else {
      alert(' Please fill out all fields');
      this.setState({ showSpinner: false });
    }
  };

  handlePayment (){
    this.props.navigation.navigate("LoginScreen");
  }

  render() {
    return (
      <Container>
        <Header style={COMMONSTYLES.headerBackgroundColor}>
          <Left style={{ flex: null }}>
            <Button transparent onPress={() => this.props.navigation.navigate("DailyWorkScreen")}>
              <Icon name="angle-left" type="FontAwesome" style={COMMONSTYLES.sideMenuIcon} />
            </Button>
          </Left>
          <Body style={STYLES.headerText}>
            <Text style={COMMONSTYLES.header}>NEED WORKERS ?</Text>
          </Body>
        </Header>
        <Content>
          <View style ={{marginTop: 50}}>
            <View style={STYLES.inputContainer}>
              <Icon name="map-marker" type="FontAwesome" style={STYLES.inlineIcons} />
              <TextInput
                style={{ flex: 1, height: responsiveHeight(6) }}
                placeholder="Location *"
                underlineColorAndroid="transparent"
                onChangeText={this.handleChangeFirstname}
              />
            </View>
            <View style={STYLES.inputContainer}>
              <Icon name="user" type="FontAwesome" style={STYLES.inlineIcons} />
              <TextInput
                style={{ flex: 1, height: responsiveHeight(6) }}
                placeholder="No.of workers needed *"
                keyboardType='numeric'
                underlineColorAndroid="transparent"
                onChangeText={this.handleChangePhone}
              />
            </View>
            <View style={STYLES.inputContainer}>
              <Icon name="calendar" type="FontAwesome" style={STYLES.inlineIcons} />
              <TextInput
                style={{ flex: 1, height: responsiveHeight(6) }}
                placeholder="From date *"
                underlineColorAndroid="transparent"
                onChangeText={this.handleChangeEmail}
                onBlur={(e) => { this.checkIsValidEmail() }}
              />
            </View>
            <View style={STYLES.inputContainer}>
              <Icon name="calendar" type="FontAwesome" style={STYLES.inlineIcons} />
              <TextInput
                style={{ flex: 1, height: responsiveHeight(6) }}
                placeholder="To Date *"
                underlineColorAndroid="transparent"
                onChangeText={this.handleChangeAddress}
                onBlur={(e) => { this.checkIsValidEmail() }}
              />
            </View>
            <View style={STYLES.inputContainer}>
              <Icon name="suitcse" type="FontAwesome" style={STYLES.inlineIcons} />
              <TextInput
                style={{ flex: 1, height: responsiveHeight(6) }}
                placeholder="Type of work *"
                underlineColorAndroid="transparent"
                onChangeText={this.handleChangeCity}
                onBlur={(e) => { this.checkIsValidEmail() }}
              />
            </View>

            <View style={STYLES.inputContainer}>
              <Icon name="money" type="FontAwesome" style={STYLES.inlineIcons} />
              <TextInput
                style={{ flex: 1, height: responsiveHeight(6) }}
                placeholder="Wage per day *"
                underlineColorAndroid="transparent"
                onChangeText={this.handleChangeState}
                onBlur={(e) => { this.checkIsValidEmail() }}
              />
            </View>

            <View style={STYLES.inputContainer}>
              <Icon name="clock-o" type="FontAwesome" style={STYLES.inlineIcons} />
              <TextInput
                style={{ flex: 1, height: responsiveHeight(6) }}
                placeholder="Timing *"
                keyboardType='numeric'
                underlineColorAndroid="transparent"
                onChangeText={this.handleChangePin}
              />
            </View>

            <View style={STYLES.btnView}>
            <Button block success style={STYLES.btns} onPress={this.handleSubmit} style={{marginBottom: 20}}>
              <Text>Create</Text>
            </Button>
          </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(NeedWorkersScreen);
