import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth,responsiveFontSize } from 'react-native-responsive-dimensions';

export const STYLES = StyleSheet.create({

    text: {
        width: responsiveWidth(90),
        textAlign: 'center',
        paddingLeft: responsiveWidth(7.5),
        color: '#527a7a',
        marginTop: 10
    },
    logo: {
        width: responsiveWidth(70),
        height: responsiveHeight(28),
    },
    container: {
        alignItems:'center',
        alignSelf:'center',
        marginTop: 15,
        paddingTop:15
    },
    btnView: {
        width: responsiveWidth(80),
        position: 'relative',
        padding: '10%',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    backgroundImage: {
        flex: 1,
        width: responsiveWidth(100),
        height: responsiveHeight(100)
    }
});