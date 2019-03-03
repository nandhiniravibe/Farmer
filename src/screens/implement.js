import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, ImageBackground, BackHandler, TouchableOpacity, TextInput, StyleSheet, Image, AsyncStorage } from 'react-native';
import { Card, CardItem, Text, Header, Container, Content, Button, Form, Item, Input, Label, Icon, Left, Right, Body, Spinner } from 'native-base';
import { STYLES } from '../styles/login';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

class ImplementsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id :0,
      implement:[]
      
    };
    this.onBackPress = this.onBackPress.bind(this);
  }
  componentWillMount() {
    AsyncStorage.getItem('implement').then((res)=>{
        const implement = JSON.parse(res)
        this.setState({ implement });
        this.update();
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
      })
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
  
      
    return (
      <Container>
        <Header style={COMMONSTYLES.headerBackgroundColor}>
          <Left style={{ flex: null }}>
            <Button transparent onPress={() => this.props.navigation.navigate("ProductsScreen")}>
              <Icon name="angle-left" type="FontAwesome" style={COMMONSTYLES.sideMenuIcon} />
            </Button>
          </Left>
          <Body style={{marginLeft : 30}}>
            <Text style={COMMONSTYLES.header}>IMPLEMENTS</Text>
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
            {this.state.implement.map(item => {
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

export default connect(mapStateToProps, mapDispatchToProps)(ImplementsScreen);
