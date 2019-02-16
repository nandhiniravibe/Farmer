import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View,ImageBackground,BackHandler,TouchableOpacity, TextInput, StyleSheet, Image, AsyncStorage, Alert } from 'react-native';
import { Card,CardItem,Text,Header,Container,Content,Button,Form,Item,Input,Label,Icon,Left,Body,Spinner} from 'native-base';
import { STYLES } from '../styles/login';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';
import { responsiveHeight,responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
// import { login,getAllChild } from '../actions';

class ForgotScreen extends Component {
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
    if (email) {
        alert('Password reset link has been sent to your Mobile number')
    } else {
      alert('Please enter your Phone number')
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
            <Text style={COMMONSTYLES.header}>PASSWORD</Text>
          </Body>
        </Header>
        <Content>
          <Card transparent style={STYLES.container}>
            <CardItem>
              <Text style={{ fontSize: responsiveFontSize(2) }}>Forgot Password ?</Text>
            </CardItem>
            <CardItem>
              <View>
                <Image
                  style={STYLES.logo}
                  source={require("./../assets/logo-home.png")}
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
              underlineColorAndroid="transparent"
              keyboardType = 'numeric'
              onChangeText={this.handleChangeEmail}
            />
          </View>
          <View style={STYLES.btnView}>
            <Button block success style={STYLES.btns} onPress={this.handleSubmit}>
              <Text>SUBMIT</Text>
            </Button>
          </View>
          <Text style={STYLES.forgotPassword}
              onPress={() => this.props.navigation.navigate('LoginScreen')}>
              Go back
            </Text>
        </Content>
      </Container>
    )
  }
};


ForgotScreen.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ForgotScreen);
