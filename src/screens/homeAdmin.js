import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View,ImageBackground,BackHandler,TouchableOpacity, TextInput, StyleSheet, Image, AsyncStorage } from 'react-native';
import { Card,CardItem,Text,Header,Container,Content,Button,Form,Item,Input,Label,Icon,Left,Body,Spinner} from 'native-base';
import { STYLES } from '../styles/home';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';
import { responsiveHeight,responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { FlatGrid } from 'react-native-super-grid';

class HomeAdminScreen extends Component {
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
    this.props.navigation.navigate('LoginScreen');
    return true;
  };

  render() {
    const items = [
      {
        name: 'ASSISTANT',
        code: 'rgba(249, 197, 11, 0.72)',
        icon: "phone",
        routeName: "SupportScreen"
      },
      {
        name: 'NEWS',
        code: 'rgba(216, 27, 24, 0.78)',
        icon: "newspaper-o",
        routeName: "NewsScreen"
      },
      {
        name: 'EVENTS',
        code: 'rgba(105, 175, 75, 0.77)',
        icon: "calendar",
        routeName: "EventsScreen"
      },
      {
        name: 'CROP SELECTION',
        code: 'rgba(188, 44, 221, 0.73)',
        icon: "line-chart",
        routeName: "CropSelectionScreen"
      },
      {
        name: 'WETHER MONITORING',
        code: 'rgba(33, 160, 171, 0.75)',
        icon: "tv",
        routeName: "WhetherScreen"
      },
      {
        name: 'INSURANCE',
        code: 'rgba(40, 125, 215, 0.67)',
        icon: "book",
        routeName: "InsuranceScreen"
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
                <View style={[styles.itemContainer, { backgroundColor: item.code }]} >
                  <Icon size={150} name={item.icon} type="FontAwesome" style={{ color: '#fff' }}
                    onPress={() => this.props.navigation.navigate(item.routeName)} />
                  <Text style={styles.itemName}>{item.name}</Text>
                </View>
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
    height: responsiveHeight(25),
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
export default connect(mapStateToProps, mapDispatchToProps)(HomeAdminScreen);
