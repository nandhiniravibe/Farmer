import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, ImageBackground, BackHandler, TouchableOpacity, TextInput, StyleSheet, Image, AsyncStorage } from 'react-native';
import { Card, CardItem, Text, Header, Container, Content, Button, Form, Item, Input, Label, Icon, Left, Right, Body, Spinner } from 'native-base';
import { STYLES } from '../styles/login';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

class ProductDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.props.navigation.navigate('ProductsScreen');
    return true;
  };

  render() {
    const { name, image, amount } = this.props.navigation.state.params;
    return (
      <Container>
        <Header style={COMMONSTYLES.headerBackgroundColor}>
          <Left style={{ flex: null }}>
            <Button transparent onPress={() => this.props.navigation.navigate("ProductsScreen")}>
              <Icon name="angle-left" type="FontAwesome" style={COMMONSTYLES.sideMenuIcon} />
            </Button>
          </Left>
          <Body style={STYLES.headerText}>
            <Text style={COMMONSTYLES.header}>PRODUCTS</Text>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate("AddProductsScreen")}>
              <Icon name="plus" type="FontAwesome" style={COMMONSTYLES.sideMenuIcon} />
            </Button>
          </Right>
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Text Header style={{ fontWeight: 'bold' }}>
                {name}
              </Text>
            </CardItem>
            <Image
              source={image}
              resizeMode='stretch'
              style={{ width: responsiveWidth(100), height: responsiveHeight(50) }} />
            <CardItem>
              <Right>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                  {'$' + amount}
                </Text>
              </Right>
            </CardItem>
            <CardItem>
              <Text>
                hgfhgfh hjhkhj fydsiugf ksjyiudg sdygidyg ksygfiduyg jsyfiudyg sdjfgidygi ksjgfisg shgidsg sjgfids jsgfdg jhghj gdsfihdkf hsdskjlksjd lkjadj skdjlsjd
                  </Text>
            </CardItem>
            <CardItem>
              <Left>
              <Button warning onPress={() => this.props.navigation.navigate("AddProductsScreen")}>
             <Text>BUY</Text>
            </Button>
              </Left>
              <Body>
              <Button warning onPress={() => this.props.navigation.navigate("AddProductsScreen")}>
             <Text>RENT</Text>
            </Button>
              </Body>
              <Right>
              <Button success onPress={() => this.props.navigation.navigate("AddProductsScreen")}>
              <Icon name="shopping-cart" type="FontAwesome" style={COMMONSTYLES.sideMenuIcon} />
            </Button>
              </Right>    
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailScreen);
