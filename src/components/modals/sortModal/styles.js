import {StyleSheet} from 'react-native';
import fonts from '../../../assets/fonts';
import colors from '../../../utils/colors';
const styles = StyleSheet.create({
  modalContainer: {
    flex: 0.4,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 24,
    paddingRight: 24,
    paddingLeft: 24,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: fonts.SEMI,
    color: colors.blackf5f,
  },
  closeIcon: {
    width: 12,
    height: 12,
    tintColor: colors.Blue_green,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
  },
  optionBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.whiteEA,
  },
  inlineIcon: {
    width: 11,
    marginLeft: 4,
    tintColor: colors.blackF6,
  },
  optionText: {
    fontSize: 14,
    marginLeft: 8,
    fontFamily: fonts.MEDIUM,
    color: colors.Blue_green,
  },
  optionText1: {
    fontSize: 14,
    marginLeft: 16,
    fontFamily: fonts.MEDIUM,
    color: colors.Blue_green,
  },
  radioCircle: {
    width: 24,
    height: 24,
  },
});
export default styles;
