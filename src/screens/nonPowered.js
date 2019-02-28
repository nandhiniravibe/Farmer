import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, ImageBackground, BackHandler, TouchableOpacity, TextInput, StyleSheet, Image, AsyncStorage } from 'react-native';
import { Card, CardItem, Text, Header, Container, Content, Button, Form, Item, Input, Label, Icon, Left,Right, Body, Spinner } from 'native-base';
import { STYLES } from '../styles/login';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { FlatGrid } from 'react-native-super-grid';

class NonPowered extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      user_id :0  
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
    this.props.navigation.navigate('ProductsScreen');
    return true;
  };

  render() {
    const  items =[
      {
      name1 : 'Chisel Point Pick axe ',
      image1 :require('../assets/equip/equ1.png'),
      amount1: 120,
      name2: 'Billhook axe ',
      image2: require('../assets/equip/equ2.png'),
      amount2 : 800,
      },
      {
      name1 : 'Double Hoe',
      image1 :require('../assets/equip/equ3.png'),
      amount1: 280,
      name2: 'Adze Hoe',
      image2: require('../assets/equip/equ4.png'),
      amount2: 500,
      },
      {
      name1 : 'Digging Shovel ',
      image1 :require('../assets/equip/equ5.png'),
      amount1:130 ,
      name2: 'Trenching Shovel ',
      image2: require('../assets/equip/equ6.png'),
      amount2 : 1560,
      },
      {
      name1 : 'Digging Spade',
      image1 :require('../assets/equip/equ7.png'),
      amount1: 780,
      name2: 'Drain Spade',
      image2: require('../assets/equip/equ8.png'),
      amount2: 750,
      },
      {
      name1 : 'Solar Sprayer ',
      image1 :require('../assets/equip/equ9.png'),
      amount1 : 5000,
      name2: 'Power Sprayer ',
      image2: require('../assets/equip/equ10.png'),
      amount2 : 6000,
      },
      {
      name1 : 'Single Row Paddy Weeder',
      image1 :require('../assets/equip/equ11.png'),
      amount1: 5000,
      name2: 'Metal Red and Black Micro Sprinkler',
      image2: require('../assets/equip/equ13.png'),
      amount2: 1800,
      },
      {
      name1 : 'PS Ultra Spray Bodies Sprinkler ',
      image1 :require('../assets/equip/equ14.png'),
      amount1: 165,
      name2: 'Rain Bird Irrigation Rain Gun ',
      image2: require('../assets/equip/equ15.png'),
      amount2 : 4800
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
            <Text style={COMMONSTYLES.header}>NON-POWERED</Text>
          </Body>
          {this.state.user_id == 2 ?
          <Right>
          <Button transparent onPress={() => this.props.navigation.navigate("AddProductsScreen")}>
              <Icon name="plus" type="FontAwesome" style={COMMONSTYLES.sideMenuIcon} />
            </Button>
          </Right> : null
          }
        </Header>
        <Content>
        <View>
            {items.map(item => {
              return (
                <View style={styles.container}>
                  <TouchableOpacity onPress={() => 
                    this.props.navigation.navigate("ProductDetailScreen", {
                    name: item.name1,
                    image: item.image1,
                    amount: item.amount1,
                  })
                  }>
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
                  <TouchableOpacity onPress={() => 
                    this.props.navigation.navigate("ProductDetailScreen", {
                    name: item.name2,
                    image: item.image2,
                    amount: item.amount2,
                  })
                  }>
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


export default connect(mapStateToProps, mapDispatchToProps)(NonPowered);
