import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, ImageBackground, BackHandler, TouchableOpacity, TextInput, StyleSheet, Image, AsyncStorage } from 'react-native';
import { Card, CardItem, Text, Header, Container, Content, Button, Form, Item, Input, Label, Icon, Left, Body, Spinner } from 'native-base';
import { STYLES } from '../styles/login';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

class LoginScreen extends Component {
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
                        <Text style={COMMONSTYLES.header}>DAILY TIPS</Text>
                    </Body>
                </Header>
                <Content>
                    <Card style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <CardItem header>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'green' }}>Tip of the Day !!!</Text>
                        </CardItem>
                        <CardItem header>
                            <Text style={{ fontSize: 20 }}>Beneficial summer season radish</Text>
                        </CardItem>
                        <CardItem>
                            <Text>
                                Summer sowing of radish is advised, at present temperature is suitable for germination of seeds.Procurement of seeds should be done from the certified source. Use varieties like Pusa Desi, Pusa Chetaki, Arka Nishant, Jonpuri, Bombay Red, Pusa Reshami, Panjab Ageti, Panjab Safed, IHR 1-1 & Kalyanpur
    </Text>
                        </CardItem>
                    </Card>
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
