import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../assets/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteF3,
  },
  floatingIcon: {
    position: 'absolute',
    bottom: 30,
    right: 20,
  },
  errorText: {
    textAlign: 'center',
    color: 'red',
  },
  middleWidth: {
    borderWidth: 1,
    borderColor: colors.whiteEA,
    marginHorizontal: 10.25,
  },
  floatingButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
    backgroundColor: colors.blueCBC,
    borderRadius: 8,
  },
  addIcon: {
    width: 26.67,
    height: 26.67,
  },
  searchContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
    tintColor: colors.gray29C,
  },

  searchBar: {
    flexDirection: 'row',
    paddingTop: 14,
    paddingBottom: 14,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: colors.white,
    borderRadius: 12,
    flex: 1,
    alignItems: 'center',
  },
  searchText: {
    flex: 1,
  },
  searchInput: {
    fontSize: 14,
    color: colors.gray3BA,
    fontFamily: fonts.MEDIUM,
  },

  filterIcon: {
    width: 22,
    height: 22,
  },
  downloadButton: {
    marginLeft: 10,
    width: 48,
    height: 48,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  downloadIcon: {
    width: 22,
    height: 22,
  },
  sourcesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  sourcesCount: {
    fontSize: 16,
    fontFamily: fonts.SEMI,
    color: colors.Blue_green,
  },
  sortButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blueC80,
    borderRadius: 8,
  },
  sortIcon: {
    width: 20,
    height: 20,
  },

  waterSourceCard: {
    marginHorizontal: 16,
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: fonts.SEMI,
    color: colors.BlackColor5F,
    marginBottom: 12,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    paddingHorizontal: 4,
    borderRadius: 8,
    backgroundColor: colors.white9F9,
  },
  cardColumn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    borderRadius: 8,
  },
  cardLabel: {
    fontSize: 12,
    color: colors.gray9F,
    fontFamily: fonts.MEDIUM,
    marginBottom: 4,
  },
  cardValue: {
    fontSize: 14,
    fontFamily: fonts.SEMI,
    color: colors.Blue_green,
    flex: 1,
  },
});
export default styles;
