import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, ImageBackground, BackHandler, TouchableOpacity, TextInput, StyleSheet, Image, AsyncStorage } from 'react-native';
import { Card, CardItem, Text, Header, Container, Content, Button, Form, Item, Input, Label, Icon, Left, Body, Right, Spinner } from 'native-base';
import { STYLES } from '../styles/login';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';
import logoImage from './../assets/logo-home.png';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

class WorkCreatedScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: 0,
            showPassword: true,
            email: undefined,
            password: undefined,
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
        this.props.navigation.navigate('MyWorksScreen');
        return true;
    };

    render() {
        return (
            <Container>
                <Header style={COMMONSTYLES.headerBackgroundColor}>
                    <Left style={{ flex: null }}>
                        <Button transparent onPress={() => this.props.navigation.navigate("MyWorksScreen")}>
                            <Icon name="angle-left" type="FontAwesome" style={COMMONSTYLES.sideMenuIcon} />
                        </Button>
                    </Left>
                    <Body style={{ marginLeft: 80 }}>
                        <Text style={COMMONSTYLES.header}>WORKS POSTED BY ME</Text>
                    </Body>
                </Header>
                <Content>
                    <Card style={{ marginLeft: 17, marginRight: 17 }}>
                        <CardItem header>
                            <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 25 }}> Nandhini Ravi</Text>
                        </CardItem>
                        <CardItem>
                            <Text>Location : OOTY</Text>
                        </CardItem>
                        <CardItem>
                            <Text>No of workers needed : 5 </Text>
                        </CardItem>
                        <CardItem>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("WorkersScreen")}>
                                <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 25 }}>  Interested workers : 4 </Text>
                            </TouchableOpacity>
                        </CardItem>
                    </Card>
                    <Card style={{ marginLeft: 17, marginRight: 17 }}>
                        <CardItem header>
                            <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 25 }}> Vignesh</Text>
                        </CardItem>
                        <CardItem>
                            <Text>Location : Coimbatore</Text>
                        </CardItem>
                        <CardItem>
                            <Text>No of workers needed : 3 </Text>
                        </CardItem>
                        <CardItem>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("WorkersScreen")}>
                                <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 25 }}>  Interested workers : 3 </Text>
                            </TouchableOpacity>
                        </CardItem>
                    </Card>
                    <Card style={{ marginLeft: 17, marginRight: 17 }}>
                        <CardItem header>
                            <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 25 }}> Hari haran</Text>
                        </CardItem>
                        <CardItem>
                            <Text>Location : Pollachi</Text>
                        </CardItem>
                        <CardItem>
                            <Text>No of workers needed : 9 </Text>
                        </CardItem>
                        <CardItem>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("WorkersScreen")}>
                                <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 25 }}>  Interested workers : 2 </Text>
                            </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(WorkCreatedScreen);
