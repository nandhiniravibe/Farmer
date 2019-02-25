import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, ImageBackground, BackHandler, TouchableOpacity, TextInput, StyleSheet, Image, AsyncStorage } from 'react-native';
import { Card, CardItem, Text, Header, Container, Content, Button, Form, Item, Input, Label, Icon, Left, Body, Right, Spinner } from 'native-base';
import { STYLES } from '../styles/login';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

class NewsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: true,
      email: undefined,
      password: undefined,
    };
    this.onBackPress = this.onBackPress.bind(this);
  }
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
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
            <Text style={COMMONSTYLES.header}>NEWS</Text>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate("AddNewsScreen")}>
              <Icon name="plus" type="FontAwesome" style={COMMONSTYLES.sideMenuIcon} />
            </Button>
          </Right>
        </Header>
        <Content>
          <Card>
            <CardItem header>
              <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 25 }}>80% Maharashtra farmers eligible for PM
Kisan Samman scheme: Chandrakant
Patil(Feb 7,2019)</Text>
            </CardItem>
            <Image
              source={require('../assets/tractor.png')}
              resizeMode='stretch'
              style={{ width: responsiveWidth(100), height: responsiveHeight(60) }} />
            <CardItem>
              <Text>Maharashtra Revenue and Agriculture Minister Chandrakant Patil said the estimated number of
beneficiaries in the state is around 1.20 crore.

Eighty per cent farmers in Maharashtra are eligible for the Centre's Pradhan Mantri Kisan
Samman Nidhi scheme, a state minister said here on Thursday.

Maharashtra Revenue and Agriculture Minister Chandrakant Patil said the estimated number of
beneficiaries in the state is around 1.20 crore.

As per the Agriculture Census 2015-16, there are 1,52,85,439 farmers in Maharashtra, of whom
80 per cent would be eligible for the Centre's relief of Rs 6,000 per year; Patil told reporters
after a meeting with agriculture and revenue officials on the scheme.
</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 25 }}>BJP government dedicated to poor, farmers, tribals and women: Maharashtra CM Devendra Fadnavis(16 Feb,2019)</Text>
            </CardItem>
            <Image
              source={require('../assets/tractor.png')}
              resizeMode='stretch'
              style={{ width: responsiveWidth(100), height: responsiveHeight(60) }} />
            <CardItem>
              <Text>
                Nagpur: Maharashtra Chief Minister Devendra Fadnavis on Saturday said the BJP government was dedicated to the poor people, farmers, tribals and women. He also announced the formation of a special cell at the state secretariat for the development and welfare of various tribal communities.
  "This government is dedicated to the poor, farmers, tribals, Dalits and women. Prime Minister Narendra Modi has announced unique schemes for the farmers of the country. Nobody had ever been so concerned about farmers like this government," he said at a public rally at Pandharkawda in Yavatmal district of Maharashtra, attended by the PM.
  "Never in the past had such schemes been announced for the farmers in our country, wherein Rs 75,000 crore were spent to deposit Rs 6,000 in every farmer's bank account," Fadnavis said referring to the Pradhan Mantri Kisan Samman Nidhi scheme under which farmers cultivating up to two hectares will get direct cash support of Rs 6,000 annually.
  
 </Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 25 }}>Sun empowers Maharashtra farmers(Feb 6,2019)</Text>
            </CardItem>
            <Image
              source={require('../assets/tractor.png')}
              resizeMode='stretch'
              style={{ width: responsiveWidth(100), height: responsiveHeight(60) }} />
            <CardItem>
              <Text>
                Unable to stop providing free electricity to farmers for political reasons, some state governments in India have separated the electricity lines for farm work in an effort to control subsidies. Now the western state of Maharashtra has started powering these separate lines through solar PV, installed in sub-stations of the state government-owned distribution company (discom).
  The move has reduced power supply uncertainty to farmers – crucially, they don’t have to get out of bed at odd hours to switch on irrigation pumps. Given the falling cost of solar power and the fact that transmission and distribution (T&D) losses are minimised by producing the electricity locally, the discom has reduced its subsidy burden.
  Together, it is a bit of good news in a state notorious for the suicides of farmers unable to repay their loans, and now for being unable to make any profit for what they have produced because they have produced so much, especially sugarcane.
 </Text>
            </CardItem>

          </Card>

          <Card>
            <CardItem header>
              <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 25 }}>Centre's 'Pradhan Mantri Kisan Samman Nidhi' scheme to benefit 1.5 crore Maharashtra farmers(Feb 2,2019)
</Text>
            </CardItem>
            <Image
              source={require('../assets/tractor.png')}
              resizeMode='stretch'
              style={{ width: responsiveWidth(100), height: responsiveHeight(60) }} />
            <CardItem>
              <Text>
              Nearly 1.5 crore Maharashtra farmers owning up to two hectares of land are expected to benefit from the Pradhan Mantri Kisan Samman Nidhi announced in the Union budget Friday, a senior state agriculture department official said. Presenting the Interim Budget for 2019-20 in the Lok Sabha, Union Finance Minister Piyush Goyal Friday said farmers will be provided Rs 6,000 per year in three instalments under a scheme to be fully funded by the central government.
"Some 1.5 crore farmers have less than two hectares of land in the state. These farmers will get the benefit of the Pradhan Mantri Kisan Samman Nidhi which was announced in the (Union) Budget," the official said Saturday. However, farmers' groups were not impressed.
Ajit Navale, a farmer leader and state general secretary of the All India Kisan Sabha, questioned why a budgetary provision had not been made for increasing the income of farmers as well as a number of purchase centres.
 </Text>
            </CardItem>
          </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen);
