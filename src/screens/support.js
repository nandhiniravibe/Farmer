import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, ImageBackground, BackHandler, TouchableOpacity, TextInput, StyleSheet, Image, AsyncStorage } from 'react-native';
import { Card, CardItem, Text, Header, Container, Content, Button, Form, Item, Thumbnail, Input, Label, Icon, Left, Body, Right, Switch, Spinner, List, ListItem } from 'native-base';
import { STYLES } from '../styles/login';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

class SupportScreen extends Component {
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
      this.props.navigation.navigate("HomeFarmerScreen")
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
            <Text style={COMMONSTYLES.header}>SUPPORT</Text>
          </Body>
          <Right>
          <Button transparent onPress={() => this.props.navigation.navigate("HomeAdminScreen")}>
              <Icon name="plus" type="FontAwesome" style={COMMONSTYLES.sideMenuIcon} />
            </Button>
          </Right>
        </Header>
        <Content>

          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../assets/man.png')} />
              </Left>
              <Body>
                <Text>Contact 1</Text>
                <Text note>8940480184</Text>
              </Body>
              <Right>
              <Icon name="phone" type="FontAwesome" style={{color:'green'}}  />
              </Right>
            </ListItem>

            <ListItem avatar>
              <Left>
              <Thumbnail source={require('../assets/man.png')} />
              </Left>
              <Body>
                <Text>Contact 2</Text>
                <Text note>8940480184</Text>
              </Body>
              <Right>
              <Icon name="phone" type="FontAwesome" style={{color:'green'}}  />
              </Right>
            </ListItem>

            <ListItem avatar>
              <Left>
              <Thumbnail source={require('../assets/man.png')} />
              </Left>
              <Body>
                <Text>Contact 3</Text>
                <Text note>8940480184</Text>
              </Body>
              <Right>
              <Icon name="phone" type="FontAwesome" style={{color:'green'}}  />
              </Right>
            </ListItem>

            <ListItem avatar>
              <Left>
              <Thumbnail source={require('../assets/man.png')} />
              </Left>
              <Body>
                <Text>Contact 4</Text>
                <Text note>8940480184</Text>
              </Body>
              <Right>
              <Icon name="phone" type="FontAwesome" style={{color:'green'}}  />
              </Right>
            </ListItem>
          </List>
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

export default connect(mapStateToProps, mapDispatchToProps)(SupportScreen);
