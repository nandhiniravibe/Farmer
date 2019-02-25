import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, ImageBackground, BackHandler, TouchableOpacity, TextInput, StyleSheet, Image, AsyncStorage } from 'react-native';
import { Card, CardItem, Text, Header, Container, Content, Button, Form, Item, Input, Label, Icon, Left, Body, Spinner } from 'native-base';
import { STYLES } from '../styles/login';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

class AddNewsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: true,
            email: undefined,
            password: undefined,
        };
        this.onBackPress = this.onBackPress.bind(this);
        this.handleChangeEventname = this.handleChangeEventname.bind(this);
        this.handleChangeEventDate = this.handleChangeEventDate.bind(this);
        this.handleChangeEventDescription = this.handleChangeEventDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }
    onBackPress = () => {
        this.props.navigation.navigate('NewsScreen');
        return true;
    };
    handleChangeEventname(e) {
        this.setState({ eventName: e });
    };
    handleChangeEventDate(e) {
        this.setState({ eventDate: e });
    };
    handleChangeEventDescription(e) {
        this.setState({ eventDescription: e });
    };

    handleSubmit() {
        const {eventName,eventDate,eventDescription} = this.state;
        if(eventName && eventDate && eventDescription){
        alert("Event created Successully !!")
        this.props.navigation.navigate("EventsScreen")
        }
        else{
            alert("Plese fill out all fields.")
        }
    }


    render() {
        return (
            <Container>
                <Header style={COMMONSTYLES.headerBackgroundColor}>
                    <Left style={{ flex: null }}>
                        <Button transparent onPress={() => this.props.navigation.navigate("NewsScreen")}>
                            <Icon name="angle-left" type="FontAwesome" style={COMMONSTYLES.sideMenuIcon} />
                        </Button>
                    </Left>
                    <Body style={STYLES.headerText}>
                        <Text style={COMMONSTYLES.header}>ADD NEWS</Text>
                    </Body>
                </Header>
                <Content>
                    <Card transparent style={STYLES.container}>
                        <CardItem>
                            <View>
                                <Image
                                    style={STYLES.logo}
                                    source={require("./../assets/openCamera.png")}
                                    resizeMode={'contain'}
                                />
                                <Text style={{textAlign: 'center'}}>Upload Image</Text>
                            </View>
                        </CardItem>
                    </Card>
                    {this.state.showSpinner && <Spinner color='green' />}
                    <View style={STYLES.inputContainer}>
                        <Icon name="user" type="FontAwesome" style={STYLES.inlineIcons} />
                        <TextInput
                            style={{ flex: 1, height: responsiveHeight(6) }}
                            placeholder="News Heading"
                            underlineColorAndroid="transparent"
                            onChangeText={this.handleChangeEventname}
                        />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon name="calendar" type="FontAwesome" style={STYLES.inlineIcons} />
                        <TextInput
                            style={{ flex: 1, height: responsiveHeight(6) }}
                            placeholder="News date"
                            keyboardType='numeric'
                            underlineColorAndroid="transparent"
                            onChangeText={this.handleChangeEventDate}
                        />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon name="envelope" type="FontAwesome" style={STYLES.inlineIcons} />
                        <TextInput
                            style={{ flex: 1, height: responsiveHeight(6) }}
                            placeholder="Description"
                            underlineColorAndroid="transparent"
                            onChangeText={this.handleChangeEventDescription}
                        />
                    </View>
                    <View style={STYLES.btnView}>
                        <Button block success style={STYLES.btns} onPress={this.handleSubmit}>
                            <Text>ADD</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddNewsScreen);
