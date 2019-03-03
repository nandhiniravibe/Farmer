import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, ImageBackground, BackHandler, TouchableOpacity, TextInput, StyleSheet, Image, AsyncStorage } from 'react-native';
import { Card, CardItem, Text, Header, Container, Content, Button, Form, Item, Input, Label, Icon, Left, Body, Spinner } from 'native-base';
import { STYLES } from '../styles/login';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const poweredData = [
  
  {
    name1 : 'Mahindra YUVO 265 DI 32 HP ',
    image1 : require('../assets/tractor1.png'),
    amount1: 250000,
    name2: 'Mahindra YUVO 275 DI 35 HP ',
    image2: require('../assets/tractor2.png'),
    amount2 : 499000,
    },
    {
    name1 : 'Mahindra YUVO 415 DI 40 HP',
    image1 :require('../assets/tractor3.png'),
    amount1: 170000,
    name2: 'Mahindra YUVO 475 DI 42 HP',
    image2: require('../assets/tractor4.png'),
    amount2: 649000,
    },
    {
    name1 : 'Mahindra YUVO 575 DI 45 HP ',
    image1 :require('../assets/tractor5.png'),
    amount1: 649000,
    name2: 'Mahindra YUVO 575 DI 4WD 45 HP ',
    image2: require('../assets/tractor6.png'),
    amount2 : 695000,
    },
  ]

  const seedsData =[
    {
    name1 : 'Hybrid Maize  - MM 2255 ',
    image1 :require('../assets/seed1.png'),
    amount1: '750',
    name2: 'Research wheat MWR - 9009 ',
    image2: require('../assets/seed2.png'),
    amount2: '23',
    },
    {
    name1 : 'Hybrid Paddy – Super kalpana',
    image1 :require('../assets/seed3.png'),
    amount1: 16,
    name2: 'Hybrid Bajra - MB 1010',
    image2: require('../assets/seed4.png'),
    amount2: 200,
    },
    {
    name1 : 'Karishma Imported Coriander ',
    image1 :require('../assets/seed5.png'),
    amount1:260,
    name2: 'Nandini  Tomato',
    image2: require('../assets/seed6.png'),
    amount2 : 8400,
    },
    {
    name1 : 'Sundari Tomato',
    image1 :require('../assets/seed7.png'),
    amount1: 30,
    name2: 'Watermelon  - W 6060',
    image2: require('../assets/seed8.png'),
    amount2: 50,
    },
    {
    name1 : 'Hybrid watermelon -  W 6262 ',
    image1 :require('../assets/seed9.png'),
    amount1: 50,
    name2: 'Hot Pepper -  H 1050 ',
    image2: require('../assets/seed11.png'),
    amount2 : 59,
    },
    {
    name1 : 'Abhi Bottlegourd',
    image1 :require('../assets/seed12.png'),
    amount1: 85,
    name2: 'Suhas Bittergourd',
    image2: require('../assets/seed13.png'),
    amount2: 149,
    },
    {
    name1 : ' Hybrid Rice – MP 3020',
    image1 :require('../assets/seed14.png'),
    amount1: 1492,
    name2: 'Hybrid Rice – MP 3030 ',
    image2: require('../assets/seed15.png'),
    amount2 : 1010
    },
    {
    name1 : 'Research Rice - MPR 404',
    image1 :require('../assets/seed16.png'),
    amount1: 1100,
    name2: 'Research Rice – MPR 505',
    image2: require('../assets/seed17.png'),
    amount2: 2999
    }
    ]

    const implementData = [
      {
      name1 : 'Gyrovator ZLX ',
      image1 :require('../assets/implements1.png'),
      amount1: 51000,
      name2: 'Gyrovator SLX ',
      image2: require('../assets/implements2.png'),
      amount2 : 88000,
      },	
      {
      name1 : 'Laser Leveller',
      image1 :require('../assets/implements3.png'),
      amount1: 250000,
      name2: 'Rice Transplanter LV63A  (RidingType)',
      image2: require('../assets/implements4.png'),
      amount2: 200000,
      },
      {
      name1 : 'Rice Transplanter MP-46 ',
      image1 :require('../assets/implements5.png'),
      amount1: 190000,
      name2: 'Fertilizer Spreader ',
      image2: require('../assets/implements6.png'),
      amount2 : 100000,
      },
      {
      name1 : 'Sickle Sword ',
      image1 :require('../assets/implements7.png'),
      amount1: 58000,
      name2: 'Cane Thumper',
      image2: require('../assets/implements8.png'),
      amount2: 170000,
      },
      {
      name1 : 'Harvestor',
      image1 :require('../assets/implements9.png'),
      amount1: 50000,
      name2: 'Mulcher ',
      image2: require('../assets/implements10.png'),
      amount2 : 150000,
      },
      {
      name1 : 'Shredder ',
      image1 :require('../assets/implements11.png'),
      amount1: 100000,
      name2: 'Baler',
      image2: require('../assets/implements12.png'),
      amount2: 280000,
      },
      {
      name1 : '13 Foot Loader ',
      image1 :require('../assets/implements13.png'),
      amount1: 205000,
      name2: 'Wheel Type Combine Harvestor',
      image2: require('../assets/implements14.png'),
      amount2 : 700000,
      },
      ]

      const  fertilizersData=[
        {
        name1 : 'Jingo NXG ',
        image1 :require('../assets/ferti1.png'),
        amount1: 295,
        name2: 'Jingo ',
        image2: require('../assets/ferti2.png'),
        amount2 :285,
        },
        {
        name1 : 'Unnati Gold ',
        image1 :require('../assets/ferti3.png'),
        amount1: 480,
        name2: 'F1',
        image2: require('../assets/ferti4.png'),
        amount2: 400,
        },
        {
        name1 : 'Paton Super ',
        image1 :require('../assets/ferti5.png'),
        amount1:500 ,
        name2: 'Teevra TC',
        image2: require('../assets/ferti6.png'),
        amount2 : 485,
        },
        {
        name1 : 'Blue Dot ',
        image1 :require('../assets/ferti7.png'),
        amount1: 300,
        name2: 'Daroga',
        image2: require('../assets/ferti8.png'),
        amount2: 470,
        },
        {
        name1 : ' Solfert',
        image1 :require('../assets/ferti9.png'),
        amount1: 300,
        name2: 'Filanto ',
        image2: require('../assets/ferti10.png'),
        amount2 : 440,
        },
        {
        name1 : 'Solfert Water Soluble Fertilizer N P K 19:19:19',
        image1 :require('../assets/ferti11.png'),
        amount1: 500,
        name2: 'Solfert Water Soluble Fertilizer Sulphate of Potash',
        image2: require('../assets/ferti12.png'),
        amount2: 650,
        },
        ]

        const  nonPoweredData =[
          {
          name1 : 'Chisel Point Pick axe ',
          image1 :require('../assets/equ1.png'),
          amount1: 120,
          name2: 'Billhook axe ',
          image2: require('../assets/equ2.png'),
          amount2 : 800,
          },
          {
          name1 : 'Double Hoe',
          image1 :require('../assets/equ3.png'),
          amount1: 280,
          name2: 'Adze Hoe',
          image2: require('../assets/equ4.png'),
          amount2: 500,
          },
          {
          name1 : 'Digging Shovel ',
          image1 :require('../assets/equ5.png'),
          amount1:130 ,
          name2: 'Trenching Shovel ',
          image2: require('../assets/equ6.png'),
          amount2 : 1560,
          },
          {
          name1 : 'Digging Spade',
          image1 :require('../assets/equ7.png'),
          amount1: 780,
          name2: 'Drain Spade',
          image2: require('../assets/equ8.png'),
          amount2: 750,
          },
          {
          name1 : 'Solar Sprayer ',
          image1 :require('../assets/equ9.png'),
          amount1 : 5000,
          name2: 'Power Sprayer ',
          image2: require('../assets/equ10.png'),
          amount2 : 6000,
          },
          {
          name1 : 'Single Row Paddy Weeder',
          image1 :require('../assets/equ11.png'),
          amount1: 5000,
          name2: 'Metal Red and Black Micro Sprinkler',
          image2: require('../assets/equ13.png'),
          amount2: 1800,
          },
          {
          name1 : 'PS Ultra Spray Bodies Sprinkler ',
          image1 :require('../assets/equ14.png'),
          amount1: 165,
          name2: 'Rain Bird Irrigation Rain Gun ',
          image2: require('../assets/equ15.png'),
          amount2 : 4800
          }
          ]

class LoginScreen extends Component {
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
    this.props.navigation.navigate('WelcomeScreen');
    return true;
  };
  handleChangeEmail(e) {
    this.setState({ email: e });
  };
  handleChangePassword(e) {
    this.setState({ password: e });
  };

 async handleSubmitFarmer() {
    const { email, password } = this.state;
    if (!email) return alert("Please enter Phone number");
    if (!password) return alert("Please enter Password");
    if (email  && password ) {
      if(email ==3  && password == 3){
        const user_id =1
        AsyncStorage.setItem('user_id', user_id.toString());
      this.props.navigation.navigate("HomeFarmerScreen")
      }
      else {
        const user_id =0
        AsyncStorage.setItem('user_id', user_id.toString());
        this.props.navigation.navigate("HomeFarmerScreen")
      }
const powered = await AsyncStorage.getItem('powered')
const seeds = await AsyncStorage.getItem('seeds')
const implement = await AsyncStorage.getItem('implement')
const fertilizers = await AsyncStorage.getItem('fertilizers')
const nonPowered = await AsyncStorage.getItem('nonPowered')

  if(!powered)  AsyncStorage.setItem('powered',JSON.stringify(poweredData));
  if(!seeds)  AsyncStorage.setItem('seeds',JSON.stringify(seedsData));
  if(!implement)  AsyncStorage.setItem('implement',JSON.stringify(implementData));
  if(!fertilizers)  AsyncStorage.setItem('fertilizers',JSON.stringify(fertilizersData));
  if(!nonPowered)  AsyncStorage.setItem('nonPowered',JSON.stringify(nonPoweredData));
  

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
            <Text style={COMMONSTYLES.header}>SIGN IN</Text>
          </Body>
        </Header>
        <Content>
          <Card transparent style={STYLES.container}>
            <CardItem>
              <View>
                <Image
                  style={STYLES.logo}
                  source={require("./../assets/tractorIcon.png")}
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
              keyboardType='numeric'
              underlineColorAndroid="transparent"
              onChangeText={this.handleChangeEmail}
            />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon name="unlock-alt" type="FontAwesome" style={STYLES.inlineIcons} />
            <TextInput
              style={{ flex: 1, height: responsiveHeight(7) }}
              placeholder="Password"
              underlineColorAndroid="transparent"
              secureTextEntry={this.state.showPassword}
              onChangeText={this.handleChangePassword}
            />
            <Icon name='eye' type="FontAwesome" style={COMMONSTYLES.passwordEye}
              onPress={() => this.setState({ showPassword: !this.state.showPassword })} />
          </View>
          <View style={STYLES.btnView}>
            <Button block success style={STYLES.btns} onPress={this.handleSubmitFarmer}>
              <Text>SIGN IN</Text>
            </Button>
            {/* <Button block success style={STYLES.btns} onPress={this.handleSubmitVendor}>
              <Text>SIGN IN AS VENDOR</Text>
            </Button>
            <Button block success style={STYLES.btns} onPress={this.handleSubmitFarmer}>
              <Text>SIGN IN AS ADMIN</Text>
            </Button> */}
            <Text style={STYLES.forgotPassword}
              onPress={() => this.props.navigation.navigate('ForgotScreen')}>
              Forgot Password ?
            </Text>
          </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
