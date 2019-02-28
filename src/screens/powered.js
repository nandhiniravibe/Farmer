import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, ImageBackground, BackHandler, TouchableOpacity, TextInput, StyleSheet, Image, AsyncStorage } from 'react-native';
import { Card, CardItem, Text, Header, Container, Content, Button, Form, Item, Input, Label, Icon, Left, Right, Body, Spinner } from 'native-base';
import { STYLES } from '../styles/login';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

class Powered extends Component {
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
   const items = [
      {
      name1 : 'Gyrovator ZLX ',
      image1 :require('../assets/implements/implements1.png'),
      amount1: 51000,
      name2: 'Gyrovator SLX ',
      image2: require('../assets/implements/implements2.png'),
      amount2 : 88000,
      },	
      {
      name1 : 'Laser Leveller',
      image1 :require('../assets/implements/implements3.png'),
      amount1: 250000,
      name2: 'Rice Transplanter LV63A  (RidingType)',
      image2: require('../assets/implements/implements4.png'),
      amount2: 200000,
      },
      {
      name1 : 'Rice Transplanter MP-46 ',
      image1 :require('../assets/implements/implements5.png'),
      amount1: 190000,
      name2: 'Fertilizer Spreader ',
      image2: require('../assets/implements/implements6.png'),
      amount2 : 100000,
      },
      {
      name1 : 'Sickle Sword ',
      image1 :require('../assets/implements/implements7.png'),
      amount1: 58000,
      name2: 'Cane Thumper',
      image2: require('../assets/implements/implements8.png'),
      amount2: 170000,
      },
      {
      name1 : 'Harvestor',
      image1 :require('../assets/implements/implements9.png'),
      amount1: 50000,
      name2: 'Mulcher ',
      image2: require('../assets/implements/implements10.png'),
      amount2 : 150000,
      },
      {
      name1 : 'Shredder ',
      image1 :require('../assets/implements/implements11.png'),
      amount1: 100000,
      name2: 'Baler',
      image2: require('../assets/implements/implements12.png'),
      amount2: 280000,
      },
      {
      name1 : '13 Foot Loader ',
      image1 :require('../assets/implements/implements13.png'),
      amount1: 205000,
      name2: 'Wheel Type Combine Harvestor',
      image2: require('../assets/implements/implements14.png'),
      amount2 : 700000,
      },
      {
        name1 : 'Mahindra YUVO 265 DI 32 HP ',
        image1 : require('../assets/tractor/tractor1.png'),
        amount1: 250000,
        name2: 'Mahindra YUVO 275 DI 35 HP ',
        image2: require('../assets/tractor/tractor2.png'),
        amount2 : 499000,
        },
        {
        name1 : 'Mahindra YUVO 415 DI 40 HP',
        image1 :require('../assets/tractor/tractor3.png'),
        amount1: 170000,
        name2: 'Mahindra YUVO 475 DI 42 HP',
        image2: require('../assets/tractor/tractor4.png'),
        amount2: 649000,
        },
        {
        name1 : 'Mahindra YUVO 575 DI 45 HP ',
        image1 :require('../assets/tractor/tractor5.png'),
        amount1: 649000,
        name2: 'Mahindra YUVO 575 DI 4WD 45 HP ',
        image2: require('../assets/tractor/tractor6.png'),
        amount2 : 695000,
        },
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
            <Text style={COMMONSTYLES.header}>POWERED EQUIPMENTS</Text>
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
                  <TouchableOpacity 
                  onPress={() => 
                    this.props.navigation.navigate("ProductDetailScreen", {
                    name: item.name1,
                    image: item.image1,
                    amount: item.amount1,
                  })
                  }
                  >
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
                  </TouchableOpacity >
                  <TouchableOpacity onPress={() => 
                    this.props.navigation.navigate("ProductDetailScreen", {
                    name: item.name2,
                    image: item.image2,
                    amount: item.amount2,
                  })
                  }
                  >
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

export default connect(mapStateToProps, mapDispatchToProps)(Powered);
