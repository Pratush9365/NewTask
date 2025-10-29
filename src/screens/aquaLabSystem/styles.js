import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../assets/fonts';
import {vh, vw} from '../../utils/diamensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteF3,
  },
  titleText: {
    marginTop: 20,
    marginHorizontal: 16,
    fontFamily: fonts.SEMI,
    color: colors.gray07D,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  errorText: {
    textAlign: 'center',
    color: 'red',
  },
  flatListContainer: {
    flex: 1,
    marginTop: vh(16),
  },
  card: {
    backgroundColor: colors.white,
    marginHorizontal: vw(16),
    borderRadius: vh(8),
  },
  image: {
    width: vw(24),
    height: vh(24),
  },
  cardInner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: vh(18),
    paddingHorizontal: vw(16),
  },
  imageWrapper: {
    width: vw(48),
    height: vh(48),
    borderRadius: vh(36),
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 14,
    color: colors.BlackColor5F,
    fontFamily: fonts.MEDIUM,
    marginLeft: 16,
  },
  separator: {
    borderLeftColor: colors.grey4CA,
    borderLeftWidth: 2,
    paddingVertical: vh(8),
    marginLeft: vw(40),
  },
});

export default styles;
