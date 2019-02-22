import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth,responsiveFontSize } from 'react-native-responsive-dimensions';

export const STYLES = StyleSheet.create({
    logo: {
        width: responsiveWidth(60),
        height: responsiveHeight(50),
    },
    backgroundImage: {
        flex: 1,
        width: responsiveWidth(100),
        height: responsiveHeight(100)
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
        width: responsiveWidth(100),
        alignItems: 'center',
        justifyContent: 'center',
    }


});