import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, ImageBackground, BackHandler, TouchableOpacity, TextInput, StyleSheet, Image, AsyncStorage } from 'react-native';
import { Card, CardItem, Text, Header, Container, Content, Button, Form, Item, Input, Label, Icon, Left, Body, Spinner } from 'native-base';
import { STYLES } from '../styles/login';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

class EventsScreen extends Component {
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
        this.props.navigation.navigate('HomeAdminScreen');
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
                        <Text style={COMMONSTYLES.header}>EVENS</Text>
                    </Body>
                </Header>
                <Content>
                    <Card>
                        <CardItem header>
                            <Text style={{color:'blue',fontWeight:'bold'}}>14th Agricultural Science Congress</Text>
                        </CardItem>
                            <Image
                                source={require('../assets/tractor.png')}
                                resizeMode='stretch'
                                style={{ width: responsiveWidth(100), height: responsiveHeight(60) }}/> 
                        <CardItem>
                            <Text>The NAAS in collaboration with the ICAR and Indian Agricultural Research
            Institute will be organizing XIV Agricultural Science Congress at New Delhi from
            February 20-23, 2019 on the theme and quot ;Innovations for Agricultural Transformation and quot ;.
            The four-day mega-event will include five plenary sessions, 32 technical sessions
            covering 10 different thematic areas, farmers session, 1500 poster presentations,
            inter-university student elocution contest and 4 panel discussions. Moreover,
            ASC-AgriTech-2019 exhibition will be a major event in this Congress.
            
            A large number of participants cutting across the disciplines of researchers,
            faculty, policy makers, farmers, entrepreneurs, development departments,
            corporate and private sector leaders, NGOs and students are expected to attend.
            
            The panel discussions shall be an important element of the Congress. ASC India
            Expo 2019 is being planned as an important event. As more than 2000
            delegates, large number of Farmers and Delhi public are expected to visit the
            exhibition, it will provide public and private sector agricultural research
            Institutes/Universities, Industries, Extension agencies, NGOs to showcase their
            innovative technologies to the visiting delegates, farmers and general public
            visitors. To exhibit or visit, one may contact the details below.
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

export default connect(mapStateToProps, mapDispatchToProps)(EventsScreen);
