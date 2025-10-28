import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../assets/fonts';

const screenDimension = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.ToastBackgroundColors,
    width: 0.9 * screenDimension.width,
    height: 64,
    borderRadius: 12,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    gap: 16,
  },
  headercontainer: {
    paddingHorizontal: 10,
    paddingvertical: 10,
    borderRadius: 30,
    backgroundColor: colors.ToastColors,
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    color: colors.white,
    fontFamily: fonts.BOLD,
    fontSize: 16,
  },
  text2: {
    color: colors.white,
    fontFamily: fonts.MEDIUM,
    fontSize: 12,
    lineHeight: 16,
  },
});
export default styles;
