import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, ImageBackground, BackHandler, TouchableOpacity, TextInput, StyleSheet, Image, AsyncStorage } from 'react-native';
import { Card, CardItem, Text, Header, Container, Content, Button, Form, Item, Input, Label, Icon, Left, Body, Spinner } from 'native-base';
import { STYLES } from '../styles/login';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

class AddEventsScreen extends Component {
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
        this.props.navigation.navigate('EventsScreen');
        return true;
    };

    render() {
        return (
            <Container>
                <Header style={COMMONSTYLES.headerBackgroundColor}>
                    <Left style={{ flex: null }}>
                        <Button transparent onPress={() => this.props.navigation.navigate("EventsScreen")}>
                            <Icon name="angle-left" type="FontAwesome" style={COMMONSTYLES.sideMenuIcon} />
                        </Button>
                    </Left>
                    <Body style={STYLES.headerText}>
                        <Text style={COMMONSTYLES.header}>ADD EVENTS</Text>
                    </Body>
                </Header>
                <Content>
                    <Card transparent style={STYLES.container}>
                        <CardItem>
                            <View>
                                <Image
                                    style={STYLES.logo}
                                    source={require("./../assets/tractorIcon.png")}
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
                            placeholder="Event Name"
                            underlineColorAndroid="transparent"
                            onChangeText={this.handleChangeEventname}
                        />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon name="calender" type="FontAwesome" style={STYLES.inlineIcons} />
                        <TextInput
                            style={{ flex: 1, height: responsiveHeight(6) }}
                            placeholder="Event date"
                            keyboardType='numeric'
                            underlineColorAndroid="transparent"
                            onChangeText={this.handleChangeEventDate}
                        />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon name="envelope" type="FontAwesome" style={STYLES.inlineIconsEmail} />
                        <TextInput
                            style={{ flex: 1, height: responsiveHeight(6) }}
                            placeholder=" Event description"
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

export default connect(mapStateToProps, mapDispatchToProps)(AddEventsScreen);
