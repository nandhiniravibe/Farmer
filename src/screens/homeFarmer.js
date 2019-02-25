import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View,ImageBackground,BackHandler,TouchableOpacity, TextInput, StyleSheet, Image, AsyncStorage } from 'react-native';
import { Card,CardItem,Text,Header,Container,Content,Button,Form,Item,Input,Label,Icon,Left,Body,Spinner} from 'native-base';
import { STYLES } from '../styles/home';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';
import { responsiveHeight,responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { FlatGrid } from 'react-native-super-grid';

class HomeFarmerScreen extends Component {
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
    this.props.navigation.navigate('WelcomeScreen');
    return true;
  };

  render() {
    const items = [

      {
        name: 'SHOP',
        code: 'rgba(249, 197, 11, 0.72)',
        icon: "shopping-cart",
        routeName: "ProductsScreen"
      },
      {
        name: 'CROPS',
        code: 'rgba(216, 27, 24, 0.78)',
        icon: "leaf",
        routeName: "CropListScreen"
      },

      {
        name: 'NEWS',
        code: 'rgba(105, 175, 75, 0.77)',
        icon: "newspaper-o",
        routeName: "NewsScreen"
      },
      {
        name: 'EVENTS',
        code: 'rgba(188, 44, 221, 0.73)',
        icon: "calendar",
        routeName: "EventsScreen"
      },
      {
        name: 'MARKET RATE',
        code: 'rgba(33, 160, 171, 0.75)',
        icon: "line-chart",
        routeName: "CropSelectionScreen"
      },
      {
        name: "TODAY'S WETHER",
        code: 'rgba(65, 44, 206, 0.74)',
        icon: "tv",
        routeName: "WhetherScreen"
      },
      {
        name: 'TIP OF THE DAY',
        code: 'rgba(40, 125, 215, 0.67)',
        icon: "phone",
        routeName: "DailyTipsScreen"
      },
      {
        name: 'INSURANCE',
        code: 'rgba(239, 140, 26, 0.74)',
        icon: "book",
        routeName: "InsuranceScreen"
      },
      {
        name: 'ASSISTANT',
        code: 'pink',
        icon: "phone",
        routeName: "SupportScreen"
      }
    ];
    return (
      <Container>
        <Header style={COMMONSTYLES.headerBackgroundColor}>
          <Left style={{ flex: null }}>
            <Button transparent onPress={() => this.props.navigation.navigate("WelcomeScreen")}>
              <Icon name="angle-left" type="FontAwesome" style={COMMONSTYLES.sideMenuIcon} />
            </Button>
          </Left>
          <Body style={STYLES.headerText}>
            <Text style={COMMONSTYLES.header}>HOME</Text>
          </Body>
        </Header>
        <Content>
             <FlatGrid
              itemDimension={100}
              items={items}
              style={styles.gridView}
              renderItem={({ item, index }) => (
                <TouchableOpacity onPress={() => this.props.navigation.navigate(item.routeName)}>
                <View style={[styles.itemContainer, { backgroundColor: item.code }]} >
                  <Icon size={150} name={item.icon} type="FontAwesome" style={{ color: '#fff' }} />
                  <Text style={styles.itemName}>{item.name}</Text>
                </View>
                </TouchableOpacity>
              )}
            />
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

const styles = StyleSheet.create({
  gridView: {
    marginTop: 100,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    padding: 10,
    height: responsiveHeight(20),
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeFarmerScreen);
