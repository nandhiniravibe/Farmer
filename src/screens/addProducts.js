import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, ImageBackground, BackHandler, TouchableOpacity, TextInput, StyleSheet, Image, AsyncStorage } from 'react-native';
import { Card, CardItem, Text, Header, Container, Content, Button, Form, Item, Input, Label, Icon, Left, Body, Picker } from 'native-base';
import { STYLES } from '../styles/login';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import PhotoUpload from 'react-native-photo-upload';

class AddProductsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: true,
            email: undefined,
            password: undefined,
            imageBinary: '',
            type : 'powered'
        };
        this.onBackPress = this.onBackPress.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeDistributor = this.handleChangeDistributor.bind(this);
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
        this.props.navigation.navigate('ProductsScreen');
        return true;
    };
    handleChangeName(e) {
        this.setState({ name: e });
    };
    handleChangeDistributor(e) {
        this.setState({ amount: e });
    };
    handleChangeEventDescription(e) {
        this.setState({ eventDescription: e });
    };


   async handleSubmit() {
    
        const { name, amount, imageBinary, type } = this.state;
        alert(this.state.type)
        if (name && amount ) {
            
         AsyncStorage.getItem(type).then((res)=>{
            const data = [{
                name1 : name,
                image1 :{uri : imageBinary},
                amount1 :amount,
                name2: 'Wheel Type Combine Harvestor',
                image2: require('../assets/implements14.png'),
                amount2 : 700000,
               }]
         const  item =[...data,...JSON.parse(res)]

           alert("Event created Successully !!")
   
           AsyncStorage.setItem(type,JSON.stringify(item))
               this.props.navigation.navigate("ProductsScreen")
         })
        }
        else {
            alert("Plese fill out all fields.")
        }
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
                        <Text style={COMMONSTYLES.header}>ADD PRODUCT</Text>
                    </Body>
                </Header>
                <Content>


                    <Card transparent style={STYLES.container}>
                        <CardItem>
                            <Item stackedLabel style={styles.itemStyle}>
                                <Label style={styles.labelStyle}>Upload Image</Label>
                                <Item style={{ paddingTop: '10%', paddingBottom: '10%' }}>
                                    <PhotoUpload
                                        onPhotoSelect={avatar => {
                                            if (avatar) {
                                                const imageBinary = `data:image/png;base64,${avatar}`
                                                console.log(avatar);
                                                this.setState({ imageBinary });
                                            }
                                        }}>
                                        <Image
                                    style={STYLES.logo}
                                    source={require("./../assets/openCamera.png")}
                                    resizeMode={'contain'}
                                />
                                    </PhotoUpload>
                                </Item>
                            </Item>
                        </CardItem>
                    </Card>

            <View style={STYLES.inputContainer}>
            <Icon name="users" type="FontAwesome" style={STYLES.inlineIcons} />
            <Picker
              mode="dropdown"
              placeholder="Select category"
              placeholderStyle={{ color: "black", }}
              placeholderIconColor="#007aff"
              style={{ width: undefined }}
              selectedValue={this.state.type}
              onValueChange={(e) => this.setState({ type: e })}            
            >
            <Item label="powered" value="powered" />
            <Item label="implement" value="implement" />
            <Item label="nonPowered" value="nonPowered" />
            <Item label="fertilizers" value="fertilizers" />
            <Item label="seeds" value="seeds" />
            </Picker>
          </View>

                    <View style={STYLES.inputContainer}>
                        <Icon name="th-large" type="FontAwesome" style={STYLES.inlineIcons} />
                        <TextInput
                            style={{ flex: 1, height: responsiveHeight(6) }}
                            placeholder="Product Name"
                            underlineColorAndroid="transparent"
                            onChangeText={this.handleChangeName}
                        />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon name="user" type="FontAwesome" style={STYLES.inlineIcons} />
                        <TextInput
                            style={{ flex: 1, height: responsiveHeight(6) }}
                            placeholder="Distributor"
                            underlineColorAndroid="transparent"
                            onChangeText={this.handleChangeDistributor}
                        />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon name="inr" type="FontAwesome" style={STYLES.inlineIcons} />
                        <TextInput
                            style={{ flex: 1, height: responsiveHeight(6) }}
                            placeholder="Rupees"
                            keyboardType='numeric'
                            underlineColorAndroid="transparent"
                            onChangeText={this.handleChangeEventDate}
                        />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon name="envelope" type="FontAwesome" style={STYLES.inlineIcons} />
                        <TextInput
                            style={{ flex: 1, height: responsiveHeight(6) }}
                            placeholder=" Product description"
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


const styles = StyleSheet.create({
    header: {
        backgroundColor: '#0278FF',
    },
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    labelStyle: {
        fontWeight: 'bold'
    },

    itemStyle: {
        width: responsiveWidth(93)
    },

})

export default connect(mapStateToProps, mapDispatchToProps)(AddProductsScreen);
