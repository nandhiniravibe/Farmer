import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Linking, View, ImageBackground, BackHandler, TouchableOpacity, TextInput, StyleSheet, Image, AsyncStorage } from 'react-native';
import { Card, CardItem, Text, Header, Container, Content, Button, Form, Item, Input, Label, Icon, Left, Body, Right, Spinner } from 'native-base';
import { STYLES } from '../styles/login';
import { COMMONSTYLES, THEME_COLOR } from '../styles/common';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

class EventsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: 0
        };
        this.onBackPress = this.onBackPress.bind(this)
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

    openUrl1() {
        Linking.openURL("http://14agricongress2019.in/index.php")
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }
    onBackPress = () => {
        this.props.navigation.navigate('HomeFarmerScreen');
        return true;
    };
    render() {
        const item = [
            {
                title: '14th Agricultural Science Congress',
                image: '',
                description2: "The NAAS in collaboration with the ICAR and Indian Agricultural Research Institute will be organizing XIV Agricultural Science Congress at New Delhi from February 20-23, 2019 on the theme and quot ;Innovations for Agricultural Transformation and quot ;. The four-day mega-event will include five plenary sessions, 32 technical sessions covering 10 different thematic areas, farmers session, 1500 poster presentations, inter-university student elocution contest and 4 panel discussions. Moreover, ASC-AgriTech-2019 exhibition will be a major event in this Congress.",
                description2: "A large number of participants cutting across the disciplines of researchers,faculty, policy makers, farmers, entrepreneurs, development departments, corporate and private sector leaders, NGOs and students are expected to attend.",
                description3: "The panel discussions shall be an important element of the Congress. ASC India Expo 2019 is being planned as an important event. As more than 2000 delegates, large number of Farmers and Delhi public are expected to visit the exhibition, it will provide public and private sector agricultural research Institutes/Universities, Industries, Extension agencies, NGOs to showcase their innovative technologies to the visiting delegates, farmers and general public visitors. To exhibit or visit, one may contact the details below."
            },

            {
                title: '',
                image: '',
                description1: '',
                description2: '',
                description3: ''
            },

            {
                title: '',
                image: '',
                description1: '',
                description2: '',
                description3: ''
            },
        ]
        return (
            <Container>
                <Header style={COMMONSTYLES.headerBackgroundColor}>
                    <Left style={{ flex: null }}>
                        <Button transparent onPress={() => this.props.navigation.navigate("HomeFarmerScreen")}>
                            <Icon name="angle-left" type="FontAwesome" style={COMMONSTYLES.sideMenuIcon} />
                        </Button>
                    </Left>
                    <Body style={STYLES.headerText}>
                        <Text style={COMMONSTYLES.header}>EVENS</Text>
                    </Body>
                    {this.state.user_id == 1 ?
                        <Right>
                            <Button transparent onPress={() => this.props.navigation.navigate("AddEventsScreen")}>
                                <Icon name="plus" type="FontAwesome" style={COMMONSTYLES.sideMenuIcon} />
                            </Button>
                        </Right> : null}
                </Header>
                <Content>
                    <Card>
                        <CardItem header>
                            <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 25 }}>14th Agricultural Science Congress</Text>
                        </CardItem>
                        <Image
                            source={require('../assets/events1.png')}
                            resizeMode='stretch'
                            style={{ width: responsiveWidth(100), height: responsiveHeight(50) }} />
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
            visitors. To exhibit or visit, one may contact the details below.</Text>
                        </CardItem>
                        <CardItem>
                            <Text>
                                Event Name: 14th Agricultural Science Congress
                                Date: 20–23 February 2019
                                Venue: MM ActivSci-Tech Communications
                                103-104, Rohit House
                                3, Tolstoy Marg,
                                Connaught Place, New Delhi
                                Contact:+91-11-4354 2737
                                Email: ascindiaexpo@gmail.com
                                Website: http://14agricongress2019.in/index.php
                            </Text>
                        </CardItem>
                        <Button success onPress={this.openUrl1.bind(this)} style={{ alignItems: 'center' }}>
                            <Text >
                                Register
                                   </Text>
                        </Button>
                    </Card>
                    <Card>
                        <CardItem header>
                            <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 25 }}>4th INDIA ASEAN EXPO & SUMMIT 2019</Text>
                        </CardItem>
                        <Image
                            source={require('../assets/events2.png')}
                            resizeMode='stretch'
                            style={{ width: responsiveWidth(100), height: responsiveHeight(50) }} />
                        <CardItem>
                            <Text>
                                Federation of Indian Chambers of Commerce & Industry (FICCI), with the support of Government of India is organizing the 4th India-ASEAN Expo and Summit under the overarching theme “Reviving the Millennial Partnership” from February 21-23, 2019 at Jawaharlal Nehru Stadium, Gate no.2 in New Delhi.
    The event will be attended by the Ministers, senior government officials and business delegations from the 10 ASEAN countries (Brunei, Cambodia, Indonesia, Laos, Malaysia, Myanmar, Philippines, Singapore, Thailand and Vietnam). The event will also have participation of industry from the Dialogue partner countries of ASEAN.
    It will be a great opportunity to showcase your products and services as well as highlight your capabilities in your Sector to the participating Leading Businesses from ASEAN Countries, Policymakers, Think Tanks and Media. This event would serve as a platform for exploring innovative approaches to promote Trade, Investment, Joint Ventures and Strategic Market Tie-ups.
    The ASEAN region is becoming one of the preferred trade and investment regions for Indian businesses and FICCI as an apex Chamber of Commerce and Industry of India, gives special focus to this region. The combined strength of the single ASEAN market is more than US$ 2.6 trillion and India's US$ 2.7 trillion economy, creates an economic power house that has the potential to become one of the strongest in the world. The India-ASEAN Expo & Summit offers an opportunity to governments, stakeholders and industry to capitalize and enhance efforts of sustaining momentum of trade.

                            </Text>
                        </CardItem>
                        <CardItem>
                            <Text>
                                The Focus Sectors include:
    Agri & Food Processing
    Agri Machinery & Equipment’s
    Artificial Intelligence
    Auto & Auto Components
    Banking & Financial Technologies
    Chemical & Petrochemicals
    Construction & Infrastructure
    Education & Skill
    Gems & Jewellery
    Handicrafts, Carpet Leather & accessories
    Healthcare & Medical Device
    Information & Communication Technology (ICT)
    Logistics, Warehousing & Transportation
    Manufacturing
    Pharmaceuticals
    Renewable Energy
    Science & Technology
    Innovation, Sports Goods
    Textiles & Textile machinery

                            </Text>
                        </CardItem>
                        <CardItem>
                            <Text>
                                AIMS & OBJECTIVES :
    To bring Indian, ASEAN and Global MNCs together to work jointly for larger market and choosing India as a hub for regional & global value chain
    Strengthen existing and explore new areas of collaboration between India and ASEAN
    Promote Trade and Investments between India and ASEAN region
    Promote People-to-People and Business-to-Business connects
    To provide a platform that will bring together multiple stakeholders, Policy makers - Industry - Academia - Media - Thought Leaders
    To promote connectivity and traditional linkages between India and ASEAN region

                            </Text>
                        </CardItem>
                        <CardItem>
                            <Text>
                                DELEGATION COMPOSITION :
    CEOs of leading organizations
    Presidents of Industry Associations
    Heads of Government Agencies
    Government officials from Ministries involved in approving projects / cases / proposals
    Insurance Company Officials
    Travel Facilitators
    Trade Journalists
    Dealers / Importers
    Agents / Facilitators
    Media / Journalists

                            </Text>
                        </CardItem>
                        <CardItem>
                            <Text>
                                SALIENT FEATURES  :
    It rotates between India & ASEAN countries on alternate year
    Reverse Buyer-Seller Meetings and planned B2B sessions with hosted buyers from all 10 ASEAN countries
    Signing of business agreements and MOUs
    Pre-fixed B2B meetings
    International Conference and Technical Seminars
    Exclusive State Pavilions l Exclusive Pavilions from focused sectors
    Opportunity for the State Government to showcase their industry pavilions in front of international buyers in India
    HIGHLIGHTS  :
    More than 200 Exhibitors from 11 countries
    l25+ Speakers from various sectors
    More than 100 hosted buyers from ASEAN
    B2Bs and B2Gs l Ministerial presence from India & ASEAN
    VISITORS AND INVITEES :
    Senior Government Officials
    Global Investors
    Young Entrepreneurs & Start Ups
    Women Entrepreneurs
    Investment Promotion agencies
    Academia & Think tanks
    International Organizations
    Companies from India & ASEAN
    ASEAN Buyers
    Associations & Councils

                            </Text>
                        </CardItem>
                        <CardItem>
                            <Text>
                                PARTICIPATION CHARGES :
    INR 50,000/- for 9 sqm Built up booth with basic furniture *Government taxes as applicable. Krishi Jagran is  participating as Exhibitor at the 4th India-ASEAN Expo and Summit and will be part of the India- ASEAN growth story.
    For participation, contact:
    Abhilasha Bahadur, FICCI
    Mobile +91-8527321326
    Telephone +91-11-23487255
    Email - abhilasha.bahadur@ficci.com
    Exhibition: Malvika Kareer, FICCI +91-11-23487254 malvika.kareer@ficci.com
                            </Text>
                        </CardItem>
                        <Button success onPress={this.openUrl1.bind(this)} style={{alignItems:'center'}}>
                                <Text>
                                    Register
                                   </Text>
                            </Button>

                    </Card>
                    <Card>
                        <CardItem header>
                            <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 25 }}>11th International Horti Expo 2019</Text>
                        </CardItem>
                        <Image
                            source={require('../assets/events3.png')}
                            resizeMode='stretch'
                            style={{ width: responsiveWidth(100), height: responsiveHeight(50) }} />
                        <CardItem>
                            <Text>
                                Agriculture, with its allied sectors including horticulture, is the largest livelihood provider in India, more so in the vast rural areas. Sustainable agriculture, in terms of food security, rural employment, and environmentally sustainable technologies such as soil conservation, sustainable natural resource management and biodiversity protection, are essential for holistic rural development.
    The 11th Horticulture Expo by the Media Today Group is scheduled to be held in Laxmi Lawns, Pune.Maharashtra is a leading Indian state in commercial horticulture, floriculture etc. It is a progressive state, and is the largest producer and exporter of many horticulture crops like grapes, pomegranates, mangoes, banana, oranges, etc. hence the event is planned to be conducted there.
    The theme of the expo is Projecting India's Farm Power Combining Food Quality & Safety. International Horti Expo 2019 will be an eye opener for the farmers, industry people and other stake holders of every segment of agriculture and horticulture who want to expand and diversify their activities.

                            </Text>
                        </CardItem>
                        <CardItem>
                            <Text>
                                Event Name: 11th International Horti Expo 2019
    Date: 22-24 February 2019
    Venue: Laxmi Lawns, Magarpatta, Pune

    Contact on below addresses for stall booking:
    MEDIA TODAY PVT. LTD
    J-73,  Paryavaran Complex, J Block, Neb Sarai, IGNOU Road,
    New Delhi - 110068 (INDIA).
    Contact: +91-11-2953 5593, 2953 5872
    Email: Hortiexpo@gmail.com
    Website: https://www.hortiexpo.com/

                            </Text>
                        </CardItem>
                        <Button success onPress={this.openUrl1.bind(this)} style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text>
                                Register
                                   </Text>
                        </Button>
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
