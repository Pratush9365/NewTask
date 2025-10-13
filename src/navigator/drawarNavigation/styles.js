import { StyleSheet } from "react-native"
import colors from "../../utils/colors"
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: colors.Blue,
    alignItems: 'center',
  },
  headercontainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  card: {
    flex: 1,
    paddingTop: 20,
  },
  Secton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  ImagesBackground: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.paleBlue,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  icon: {
    width: 20,
    height: 20,
  },
  sectionText: {
    flex: 1,
    fontSize: 16,
    color: colors.Blue_green,
    fontWeight: '500',
  },
  arrow: {
    width: 16,
    height: 16,
  },

})
export default styles;