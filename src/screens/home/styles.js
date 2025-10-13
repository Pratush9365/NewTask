import { StyleSheet } from "react-native";
import colors from "../../utils/colors";



const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.GhostWhite,
  },
  headerContainer: {
    backgroundColor: colors.MediumBlue,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 30,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },ImagebackgroundGround:{
   width:40,
   height:40,
   borderRadius:40,
   backgroundColor:colors.MediumBlue,
   justifyContent:"center",
   alignItems:"center"
  },
  headerCenter: {

    alignItems: "center",
    justifyContent: "center",
    marginTop:29
  },
  text1: {
    fontSize: 10,
    fontWeight: "600",
    color: colors.white,
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "Montserrat-SemiBold"
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.white,
    textAlign: "center",
    marginTop: 2,
    fontFamily:"Montserrat-SemiBold"
  },
  menuIcon: {
    width: 20,
    height: 20,
  },
  badgeText: {
    color: "#fff",
    fontWeight: "700",
    marginRight: 6,
    position:"absolute",
    bottom:19,
    left:32
  }, SplashImage:{
     flex: 1,
    backgroundColor:colors.MediumBlue, 
    justifyContent: "center",
    alignItems: "center",

  },ImageSize:{
    width:120,
    height:120,
    borderRadius:12

  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 10,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
    backgroundColor: colors.pale_Blue_gray,
    marginHorizontal: 6,
    borderWidth:0.8,
    borderColor:colors.black152D4012
  },
  activeTabButton: {
    backgroundColor: colors.MediumBlue,
    borderColor:colors.white
  },
  tabText: {
    fontSize: 15,
    fontWeight: "600",
    fontFamily:"Montserrat-SemiBold"
  },
  activeTabText: {
    color: colors.white,
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 10,
  },
  inputBox: {
   flex:1,
   alignItems:"center",
   flexDirection:"row",
   backgroundColor: colors.white,
   borderRadius:50,
   borderColor: colors.lightShadeBlue,
   borderWidth:1,
   paddingLeft:10,
  },inputBox1:{
   paddingTop: 18,
   paddingRight: 20,
   paddingBottom:18,
   paddingLeft:20,
   fontSize: 14,
   fontWeight:"400",
   fontFamily:"Montserrat-Regular",
   },
  filterIcon: {
    marginLeft: 10,
    backgroundColor: colors.white,
    width:56,
    height:56,
    padding: 16,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.lightShadeBlue,
  },filterView:{
    width:24,
    height:24,
    backgroundColor:colors.white,
    justifyContent:"center",
    alignItems:"center"

  },filtericonSize:{
  width:18,
  height:12
  },Teg:{
    marginLeft:20,
    fontFamily:"Montserrat-Medium",
    fontWeight:"500"

  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    // shadowColor: "#000",
    // shadowOpacity: 0.08,
    // shadowOffset: { width: 0, height: 4 },
    // shadowRadius: 6,
       elevation: 1,
  },cardItems:{
    flexDirection: "row",
    alignItems: "center" 

  },
  image: {
    width: 72,
    height: 72,
    borderRadius:3,
    marginRight: 10,
    backgroundColor:colors.MediumBlue
  },
  category: {
    backgroundColor: colors.paleBlue,
    color: colors.MediumBlue,
    fontWeight: "600",
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    marginInline:4,
    fontFamily:"Montserrat-SemiBold"
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 10,
    color: "#222",
    fontFamily:"Bold"
  },
  featuresContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 12,
  },
  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    marginVertical: 4,
  },featureItem:{
    width:20,
    height:20,
    borderRadius:10,
    backgroundColor:colors.checkbackgroundColor,
    justifyContent:"center",
    alignItems:"center",
    marginRight:12
},
  check: {
    color: colors.MediumBlue,
    width:14,
    height:14,
  },
  featureText: {
    fontSize: 14,
    color: "#555",
    fontWeight:"500",
    fontFamily:"Montserrat-Medium",
      
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: colors.MediumBlue,
    paddingTop: 18,
  },
  footer1: {
    flexDirection: "column",
    marginTop: 3,
  },footerItem:{
    color: colors.Blue_green,
    fontWeight: "600", 
    fontFamily:"Montserrat-SemiBold",
    fontSize:12 
 },
  price: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.Blue_green,
    fontFamily:"Montserrat-Bold"
  },
  button: {
    backgroundColor: colors.MediumBlue,
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft:32,
    paddingRight:32,
    borderRadius: 60,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
    fontFamily:"Montserrat-SemiBold"
  },ButtonBackground:{
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft:32,
    paddingRight:32,
    borderRadius: 60,
    borderWidth:1,
    borderColor:colors.MediumBlue,
     borderRadius: 60,
  },Footer1:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    gap:8
  },ButtonText:{
     fontSize:16,
    color: colors.MediumBlue ,
    fontFamily:"Montserrat-SemiBold",
    fontWeight:"600"
  }
});
export default styles;