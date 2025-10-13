import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles=StyleSheet.create({
container:{
    flex:1,
    backgroundColor:colors.white
},

card: {
    marginTop:20,
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingTop: 40,
    paddingBottom:40,
    paddingLeft:20,
    paddingRight:20,
    borderRadius:12,
    marginRight: 12,
    // shadowColor: '#000',
    // shadowOpacity: 0.08,
    // shadowRadius: 6,

  },
  Text:{
    color:'#0000',
    fontSize:12
  },
   fetchButton: {
    marginTop:20,
    backgroundColor: colors.MediumBlue,
    padding:20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 12,
    marginLeft:20,
    marginRight:20

  },fetchButton1:{
     marginTop:20,
    backgroundColor: colors.MediumBlue,
    padding:20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 12,
    marginLeft:20,

  },
  
  
  
  
  fetchButtonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '600',
  },

})
export default styles;