import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Image,View,ImageBackground,BackHandler,TextInput,AsyncStorage} from 'react-native';
import PropTypes from 'prop-types';
import {Card,CardItem,Text,Container,Content,Button,Form,Item,Input,Label,Icon,Header,Left, Body,Picker,Spinner} from 'native-base'
import { STYLES } from '../styles/registration';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';
// import {userRegistration,login,getAllRelationships,} from '../actions';

class RegistrationScreen extends Component {
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
    // this.fetchDate();
  };

//   fetchDate() {
//     this.props.getAllRelationships();
//   }

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
            <CardItem>
              <Text style={{ fontSize: responsiveFontSize(2) }}>Welcome to</Text>
            </CardItem>
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
              style={{ flex: 1, height: responsiveHeight(6) }}
              placeholder="Name"
              underlineColorAndroid="transparent"
              onChangeText={this.handleChangeFirstname}
            />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon name="user" type="FontAwesome" style={STYLES.inlineIcons} />
            <TextInput
              style={{ flex: 1, height: responsiveHeight(6) }}
              placeholder="Phone number"
              keyboardType = 'numeric'
              underlineColorAndroid="transparent"
              onChangeText={this.handleChangeLastname}
            />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon name="envelope" type="FontAwesome" style={STYLES.inlineIconsEmail} />
            <TextInput
              style={{ flex: 1, height: responsiveHeight(6) }}
              placeholder="Email"
              underlineColorAndroid="transparent"
              onChangeText={this.handleChangeEmail}
              onBlur={(e) => { this.checkIsValidEmail() }}
            />
          </View>
          {this.state.showEmailErrorMsg && <View style={{ marginLeft: responsiveWidth(10) }}>
            <Text style={{ color: 'red', fontSize: responsiveFontSize(1.5) }}>Email Already Exits..!</Text>
          </View>}
          {this.state.showIncorrectEmailErrorMsg && <View style={{ marginLeft: responsiveWidth(10) }}>
            <Text style={{ color: 'red', fontSize: responsiveFontSize(1.5) }}>Please enter valid Email..!</Text>
          </View>}
          <View style={STYLES.inputContainer}>
            <Icon name="unlock-alt" type="FontAwesome" style={STYLES.inlineIcons} />
            <TextInput
              style={{ flex: 1, height: responsiveHeight(6) }}
              placeholder="Password"
              underlineColorAndroid="transparent"
              secureTextEntry={this.state.showPassword}
              onChangeText={this.handleChangePassword}
            />
            <Icon name='eye' type="FontAwesome" style={COMMONSTYLES.passwordEye}
              onPress={() => this.setState({ showPassword: !this.state.showPassword })} />
          </View>
          {this.state.showPasswordErrorMsg && <View style={{ marginLeft: responsiveWidth(10) }}>
            <Text style={{ color: 'red', fontSize: responsiveFontSize(1.5) }}>Enter a password of at least 5 characters</Text>
          </View>}
          <View style={STYLES.inputContainer1}>
            <Icon name="users" type="FontAwesome" style={STYLES.inlineIcons} />
            <Picker
              mode="dropdown"
              placeholder="Select Relationship"
              placeholderStyle={{ color: "black", }}
              placeholderIconColor="#007aff"
              style={{ width: undefined }}
              selectedValue={this.state.selectedRelationship}
              onValueChange={(e) => this.setState({ selectedRelationship: e })}            
            >
            <Item label="Vendor" value="key1" />
            <Item label="Farmer" value="key2" />
            </Picker>
          </View>
          <View style={STYLES.btnView}>
            <Button block success style={STYLES.btns} onPress={this.handleSubmit}>
              <Text>SIGN UP</Text>
            </Button>
            {/* <Button block success style={STYLES.btns1} onPress={this.handleSubmit}>
              <Text>SIGN UP AS VENDOR</Text>
            </Button> */}
          </View>
        </Content>
      </Container>
    )
  }
};

RegistrationScreen.propTypes = {
//   userRegistration: PropTypes.func.isRequired,
//   login: PropTypes.func.isRequired,
//   getAllRelationships: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
//   userRegistration,
//   getAllRelationships,
//   login
}, dispatch);

const mapStateToProps = state => ({
  reducerObj: state.reducerObj
});


export default connect(mapStateToProps, mapDispatchToProps)(RegistrationScreen);
