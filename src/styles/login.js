import { StyleSheet, Platform } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { THEME_COLOR } from './common';

export const STYLES = StyleSheet.create({

  text: {
    width: responsiveWidth(90),
    textAlign: 'center',
    paddingLeft: 7,
    color: '#527a7a'
  },
  logo: {
    // marginTop: responsiveHeight(1),
    height: responsiveHeight(27),
    width: responsiveWidth(70),
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
    padding: '10%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  footerText: {
    width: responsiveWidth(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: responsiveWidth(100),
    height: responsiveHeight(100)
  },
  createAccount: {
    paddingRight: responsiveWidth(5),
    textDecorationLine: 'underline',
  },
  forgotPassword: {
    textDecorationLine: 'underline',
    color: THEME_COLOR,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 25
  },
  form: {
    width: responsiveWidth(85),
    marginLeft: responsiveWidth(5)
  },
  btns: {
    backgroundColor: THEME_COLOR,
  },
  inlineIcons: {
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
    width: responsiveWidth(90)
  },
  headerText: {
    marginLeft: (Platform.OS == 'android') ? responsiveWidth(33) : 0,
  }

});