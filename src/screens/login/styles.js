import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../assets/fonts';

const screenDimensions = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteFA,
  },
  containerItem: {
    height: 0.38 * screenDimensions.height,
    backgroundColor: colors.MediumBlue,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  textHeader: {
    marginHorizontal: 20,
    flex: 1,
  },

  ToastsStyle: {
    backgroundColor: colors.red,
    color: colors.white,
  },
  Visible: {
    opacity: 1,
  },
  notVisible: {
    opacity: 0.5,
  },

  containerItem1: {
    marginLeft: 18,
    marginBottom: 30,
  },
  ImageStyle: {
    width: 64,
    height: 64,
  },
  title: {
    fontFamily: fonts.BOLD,
    marginTop: 8,
    color: colors.white,
    fontSize: 24,
  },
  Texts1: {
    marginTop: 8,
    fontFamily: fonts.REGULAR,
    color: colors.white,
  },
  input: {
    marginTop: 10,
    borderRadius: 12,
    borderWidth: 1,
    padding: 20,
    fontFamily: fonts.REGULAR,
    borderColor: colors.paleBlue,
  },
  errorborder: {
    borderColor: colors.red,
  },

  input1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.black152D4012,
  },
  forgot: {
    marginTop: 16,
    fontSize: 14,
    fontFamily: fonts.MEDIUM,
    textAlign: 'right',
    color: colors.MediumBlue,
    borderBottomWidth: 1,
    alignSelf: 'flex-end',
    marginBottom: 24,
    borderColor: colors.MediumBlue,
  },
  loginBtn: {
    backgroundColor: colors.MediumBlue,
    paddingTop: 18,
    paddingBottom: 18,
    paddingRight: 56,
    paddingLeft: 56,
    borderRadius: 8,
    borderRadius: 60,
    alignItems: 'center',
  },
  loginText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.SEMI,
  },
  register: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: fonts.SEMI,
  },
  registerText: {
    fontSize: 16,
    fontFamily: fonts.SEMI,
    color: colors.MediumBlue,
    borderBottomWidth: 5,
    borderColor: colors.MediumBlue,
  },
  Texts: {
    marginTop: 32,
    fontSize: 14,
    fontFamily: fonts.MEDIUM,
    color: colors.Blue_green,
  },
  emailHeader: {
    marginTop: 32,
  },

  passwordicon: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 12,
    bottom: 20,
  },
  errorText: {
    color: colors.red,
    fontSize: 14,
    marginTop: 6,
    marginLeft: 4,
  },
  footerText: {
    justifyContent: 'flex-end',
    marginBottom: 32,
  },
});
export default styles;
