import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import {vh, vw} from '../../utils/diamensions';
import fonts from '../../assets/fonts';

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.MediumBlue,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
  },
  activeTabButton: {
    borderBottomWidth: 3,
    borderBottomColor: colors.white,
  },
  tabText: {
    marginBottom: vh(12),
    color: colors.white,
    fontFamily: fonts.SEMI,
    fontSize: 14,
  },

  mainContainer: {
    flex: 1,
    backgroundColor: colors.whiteF3,
  },

  headerRow: {
    flexDirection: 'row',
    marginTop: vh(20),
    marginHorizontal: vw(16),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    color: colors.BlackColor5F,
    fontFamily: fonts.SEMI,
  },

  iconSmallBox: {
    width: vw(40),
    height: vh(40),
    borderRadius: 6,
    backgroundColor: colors.blueEC,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: vw(8),
  },

  cardContainer: {
    paddingVertical: vh(20),
    paddingHorizontal: vw(20),
    marginHorizontal: vw(16),
    marginTop: vh(16),
    borderRadius: vw(8),
    backgroundColor: colors.white,
  },

  listRow: {
    flexDirection: 'row',
  },
  iconWrapper: {
    marginRight: vw(12),
  },
  iconBox: {
    width: vw(40),
    height: vh(40),
    backgroundColor: colors.greenF7,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: vw(20),
  },
  itemTitle: {
    color: colors.gray07D,
    fontSize: 14,
    fontFamily: fonts.MEDIUM,
  },
  itemValueContainer: {
    marginTop: vh(2),
  },
  itemValue: {
    color: colors.blackf5f,
    fontFamily: fonts.SEMI,
    fontSize: 14,
  },

  separator: {
    borderBottomWidth: 1,
    borderColor: colors.whiteF1,
    marginVertical: vh(16),
  },
  errorText: {
    textAlign: 'center',
    color: colors.red,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default styles;
