import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Image, View, ImageBackground, BackHandler, TextInput, AsyncStorage } from 'react-native';
import { Card, CardItem, Text, Container, Content, Button, Form, Item, Input, Label, Icon, Header, Left, Body, Picker, Spinner, Right, List, ListItem } from 'native-base'
import { STYLES } from '../styles/registration';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';
// import RazorpayCheckout from 'react-native-razorpay';

class BuyScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: true
        };
        this.onBackPress = this.onBackPress.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeFirstname = this.handleChangeFirstname.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeAddress = this.handleChangeAddress.bind(this);
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangeState = this.handleChangeState.bind(this);
        this.handleChangePin = this.handleChangePin.bind(this);
    }
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    };

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    };

    onBackPress = () => {
        this.props.navigation.navigate('ProductsScreen');
        return true;
    };

    handleChangeFirstname(e) {
        this.setState({ fname: e })
    };

    handleChangePhone(e) {
        this.setState({ phone: e })
    };

    handleChangeEmail(e) {
        this.setState({ email: e });
    };

    handleChangeAddress(e) {
        this.setState({ address: e });
    };

    handleChangeCity(e) {
        this.setState({ city: e });
    };

    handleChangeState(e) {
        this.setState({ state: e });
    };

    handleChangePin(e) {
        this.setState({ pin: e });
    };

    checkIsEmailUnique() {
        const where = `email = '${this.state.email}'`;
        const queryParams = {
            where
        };
        this.props.login(queryParams).then(res => {
            const { value: { success, data } } = res;
            if (success && (data && data.length > 0)) {
                return this.setState({ showEmailErrorMsg: true });
            } else {
                this.setState({
                    email: this.state.email,
                    showEmailErrorMsg: false,
                })
            }
        })
    };

    handleChangePassword(e) {
        if (e && e.length >= 5) {
            return this.setState({ password: e, showPasswordErrorMsg: false, validPassword: true })
        } else {
            this.setState({ showPasswordErrorMsg: true });
        }
    };

    checkIsValidEmail() {
        const email = this.state.email;
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) return this.setState({ showIncorrectEmailErrorMsg: true });
        this.setState({ email, showIncorrectEmailErrorMsg: false })
    };

    handleSubmit() {
        const { fname, phone, email, password, address, city, state, pin } = this.state;
        if (!fname) return alert("Please enter Name");
        if (!phone) return alert("Please enter Phone number")
        if (!address) return alert("Please enter Address")
        if (!city) return alert("Please enter City")
        if (!state) return alert("Please enter State")
        if (!pin) return alert("Please enter Pin")

        // if (showIncorrectEmailErrorMsg) return alert("Please enter valid Email");
        if (fname && phone && address && city && state && pin) {
            this.setState({ showSpinner: false });
            // this.props.navigation.navigate("LoginScreen")
        } else {
            alert(' Please fill out all fields');
            this.setState({ showSpinner: false });
        }
    };

    handlePayment() {
        this.props.navigation.navigate("LoginScreen");
    }

    render() {
        return (
            <Container>
                <Header style={COMMONSTYLES.headerBackgroundColor}>
                    <Left style={{ flex: null }}>
                        <Button transparent onPress={() => this.props.navigation.navigate("ProductsScreen")}>
                            <Icon name="angle-left" type="FontAwesome" style={COMMONSTYLES.sideMenuIcon} />
                        </Button>
                    </Left>
                    <Body style={STYLES.headerText}>
                        <Text style={COMMONSTYLES.header}>DELIVERY ADDRESS</Text>
                    </Body>
                </Header>
                <Content >
                    {/* <List>
                        <ListItem >
                            <Left>
                                <Icon name="monet" type="FontAwesome" style={{ fontSize: 40, color: 'green' }} />              </Left>
                            <Body>
                                <Text>Cash on delivery</Text>
                            </Body>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem >
                            <Left>
                                <Icon name="net" type="FontAwesome" style={{ fontSize: 40, color: 'green' }} />              </Left>
                            <Body>
                                <Text>Net banking</Text>
                            </Body>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem >
                            <Left>
                                <Icon name="credit-card-alt" type="FontAwesome" style={{ fontSize: 40, color: 'green' }} />              </Left>
                            <Body>
                                <Text>Debit card</Text>
                            </Body>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem >
                            <Left>
                                <Icon name="credit-card" type="FontAwesome" style={{ fontSize: 40, color: 'green' }} />              </Left>
                            <Body>
                                <Text>Credit card</Text>
                            </Body>
                        </ListItem>
                    </List> */}
                    <Card>
                        <CardItem>
                        <Text> Only Cash on delivery available for now !!!</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(BuyScreen);
