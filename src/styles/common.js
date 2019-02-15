import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth,responsiveFontSize } from 'react-native-responsive-dimensions';

export const THEME_COLOR = '#4CC7FF'
export const BACK_GROUND_THEME_COLOR = '#e6e6e6'

export const COMMONSTYLES = StyleSheet.create({

    form: {
        width: responsiveWidth(85),
        marginLeft: responsiveWidth(5)
    },
    inputField: {
        fontWeight: 'bold',
        fontSize: responsiveFontSize(1.8),

    },
    passwordEye: {
        fontSize: responsiveFontSize(2),
        color: 'black',
        textAlign: "right"
    },
    validationErrors: {
        color: 'red',
        fontSize: responsiveFontSize(1.5),
    },
    header: {
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2.2),
        color: 'white'
    },
    sideMenuIcon: {
        fontSize: responsiveFontSize(2.5),
        color: 'white'
    },
    leftArrow: {
        fontSize: responsiveFontSize(3),
        color: 'black'
    },
    backGroundColor: {
        backgroundColor: BACK_GROUND_THEME_COLOR,
    },
    headerBackgroundColor: { backgroundColor: THEME_COLOR }
});