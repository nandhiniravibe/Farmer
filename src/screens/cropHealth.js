import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, ImageBackground, BackHandler, TouchableOpacity, TextInput, StyleSheet, Image, AsyncStorage } from 'react-native';
import { Card, CardItem, Text, Header, Container, Content, Button, Form, Item, Input, Label, Icon, Left, Body, Right, Spinner } from 'native-base';
import { STYLES } from '../styles/login';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

class StepsToGrowScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.onBackPress = this.onBackPress.bind(this)
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
                        <Text style={COMMONSTYLES.header}>STEPS TO GROW</Text>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.navigate("AddEventsScreen")}>
                            <Icon name="plus" type="FontAwesome" style={COMMONSTYLES.sideMenuIcon} />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Card>
                        <CardItem header>
                            <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 25 }}>1. It’s all about timing</Text>
                        </CardItem>
                        <CardItem>
                            <Text>
                                Wheat should be planted in the spring or the autumn – timing is important, so it’s a good idea to make a note on your calendar of when you need to start planting your seeds.</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem header>
                            <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 25 }}>2. Prepare the soil</Text>
                        </CardItem>
                        <Image
                            source={require('../assets/grow/grow1.png')}
                            resizeMode='stretch'
                            style={{ width: responsiveWidth(100), height: responsiveHeight(50) }} />
                        <CardItem>
                            <Text>
                                You’ll need some good rich soil, so it’s best to dig in some compost. (You can buy bags of compost at garden centres and DIY stores. Or you could make your own by throwing all your food waste into a compost bin. It takes a few months for it to be ready to use, but it’s worth the wait.) Make sure the ground is fairly even - you can use a shovel and rake to do this. Most children love digging and raking – so sit back and let them play!
                            </Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem header>
                            <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 25 }}>3. Get planting</Text>
                        </CardItem>
                        <CardItem>
                            <Text>
                                Sprinkle the seeds over the soil - you need 3 oz for every 100 square feet (85 g for every 10 square meters). It’s best to help your child do this – just in case you get wheat in your flower beds!
                            </Text>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem header>
                            <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 25 }}>4. Rake it out</Text>
                        </CardItem>
                        <Image
                            source={require('../assets/grow/grow2.png')}
                            resizeMode='stretch'
                            style={{ width: responsiveWidth(100), height: responsiveHeight(50) }} />
                        <CardItem>
                            <Text>
                                Rake over the soil to cover the seeds. Help your child out with this job as it needs a gentle touch.                            </Text>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem header>
                            <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 25 }}>5. Scare the crows!</Text>
                        </CardItem>
                        <Image
                            source={require('../assets/grow/grow3.png')}
                            resizeMode='stretch'
                            style={{ width: responsiveWidth(100), height: responsiveHeight(50) }} />
                        <CardItem>
                            <Text>
                                You probably won’t need a scarecrow – but if you’re planting outside you’ll need to cover the seeds to protect them from birds.                            </Text>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem header>
                            <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 25 }}>6. Just add water</Text>
                        </CardItem>

                        <CardItem>
                            <Text>
                                Make sure the seeds get enough water - if it doesn’t rain, water them once a day. (Why not get your child their own little watering can?) If you go away, instead of asking a neighbour to water your crop, you could use an automatic watering system. You can pick up an inexpensive and easy to use kit from your local DIY stores or garden centre.                            </Text>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem header>
                            <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 25 }}>7. See how they grow!</Text>
                        </CardItem>
                        <Image
                            source={require('../assets/grow/grow4.png')}
                            resizeMode='stretch'
                            style={{ width: responsiveWidth(100), height: responsiveHeight(50) }} />
                        <CardItem>
                            <Text>
                                Be patient, and before long you’ll see the first green shoots. By midsummer (or a bit later for spring wheat) the colour of the stalks will turn from green to yellow or brown. And the heads will become heavy with grain and start to bend forward. So now you have your own crop of golden wheat, what are you going to do with it? Well, you could harvest it and make your own wheat flour. Alternatively, you could sit back and admire your beautiful golden wheat – it really does look fantastic and is an unusual addition to your garden or outside area.                            </Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(StepsToGrowScreen);
