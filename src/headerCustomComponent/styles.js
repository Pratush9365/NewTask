import {StyleSheet} from 'react-native';
import colors from '../utils/colors';
import fonts from '../assets/fonts';
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.MediumBlue,
  },
  leftContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 4,
    paddingBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    padding: 10,
    borderRadius: 8,
    backgroundColor: colors.bluebeff,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    marginHorizontal: 16,
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
    marginTop: 2,
  },
  subtitleIcon: {
    marginLeft: 4,
    marginTop: 3,
  },
  rightIcons: {
    flexDirection: 'row',
    marginLeft: 16,
  },
  iconButton: {
    width: 40,
    height: 40,
    padding: 10,
    borderRadius: 8,
    backgroundColor: colors.bluebeff,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userButton: {
    marginLeft: 12,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: colors.white,
  },
  icon1: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor: colors.white,
  },
});
export default styles;
