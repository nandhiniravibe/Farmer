import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View,ImageBackground,BackHandler,TouchableOpacity, TextInput, StyleSheet, Image, AsyncStorage } from 'react-native';
import { Card,CardItem,Text,Header,Container,Content,Button,Form,Item,Input,Label,Icon,Left,Body,Spinner} from 'native-base';
import { STYLES } from '../styles/home';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';
import { responsiveHeight,responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

class ProductsScreen extends Component {
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
            <Text style={COMMONSTYLES.header}>PRODUCTS</Text>
          </Body>
        </Header>
        <Content>
        <View style={STYLES.btnView}>
        <Button block success style={STYLES.btns} onPress= {() => this.props.navigation.navigate("PoweredScreen")} >
              <Text>POWERED EQUIPMENTS</Text>
            </Button>
            <Button block success style={STYLES.btns} onPress= {() => this.props.navigation.navigate("NonPoweredScreen")}>
              <Text>NON-POWERED EQIPMENTS</Text>
            </Button>
            <Button block success style={STYLES.btns} onPress= {() => this.props.navigation.navigate("FertilizersScreen")}>
              <Text>FERTILIZERS</Text>
            </Button>
            <Button block success style={STYLES.btns} onPress= {() => this.props.navigation.navigate("SeedsScreen")}>
              <Text>SEEDS</Text>
            </Button>
            <Button block success style={{marginTop: 30, height: responsiveHeight(10)}} onPress= {() => this.props.navigation.navigate("SeedsScreen")}>
              <Text>MAINTANANCE / RECYCLE</Text>
            </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductsScreen);
