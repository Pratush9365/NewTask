import {StyleSheet} from 'react-native';
import colors from '../../../utils/colors';
import fonts from '../../../assets/fonts';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightShadeBlue,
  },
  searchBarContainer: {
    marginTop: 80,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  backIcon: {
    marginLeft: 12,
    width: 24,
    height: 24,
    tintColor: colors.Blue_green,
  },
  input: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
  },
  emptyStateContainer: {
    flex: 1,
    marginBottom: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cloudImage: {
    width: 180,
    height: 150,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: '#777',
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
  middleWidth: {
    borderWidth: 1,
    borderColor: colors.whiteEA,
    marginHorizontal: 10.25,
  },
});
export default styles;
