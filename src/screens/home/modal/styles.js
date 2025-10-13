import { StyleSheet } from "react-native";
import colors from "../../../utils/colors";
const styles = StyleSheet.create({
 modalContainer: {
  backgroundColor: "white",
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  padding: 20,
  paddingBottom:20
  },
  textStyle:{
 color: "white",
 fontSize:18,
 position:"absolute",
 bottom:10,
 left:60 

  },backDropColor:{
color:"rgba(8,16,23,1)"
  },
  
  
  
  textStyle1:{
    color:"blue",
    fontSize:18,
    position:"absolute",
    bottom:10,
    left:54
},
  modalTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
  },
  filterRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  filterText: {
    fontSize: 15,
    marginLeft: 8,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    borderColor:22,
    gap:43,

  },
  resetButton: {
    flex:1,
    borderWidth: 1,
    width:"5%",
    height:"10%",
    borderColor: "#001279",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 24,
  },
  applyButton: {
    flex:1,
    boarderwidth:1,
     width:"5%",
    height:"10%",
    backgroundColor: "#001279",
    paddingVertical: 21,
    paddingHorizontal: 30,
    borderRadius: 34,
  },
});
export default styles;