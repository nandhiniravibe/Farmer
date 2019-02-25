import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, ImageBackground, BackHandler, TouchableOpacity, TextInput, StyleSheet, Image, AsyncStorage } from 'react-native';
import { Card, CardItem, Text, Header, Container, Content, Button, Form, Item, Input, Label, Icon, Left, Right, Body, Spinner } from 'native-base';
import { STYLES } from '../styles/login';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { FlatGrid } from 'react-native-super-grid';

class CropListScreen extends Component {
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
        const items = [
            { name: 'WHEAT', code: '#1abc9c', icon: "leaf", }, { name: 'SUN FLOWER', code: '#1abc9c', icon: "leaf", },
            { name: 'SUGAR CANE', code: '#1abc9c', icon: "leaf", }, { name: 'BANANA', code: '#1abc9c', icon: "leaf", },
            { name: 'BENGAL GRAM', code: '#1abc9c', icon: "leaf", }, { name: 'CHILLI', code: '#1abc9c', icon: "leaf", },
            { name: 'COTTON', code: '#1abc9c', icon: "leaf", }, { name: 'GARLIC', code: '#1abc9c', icon: "leaf", },
            { name: 'MAIZE', code: '#1abc9c', icon: "leaf", }, { name: 'MUSTARD', code: '#1abc9c', icon: "leaf", },
            { name: 'ONION', code: '#1abc9c', icon: "leaf", }, { name: 'PADDY', code: '#1abc9c', icon: "leaf", },
            { name: 'POTATO', code: '#1abc9c', icon: "leaf", }, { name: 'TOMATO', code: '#1abc9c', icon: "leaf", }
        ];
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
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.navigate("AddEventsScreen")}>
                            <Icon name="plus" type="FontAwesome" style={COMMONSTYLES.sideMenuIcon} />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <FlatGrid
                        itemDimension={130}
                        items={items}
                        style={styles.gridView}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity>
                            <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                                <Icon size={150} name={item.icon} type="FontAwesome" style={{ color: '#fff' }}
                                    onPress={() => this.props.navigation.navigate('CropDetailScreen')} />
                                <Text style={styles.itemName}>{item.name}</Text>
                            </View>
                            </TouchableOpacity>
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
        marginTop: 20,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'center',
        borderRadius: 5,
        padding: 10,
        height: 90,
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

export default connect(mapStateToProps, mapDispatchToProps)(CropListScreen);
