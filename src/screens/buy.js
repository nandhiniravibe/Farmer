import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Image, View, ImageBackground, BackHandler, TextInput, AsyncStorage } from 'react-native';
import { Card, CardItem, Text, Container, Content, Button, Form, Item, Input, Label, Icon, Header, Left, Body, Picker, Spinner, Right } from 'native-base'
import { STYLES } from '../styles/registration';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';
// import RazorpayCheckout from 'react-native-razorpay';

class BuyScreen extends Component {
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
    this.props.navigation.navigate('WelcomeScreen');
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
      // this.props.navigation.navigate("LoginScreen")
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
            <Button transparent onPress={() => this.props.navigation.navigate("WelcomeScreen")}>
              <Icon name="angle-left" type="FontAwesome" style={COMMONSTYLES.sideMenuIcon} />
            </Button>
          </Left>
          <Body style={STYLES.headerText}>
            <Text style={COMMONSTYLES.header}>DELIVERY ADDRESS</Text>
          </Body>
        </Header>
        <Content>
          
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
                onChangeText={this.handleChangePhone}
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
            <View style={STYLES.inputContainer}>
              <Icon name="address-card" type="FontAwesome" style={STYLES.inlineIcons} />
              <TextInput
                style={{ flex: 1, height: responsiveHeight(6) }}
                placeholder="Delivery Address *"
                underlineColorAndroid="transparent"
                onChangeText={this.handleChangeAddress}
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
            {/* <Button block success style={{
                width: responsiveWidth(35),
                marginVertical: 10,
                borderRadius: 10,
                paddingVertical: 16,
                justifyContent: 'center',
                alignItem: 'center'
              }} onPress={() => {
                var options = {
                  description: 'Credits towards consultation',
                  image: 'https://i.imgur.com/3g7nmJC.png',
                  currency: 'INR',
                  key: 'rzp_test_0xtn4Dect7hTHa',
                  amount: '5000',
                  name: 'Agri Bezzie',
                  prefill: {
                    email: 'support@agribezzie.com',
                    contact: '7338704208',
                    name: 'Razorpay Software'
                  },
                  theme: { color: '#F37254' }
                }
                RazorpayCheckout.open(options).then((data) => {
                  this.setState({ transaction_id: data.razorpay_payment_id }, () => {
                    this.handlePayment()
                  });
                }).catch((error) => {
                  // handle failure
                  // alert(`Error: ${error.code} | ${error.description}`);
                });
              }}>
                <Text>Next</Text>
              </Button> */}
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
