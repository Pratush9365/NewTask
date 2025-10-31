import {StyleSheet} from 'react-native';
import colors from '../utils/colors';
import fonts from '../assets/fonts';
import {vh, vw} from '../utils/diamensions';
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.MediumBlue,
  },
  leftContainer: {
    flexDirection: 'row',
    paddingHorizontal: vw(16),
    paddingTop: vh(4),
    paddingBottom: vh(20),
  },
  backButton: {
    width: vh(40),
    height: vh(40),
    paddingVertical: vh(10),
    paddingHorizontal: vw(10),
    borderRadius: 8,
    backgroundColor: colors.bluebeff,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    marginHorizontal: vw(16),
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.SEMI,
  },
  subtitleContainer: {
    flexDirection: 'row',
  },
  subtitle: {
    color: colors.whiteFFF,
    fontSize: 13,
    marginTop: vh(2),
  },
  subtitleIcon: {
    marginLeft: vw(4),
    marginTop: vh(3),
  },
  rightIcons: {
    flexDirection: 'row',
    marginLeft: vw(16),
  },
  iconButton: {
    width: vw(40),
    height: vh(40),
    padding: 10,
    borderRadius: 8,
    backgroundColor: colors.bluebeff,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userButton: {
    marginLeft: vw(12),
  },
  icon: {
    width: vw(20),
    height: vh(20),
    resizeMode: 'contain',
    tintColor: colors.white,
  },
  icon1: {
    width: vw(24),
    height: vh(24),
    resizeMode: 'contain',
    tintColor: colors.white,
  },
});
export default styles;
