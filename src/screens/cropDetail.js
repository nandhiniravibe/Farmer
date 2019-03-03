import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, ImageBackground, BackHandler, TouchableOpacity, TextInput, StyleSheet, Image, AsyncStorage } from 'react-native';
import { Card, CardItem, Text, Header, Container, Content, Button, Form, Item, Input, Label, Icon, Left, Right, Body, Spinner } from 'native-base';
import { STYLES } from '../styles/login';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { FlatGrid } from 'react-native-super-grid';

class CropDetailScreen extends Component {
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
                        <Text style={COMMONSTYLES.header}>CROPS</Text>
                    </Body>
                </Header>
                <Content>
                    <Card>
                        <Image
                            source={require('../assets/wheat.jpeg')}
                            resizeMode='stretch'
                            style={{ width: responsiveWidth(100), height: responsiveHeight(28) }} />
                        <CardItem>
                            <Text style={{ color: 'blue', fontSize: 15 }}>14th Agricultural Science Congress 14th Agricultural Science Congress 14th Agricultural Science Congress 14th Agricultural Science Congress 14th Agricultural Science Congress</Text>
                        </CardItem>

                        <CardItem style={{
                            padding: '10%',
                            alignSelf: 'center',
                        }}>
                            <Button block success style={STYLES.btns} style={{
                                width: responsiveWidth(70), alignItems: 'center', justifyContent: 'center', backgroundColor: '#2198F5',
                                marginTop: 40
                            }} onPress={() => this.props.navigation.navigate("StepsToGrowScreen")} >
                                <Text>STEPS TO GROW</Text>
                            </Button>
                        </CardItem>

                        <CardItem style={{
                            padding: '10%',
                            alignSelf: 'center',
                        }}>
                            <Button block success style={{ width: responsiveWidth(70), alignItems: 'center', justifyContent: 'center', backgroundColor: '#2198F5', marginTop: 20 }} onPress={() => this.props.navigation.navigate("CropHealthScreen")}>
                                <Text>CROP HEALTH</Text></Button>
                        </CardItem>

                        <CardItem style={{
                            padding: '10%',
                            alignSelf: 'center',
                        }}>
                            <Button block success style={STYLES.btns} style={{ width: responsiveWidth(60), alignItems: 'center', justifyContent: 'center', backgroundColor: 'orange', marginTop: 20 }} onPress={() => this.props.navigation.navigate('SupportScreen')}>
                                <Text>NEED HELP ?</Text>
                            </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(CropDetailScreen);
