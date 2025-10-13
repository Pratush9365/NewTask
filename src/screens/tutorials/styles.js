import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../utils/colors';
const {width, height} = Dimensions.get('window');
const DESIGN_WIDTH = 430;
const DESIGN_HEIGHT = 560;
const scaleWidth = size => (width / DESIGN_WIDTH) * size;
const scaleHeight = size => (height / DESIGN_HEIGHT) * size;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.paleBlue,
  },
  slide: {
    width,
    alignItems: 'center',
  },
  footer: {
    height: height * 0.45,
    backgroundColor: colors.white,
  },
  foortcontent: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  image: {
    scaleWidth,
    scaleHeight,
  },

  title: {
    marginTop: 44,
    paddingHorizontal: 32,
    fontSize: 28,
    fontWeight: '700',
    fontFamily: 'Bold',
    lineHeight: 34,
    color: colors.Blue_green,
    textAlign: 'center',
  },
  description: {
    marginTop: 20,
    fontSize: 16,
    color: colors.Blue_green,
    textAlign: 'center',
    fontFamily: 'Regular',
    fontWeight: '400',
    paddingHorizontal: 32,
  },
  nextButton: {
    marginTop: 54,
    width: 57,
    height: 57,
    borderRadius: 25,
    backgroundColor: colors.MediumBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextText: {
    width: 22,
    height: 22,
  },
  skipDirection: {
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  skipButton: {
    position: 'absolute',
    width: 84,
    height: 44,
    top: 50,
    right: 20,
    zIndex: 10,
    backgroundColor: 'white',
    paddingTop: 12,
    paddingRight: 24,
    paddingLeft: 24,
    paddingBottom: 12,
    borderRadius: 60,
  },
  skipText: {
    fontSize: 16,
    color: colors.MediumBlue,
    fontWeight: '600',
    lineHeight: 20,
    fontFamily: 'SemiBold',
  },
  SkipTextbackground: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
