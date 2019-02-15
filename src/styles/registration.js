import { StyleSheet, Platform } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { COMMONSTYLES, THEME_COLOR } from './common';

export const STYLES = StyleSheet.create({
  headerText: {
    marginLeft: (Platform.OS == 'android') ? responsiveWidth(30) : 0,
  },

  text: {
    width: responsiveWidth(90),
    textAlign: 'center',
    paddingLeft: 7,
    color: '#527a7a'
  },
  logo: {
    height: responsiveHeight(17),
    width: responsiveWidth(50),
  },
  container: {
    backgroundColor: 'white',
    width: responsiveWidth(100),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  btnView: {
    width: responsiveWidth(80),
    position: 'relative',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 30,
    // paddingLeft: responsiveWidth(5)
  },
  footerText: {
    marginTop: 30,
    width: responsiveWidth(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: responsiveWidth(100),
    height: responsiveHeight(100)
  },
  termAndConditions: {
    paddingRight: responsiveWidth(5),
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontSize: 14
  },
  forgotPassword: {
    paddingLeft: responsiveWidth(5),
    textDecorationLine: 'underline'
  },
  btns: {
    backgroundColor: THEME_COLOR,
    marginTop: responsiveHeight(3.5)
  },
  btns1: {
    backgroundColor: THEME_COLOR,
    marginTop: responsiveHeight(3.5),
    marginVertical: responsiveHeight(7)
  },
  inlineIcons: {
    fontSize: responsiveFontSize(2),
    color: 'black',
    marginRight: responsiveWidth(4),
  },
  inlineIconsEmail: {
    fontSize: responsiveFontSize(2),
    color: 'black',
    marginRight: responsiveWidth(3),
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#000',
    width: responsiveWidth(90),
  },
  inputContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#000',
    width: responsiveWidth(90),
    // Left: responsiveWidth(3)
  }

});