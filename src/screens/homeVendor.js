import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View,ImageBackground,BackHandler,TouchableOpacity, TextInput, StyleSheet, Image, AsyncStorage } from 'react-native';
import { Card,CardItem,Text,Header,Container,Content,Button,Form,Item,Input,Label,Icon,Left,Body,Spinner} from 'native-base';
import { STYLES } from '../styles/login';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';
import { responsiveHeight,responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
// import { login,getAllChild } from '../actions';

class HomeVendorScreen extends Component {
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
    this.handleSubmit = this.handleSubmit.bind(this);
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
  handleSubmit() {
    const { email, password } = this.state;
    if (!email) return alert("Please enter Email");
    if (!password) return alert("Please enter Password");
    if (email == '9876543210' && password == '123456') {
        this.props.navigation.navigate("MyFamilyScreen")
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
            <Text style={COMMONSTYLES.header}>VENDOR</Text>
          </Body>
        </Header>
        <Content>
          
        </Content>
      </Container>
    )
  }
};


HomeVendorScreen.propTypes = {
  // login: PropTypes.func.isRequired,
  // getAllChild: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  // login,
  // getAllChild
}, dispatch);

const mapStateToProps = state => ({
  reducerObj: state.reducerObj
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeVendorScreen);
