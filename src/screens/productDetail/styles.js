import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../assets/fonts';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.paleBlue,
  },
  headercontainer: {
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingBottom: 10,
    paddingTop: 40,
    paddingBottom: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  headerStyle: {
    fontSize: 18,
    color: '#152D40',
    fontFamily: fonts.SEMI,
  },
  icon: {
    width: 48,
    height: 48,
    borderRadius: 48,
    backgroundColor: colors.paleBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    backgroundColor: colors.MediumBlue,

    borderRadius: 10,
  },
  section: {
    marginTop: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 6,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
    marginHorizontal: 20,
    paddingHorizontal: 16,
  },
  section1: {
    marginTop: 16,
    marginHorizontal: 20,
  },
  card2: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  card3: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  Description: {
    marginHorizontal: 20,
    marginVertical: 20,
  },

  card: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: colors.paleBlue,
    color: colors.MediumBlue,
    fontWeight: '600',
    fontSize: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    fontFamily: fonts.SEMI,
    marginLeft: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.Blue_green,
    marginTop: 12,
    fontFamily: fonts.SEMI,
  },
  subtitle: {
    fontSize: 14,
    color: colors.Blue_green,
    marginTop: 4,
    fontFamily: fonts.REGULAR,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.Blue_green,
    marginTop: 12,
    fontFamily: fonts.SEMI,
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: '#152D40',
    marginTop: 4,
    fontFamily: fonts.BOLD,
  },
  redeem: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.paleBlue,
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
  },
  redeemText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.Blue_green,
    flex: 1,
    fontFamily: fonts.REGULAR,
  },
  arrow: {
    fontSize: 18,
    color: colors.Blue_green,
    marginLeft: 8,
  },
  sectionTitle: {
    marginTop: 20,
    marginleft: 10,
    fontSize: 14,
    fontWeight: '600',
    color: colors.Blue_green,
    marginBottom: 16,
    rowGap: 18,
    fontFamily: fonts.SEMI,
  },

  row: {
    flexDirection: 'row',
    //  alignItems: "center",
    width: '43%',
    marginBottom: 16,
    paddingHorizontal: 2,
  },
  Check: {
    width: 24,
    height: 24,
    marginRight: 10,
    borderRadius: 40,
    backgroundColor: colors.paleBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageSize: {
    width: 14,
    height: 14,
  },

  text: {
    fontSize: 16,
    color: colors.Blue_green,
    fontWeight: '400',
    lineHeight: 31,
    fontFamily: fonts.MEDIUM,
  },
  text1: {
    fontSize: 14,
    color: colors.Blue_green,
    lineHeight: 21,
    fontFamily: fonts.SEMI,
  },

  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: fonts.SEMI,
    color: colors.white,
  },
  button: {
    marginBottom: 20,
    marginHorizontal: 20,
    backgroundColor: colors.MediumBlue,
    padding: 12,
    borderRadius: 30,
  },
});
export default styles;
