import { StyleSheet } from "react-native"
import colors from "../../utils/colors"
import fonts from "../../assets/fonts"
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.Blue_green,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: colors.Blue,
    marginBottom: 20,
  },
  content: {
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: colors.Blue_green,
    marginBottom: 10,
    textAlign: 'center',
  },
})
export default styles;