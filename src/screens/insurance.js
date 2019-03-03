import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Linking, ImageBackground, BackHandler, TouchableOpacity, TextInput, StyleSheet, Image, AsyncStorage } from 'react-native';
import { Card, CardItem, Text, Header, Container, Content, Button, Form, Item, Input, Label, Icon, Left, Body, Right, Spinner, List, ListItem, Thumbnail } from 'native-base';
import { STYLES } from '../styles/login';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

class InsuranceScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id :0,
      showPassword: true,
      email: undefined,
      password: undefined,
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
  openUrl1() {
    Linking.openURL("https://canarabank.com/media/1711/kisan-credit-card-scheme-revised-scheme.pdf")
}


  render() {
    const items =[
     { insurance :'KISAN CREDIT CARD SCHEME (KCCS)-REVISED SCHEME'},
    { insurance :'CROP LOANS'}
    ]
    return (
      <Container>
        <Header style={COMMONSTYLES.headerBackgroundColor}>
          <Left style={{ flex: null }}>
            <Button transparent onPress={() => this.props.navigation.navigate("HomeFarmerScreen")}>
              <Icon name="angle-left" type="FontAwesome" style={COMMONSTYLES.sideMenuIcon} />
            </Button>
          </Left>
          <Body style ={{marginLeft:100}}>
            <Text style={COMMONSTYLES.header}>INSURANCE/CREDIT</Text>
          </Body>
          {this.state.user_id == 1 ?
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate("HomeFarmerScreen")}>
              <Icon name="plus" type="FontAwesome" style={COMMONSTYLES.sideMenuIcon} />
            </Button>
          </Right> : null }
        </Header>
        <Content>
        
          <TouchableOpacity onPress={this.openUrl1.bind(this)}>
        <Card>
            <CardItem header>
              <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 22 }}>1.KISAN CREDIT CARD SCHEME (KCCS)-REVISED SCHEME </Text>
            </CardItem>
          </Card>
         </TouchableOpacity>

         <TouchableOpacity onPress={this.openUrl1.bind(this)}>
        <Card>
            <CardItem header>
              <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 22 }}>2. CROP LOANS</Text>
            </CardItem>
          </Card>
         </TouchableOpacity>

         <TouchableOpacity onPress={this.openUrl1.bind(this)}>
        <Card>
            <CardItem header>
              <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 22 }}>3. KISAN SUVIDHA SCHEME </Text>
            </CardItem>
          </Card>
         </TouchableOpacity>

         <TouchableOpacity onPress={this.openUrl1.bind(this)}>
        <Card>
            <CardItem header>
              <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 22 }}>4. KRISHI MITRA CARD SCHEME </Text>
            </CardItem>
          </Card>
         </TouchableOpacity>

         <TouchableOpacity onPress={this.openUrl1.bind(this)}>
        <Card>
            <CardItem header>
              <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 22 }}>5. KISAN TATKAL </Text>
            </CardItem>
          </Card>
         </TouchableOpacity>

         <TouchableOpacity onPress={this.openUrl1.bind(this)}>
        <Card>
            <CardItem header>
              <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 22 }}>6. DEVELOPMENT LOANS FOR PLANTATION/HORTICULTURE </Text>
            </CardItem>
          </Card>
         </TouchableOpacity>

         <TouchableOpacity onPress={this.openUrl1.bind(this)}>
        <Card>
            <CardItem header>
              <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 22 }}>7. FARM FORESTRY LOANS </Text>
            </CardItem>
          </Card>
         </TouchableOpacity>


         <TouchableOpacity onPress={this.openUrl1.bind(this)}>
        <Card>
            <CardItem header>
              <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 22 }}>8. DEVELOPMENT LOANS FOR FARM LEVEL STORAGE STRUCTURES </Text>
            </CardItem>
          </Card>
         </TouchableOpacity>

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

export default connect(mapStateToProps, mapDispatchToProps)(InsuranceScreen);
