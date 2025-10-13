import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.ToastBackgroundColors,
    width: 390,
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
    fontWeight: '700',
    fontFamily: 'Bold',
    fontSize: 16,
  },
  text2: {
    color: '#fff',
    fontWeight: '500',
    fontFamily: 'Medium',
    fontSize: 12,
    lineHeight: 16,
  },
});
export default styles;
