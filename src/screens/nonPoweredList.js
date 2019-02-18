import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, ImageBackground, BackHandler, TouchableOpacity, TextInput, StyleSheet, Image, AsyncStorage } from 'react-native';
import { Card, CardItem, Text, Header, Container, Content, Button, Form, Item, Input, Label, Icon, Left, Body, Spinner } from 'native-base';
import { STYLES } from '../styles/login';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
// import { login,getAllChild } from '../actions';
import { FlatGrid } from 'react-native-super-grid';
import Grid from 'react-native-grid-component';

class NonPowered extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.onBackPress = this.onBackPress.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmitFarmer = this.handleSubmitFarmer.bind(this);
    this.handleSubmitVendor = this.handleSubmitVendor.bind(this);
  }
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    this.props.navigation.navigate('HomeFarmer');
    return true;
  };
  handleChangeEmail(e) {
    this.setState({ email: e });
  };
  handleChangePassword(e) {
    this.setState({ password: e });
  };

  handleSubmitFarmer() {
    const { email, password } = this.state;
    if (!email) return alert("Please enter Phone number");
    if (!password) return alert("Please enter Password");
    if (email == '1' && password == '1') {
      this.props.navigation.navigate("HomeFarmerScreen")
    } else {
      alert(' Please fill out all fields ')
    }
  }

  handleSubmitVendor() {
    const { email, password } = this.state;
    if (!email) return alert("Please enter Phone number");
    if (!password) return alert("Please enter Password");
    if (email == '9876543210' && password == '123456') {
      this.props.navigation.navigate("HomeVendorScreen")
    } else {
      alert(' Please fill out all fields ')
    }
  }

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
            <Button transparent onPress={() => this.props.navigation.navigate("WelcomeScreen")}>
              <Icon name="angle-left" type="FontAwesome" style={COMMONSTYLES.sideMenuIcon} />
            </Button>
          </Left>
          <Body style={STYLES.headerText}>
            <Text style={COMMONSTYLES.header}>NON-POWERED</Text>
          </Body>
        </Header>
        <Content>
        {/* <FlatGrid
        itemDimension={130}
        items={items}
        style={styles.gridView}
        renderItem={({ item, index }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemCode}>{item.code}</Text>
          </View>
        )}
      /> */}

    <Grid
        style={styles.list}
        renderItem={this._renderItem}
        renderPlaceholder={this._renderPlaceholder}
        data={['black', 'white', 'red', 'green', 'blue']}
        itemsPerRow={2}
      />
        </Content>
      </Container>
    )
  }
};


const mapDispatchToProps = dispatch => bindActionCreators({
  // login,
  // getAllChild
}, dispatch);

const mapStateToProps = state => ({
  reducerObj: state.reducerObj
});


export default connect(mapStateToProps, mapDispatchToProps)(NonPowered);
const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
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

  item: {
    flex: 1,
    height: 160,
    margin: 1
  },
  list: {
    flex: 1
  }
});