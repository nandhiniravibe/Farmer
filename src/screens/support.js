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
      user_id: 0
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
    this.props.navigation.navigate('HomeFarmerScreen');
    return true;
  };

  render() {
    return (
      <Container>
        <Header style={COMMONSTYLES.headerBackgroundColor}>
          <Left style={{ flex: null }}>
            <Button transparent onPress={() => this.props.navigation.navigate("HomeFarmerScreen")}>
              <Icon name="angle-left" type="FontAwesome" style={COMMONSTYLES.sideMenuIcon} />
            </Button>
          </Left>
          <Body style={STYLES.headerText}>
            <Text style={COMMONSTYLES.header}>SUPPORT</Text>
          </Body>
          {this.state.user_id == 1 ?
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate("HomeFarmerScreen")}>
              <Icon name="plus" type="FontAwesome" style={COMMONSTYLES.sideMenuIcon} />
            </Button>
          </Right> : null }
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
                <Icon name="phone" type="FontAwesome" style={{ color: 'green' }} />
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
                <Icon name="phone" type="FontAwesome" style={{ color: 'green' }} />
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
                <Icon name="phone" type="FontAwesome" style={{ color: 'green' }} />
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
                <Icon name="phone" type="FontAwesome" style={{ color: 'green' }} />
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
