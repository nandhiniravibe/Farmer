import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, ImageBackground, BackHandler, TouchableOpacity, TextInput, StyleSheet, Image, AsyncStorage } from 'react-native';
import { Card, CardItem, Text, Header, Container, Content, Button, Form, Item, Input, Label, Icon, Left,Right,  Body, Spinner } from 'native-base';
import { STYLES } from '../styles/login';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

class SeedsScreen extends Component {
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
   const items =[
      {
      name1 : 'Hybrid Maize  - MM 2255 ',
      image1 :require('../assets/seeds/seed1.png'),
      amount1: '750',
      name2: 'Research wheat MWR - 9009 ',
      image2: require('../assets/seeds/seed2.png'),
      amount2: '23',
      },
      {
      name1 : 'Hybrid Paddy – Super kalpana',
      image1 :require('../assets/seeds/seed3.png'),
      amount1: 16,
      name2: 'Hybrid Bajra - MB 1010',
      image2: require('../assets/seeds/seed4.png'),
      amount2: 200,
      },
      {
      name1 : 'Karishma Imported Coriander ',
      image1 :require('../assets/seeds/seed5.png'),
      amount1:260,
      name2: 'Nandini  Tomato',
      image2: require('../assets/seeds/seed6.png'),
      amount2 : 8400,
      },
      {
      name1 : 'Sundari Tomato',
      image1 :require('../assets/seeds/seed7.png'),
      amount1: 30,
      name2: 'Watermelon  - W 6060',
      image2: require('../assets/seeds/seed8.png'),
      amount2: 50,
      },
      {
      name1 : 'Hybrid watermelon -  W 6262 ',
      image1 :require('../assets/seeds/seed9.png'),
      amount1: 50,
      name2: 'Hot Pepper -  H 1050 ',
      image2: require('../assets/seeds/seed11.png'),
      amount2 : 59,
      },
      {
      name1 : 'Abhi Bottlegourd',
      image1 :require('../assets/seeds/seed12.png'),
      amount1: 85,
      name2: 'Suhas Bittergourd',
      image2: require('../assets/seeds/seed13.png'),
      amount2: 149,
      },
      {
      name1 : ' Hybrid Rice – MP 3020',
      image1 :require('../assets/seeds/seed14.png'),
      amount1: 1492,
      name2: 'Hybrid Rice – MP 3030 ',
      image2: require('../assets/seeds/seed15.png'),
      amount2 : 1010
      },
      {
      name1 : 'Research Rice - MPR 404',
      image1 :require('../assets/seeds/seed16.png'),
      amount1: 1100,
      name2: 'Research Rice – MPR 505',
      image2: require('../assets/seeds/seed17.png'),
      amount2: 2999
      }
      ]
    return (
      <Container>
        <Header style={COMMONSTYLES.headerBackgroundColor}>
          <Left style={{ flex: null }}>
            <Button transparent onPress={() => this.props.navigation.navigate("ProductsScreen")}>
              <Icon name="angle-left" type="FontAwesome" style={COMMONSTYLES.sideMenuIcon} />
            </Button>
          </Left>
          <Body style={STYLES.headerText}>
            <Text style={COMMONSTYLES.header}>SEEDS</Text>
          </Body>
          <Right>
          <Button transparent onPress={() => this.props.navigation.navigate("AddProductsScreen")}>
              <Icon name="plus" type="FontAwesome" style={COMMONSTYLES.sideMenuIcon} />
            </Button>
          </Right>
        </Header>
        <Content>
        <View>
            {items.map(item => {
              return (
                <View style={styles.container}>
                  <TouchableOpacity onPress ={this.props.navigation.navigate("ProductDetailScreen")}>
                    <Card style={styles.card}>
                      <CardItem style={styles.cardItem}>
                        <Image
                          style={styles.icons}
                          source={item.image1}
                          resizeMode='stretch'
                        />
                        <Text style={{ fontSize: responsiveFontSize(1.7) }}>{item.name1}</Text>
                      </CardItem>
                    </Card>
                  </TouchableOpacity>
                  <TouchableOpacity onPress ={this.props.navigation.navigate("ProductDetailScreen")}>
                    <Card style={styles.card}>
                      <CardItem style={styles.cardItem}>
                        <Image
                          style={styles.icons}
                          source={item.image2}
                          resizeMode='stretch'
                        />
                        <Text style={{ fontSize: responsiveFontSize(1.7) }}>{item.name2}</Text>
                      </CardItem>
                    </Card>
                  </TouchableOpacity>
                </View>
              )
            })}
          </View>
        </Content>
      </Container>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(94),
    alignSelf: 'center',
    marginTop: responsiveHeight(2)
},
card: { width: responsiveWidth(45), height: responsiveHeight(28) },
cardItem: { alignItems: 'center', alignSelf: 'center', flex: 1, flexDirection: 'column' },
icons: {
    height: responsiveHeight(20),
    width: responsiveWidth(35),
},
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

const mapStateToProps = state => ({
  reducerObj: state.reducerObj
});

export default connect(mapStateToProps, mapDispatchToProps)(SeedsScreen);
