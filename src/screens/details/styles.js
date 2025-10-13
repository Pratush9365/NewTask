import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 16,
  },

  fetchButton: {
    marginTop:20,
    backgroundColor: colors.MediumBlue,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  fetchButtonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '600',
  },

  

  card: {
    marginTop:20,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,

  },
  cardText: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 3,
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  smallButton: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 6,
    marginLeft: 8,
  },
  smallButtonText: {
    color: colors.white,
    fontWeight: '600',
  },

  formContainer: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },

  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.black152D4012,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 14,
    color: colors.Blue_green,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    flex: 1,
    backgroundColor: colors.MediumBlue,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonClear: {
    flex: 1,
    backgroundColor: colors.red,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 14,
  },
});
export default styles;