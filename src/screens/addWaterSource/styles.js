import {StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';
import colors from '../../utils/colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroungcolor: colors.lightShadeBlue,
  },
  labelText: {
    fontFamily: fonts.MEDIUM,
    fontSize: 11,
    color: colors.gray07D,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 20,
    marginHorizontal: 16,
  },
  textInputStyle4: {
    flex: 1,
    marginLeft: 16,
  },
  selectedText: {
    fontSize: 16,
    marginTop: 6,
    fontFamily: fonts.MEDIUM,
    color: colors.blackf5f,
  },
  selectBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: colors.white,
    borderRadius: 8,
  },
  selectBox1: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: colors.white,
    borderRadius: 8,
  },
  costBox: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 16,
    paddingRight: 12,
    backgroundColor: colors.white,
    borderRadius: 8,
  },
  textInputStyle: {
    flex: 1,
    fontSize: 16,
    fontFamily: fonts.MEDIUM,
    color: colors.gray3BA,
    marginLeft: 16,
  },
  textInputStyle1: {
    fontSize: 12,
    fontFamily: fonts.MEDIUM,
    color: colors.gray3BA,
  },
  textInputStyle2: {
    flex: 1,
    fontSize: 16,
    fontFamily: fonts.MEDIUM,
    color: colors.blackf5f,
    marginLeft: 16,
  },
  images: {
    width: 24,
    height: 24,
  },
  dollarIcon: {
    width: 24,
    height: 24,
  },
  saveButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 163.5,
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: colors.MediumBlue,
  },
  saveButtonText: {
    fontSize: 14,
    color: colors.white,
    fontFamily: fonts.SEMI,
  },
  footer: {
    justifyContent: 'flex-end',
    marginBottom: 40,
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export const styless = StyleSheet.create({
  modalContainer: {
    flex: 0.4,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  modalHeader1: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modalTitleSection: {
    flex: 1,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: fonts.SEMI,
    color: colors.blackf5f,
  },
  closeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  closeButtonIcon: {
    width: 12,
    height: 12,
    tintColor: colors.BlackColor5F,
  },
  siteItem: {
    paddingVertical: 20,
    borderBottomWidth: 4,
    borderBottomColor: colors.blackF6,
  },
  siteItemText: {
    fontSize: 16,
    color: colors.blackf5f,
    fontFamily: fonts.MEDIUM,
  },
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonText: {
    width: 10,
    height: 10,
  },
});
