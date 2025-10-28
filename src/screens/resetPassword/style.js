import {StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';
import colors from '../../utils/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    marginLeft: 20,
    fontSize: 24,
    fontFamily: fonts.BOLD,
    marginBottom: 10,
    color: colors.Blue_green,
  },
  iconstyle: {
    zIndex: 20,
  },
  btnVisible: {
    opacity: 1,
  },
  btnNotVisible: {
    opacity: 0.5,
  },

  textStyle: {
    marginBottom: 10,
    fontFamily: fonts.MEDIUM,
    fontSize: 14,
    marginLeft: 20,
  },

  iconSize: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 38,
    bottom: 19,
  },

  subtitle: {
    marginLeft: 20,
    fontSize: 18,
    fontFamily: fonts.REGULAR,
    color: colors.black055,
    marginBottom: 20,
  },
  TextStyle: {
    marginBottom: 10,
    fontFamily: fonts.MEDIUM,
    fontSize: 14,
    marginTop: 16,
    marginLeft: 20,
  },

  updateBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    backgroundColor: colors.MediumBlue,
    paddingTop: 18,
    paddingBottom: 18,
    paddingRight: 56,
    borderRadius: 60,
    paddingLeft: 56,
    marginHorizontal: 20,
  },
  updateText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.SEMI,
  },

  backBtn: {
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 18,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 18,
    borderWidth: 1,
    borderRadius: 60,
    borderColor: colors.MediumBlue,
    marginHorizontal: 20,
  },
  backBtn1: {
    width: 22,
    height: 22,
  },
  backText: {
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.MediumBlue,
    fontSize: 16,
    fontFamily: fonts.SEMI,
  },
  inputText: {
    fontFamily: fonts.REGULAR,
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 50,
    backgroundColor: colors.white,
    borderRadius: 12,
    borderColor: colors.black152D4012,
    marginHorizontal: 20,
  },
  conditions: {
    flexDirection: 'row',
    marginTop: 24,
    marginLeft: 20,
  },
  conditionsText: {
    marginLeft: 12,
    fontFamily: fonts.REGULAR,
    fontSize: 14,
  },
  conditions1: {
    flexDirection: 'row',
    marginTop: 17,
    marginLeft: 20,
  },
});

export default styles;
