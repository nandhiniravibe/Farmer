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
    const items = [
      { name: 'TURQUOISE', code: '#1abc9c' }, { name: 'EMERALD', code: '#2ecc71' },
      { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' },
      { name: 'WET ASPHALT', code: '#34495e' }, { name: 'GREEN SEA', code: '#16a085' }
    ];
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
          <Right>
          <Button transparent onPress={() => this.props.navigation.navigate("AddProductsScreen")}>
              <Icon name="plus" type="FontAwesome" style={COMMONSTYLES.sideMenuIcon} />
            </Button>
          </Right>
        </Header>
        <Content>
             <View style={styles.container}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("ProductDetailScreen")}>
              <Card style={styles.card}>
                <CardItem style={styles.cardItem}>
                  <Image
                    style={styles.icons}
                    source={require('../assets/tractor.png')}
                    resizeMode='stretch'
                  />
                  <Text style={{ fontSize: responsiveFontSize(1.7) }}>Powered equipments</Text>
                </CardItem>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity >
              <Card style={styles.card}>
                <CardItem style={styles.cardItem}>
                  <Image
                    style={styles.icons}
                    source={require('../assets/wheat.jpeg')}
                    resizeMode='stretch'
                  />
                  <Text style={{ fontSize: responsiveFontSize(1.7) }}>Powered equipments</Text>
                </CardItem>
              </Card>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <TouchableOpacity >
              <Card style={styles.card}>
                <CardItem style={styles.cardItem}>
                  <Image
                    style={styles.icons}
                    source={require('../assets/tractor.png')}
                    resizeMode='stretch'
                  />
                  <Text style={{ fontSize: responsiveFontSize(1.7) }}>Powered equipments</Text>
                </CardItem>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity >
              <Card style={styles.card}>
                <CardItem style={styles.cardItem}>
                  <Image
                    style={styles.icons}
                    source={require('../assets/wheat.jpeg')}
                    resizeMode='stretch'
                  />
                  <Text style={{ fontSize: responsiveFontSize(1.7) }}>Powered equipments</Text>
                </CardItem>
              </Card>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <TouchableOpacity >
              <Card style={styles.card}>
                <CardItem style={styles.cardItem}>
                  <Image
                    style={styles.icons}
                    source={require('../assets/tractor.png')}
                    resizeMode='stretch'
                  />
                  <Text style={{ fontSize: responsiveFontSize(1.7) }}>Powered equipments</Text>
                </CardItem>
              </Card>
            </TouchableOpacity>
            <TouchableOpacity >
              <Card style={styles.card}>
                <CardItem style={styles.cardItem}>
                  <Image
                    style={styles.icons}
                    source={require('../assets/wheat.jpeg')}
                    resizeMode='stretch'
                  />
                  <Text style={{ fontSize: responsiveFontSize(1.7) }}>Powered equipments</Text>
                </CardItem>
              </Card>
            </TouchableOpacity>
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
