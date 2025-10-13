import { StyleSheet } from "react-native";
import colors from "../../../utils/colors";
import fonts from "../../../assets/fonts";
const styles = StyleSheet.create({
  modalContainer: {
    flex: 0.4,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalTitleSection: {
    flex: 1,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: fonts.SEMI,
    color: colors.blackf5f,
    marginBottom: 6,
  },
  modalSubtitle: {
    fontSize: 14,
    color: colors.gray07D,
    fontFamily: fonts.MEDIUM,
  },
  closeButton: {
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  closeButtonIcon: {
    width: 10,
    height: 10,
    tintColor: colors.blackf5f
  },
  searchBarContainer: {
    marginTop: 12,
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white9F9,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
    tintColor: colors.gray29C,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: colors.gray3BA,
    fontFamily: fonts.MEDIUM,
  },
  siteItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.blackF6,
  },
  siteItemText: {
    fontSize: 14,
    marginTop: 24,
    color: colors.gray07D,
    fontFamily: fonts.MEDIUM,
  },
});
export default styles;
