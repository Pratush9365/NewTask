import { View, Text,TouchableOpacity,FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import styles from './styles'
import { apiData } from '../../redux/slice/asyncOperation/index';
import { icons } from '../../assets';
import { useNavigation } from '@react-navigation/native';



const apiDataScreen = () => {

 const APIData=useSelector(state=>state.apiData.Data.users)
 const [remove,setremoved]=useState(false)
const dispatch=useDispatch();

const navigation=useNavigation();
  const handleAPIDATA=()=>{
  dispatch(apiData())
 setremoved(true)

  }
  const RemoveData=()=>{
    setremoved(false)
  }
  return (
    <View style={styles.container}>
   <View style={{marginTop:60,marginLeft:20,width:60,height:60,backgroundColor:colors.white6ff,justifyContent:"center",alignItems:"center",borderRadius:32}} >
    <TouchableOpacity onPress={()=>navigation.goBack()} hitSlop={{top:20,right:20,left:20,bottom:20}}>
    <Image source={icons.backIcon} style={{width:24,height:24,borderRadius:12}}/>
    </TouchableOpacity>
   </View>


<View style={{marginTop:42,flexDirection:"row",justifyContent:"space-between"}}>
 <TouchableOpacity style={styles.fetchButton} onPress={handleAPIDATA}>
          <Text style={styles.fetchButtonText}>Fetch APi Data</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fetchButton} onPress={RemoveData}>
          <Text style={styles.fetchButtonText}>removedata</Text>
        </TouchableOpacity>
        </View>
           

<View style={{padding:20,marginTop:30}}>
      {remove &&
<FlatList
  data={APIData}   
  keyExtractor={(item, index) => index.toString()}
    showsVerticalScrollIndicator={false}
  renderItem={({ item }) => (
    
 <View style={styles.card}>
 
  <Text style={styles.cardText}>Name: {item.firstName} {item.lastName}</Text>
  <Text style={styles.cardText}>Email: {item.email}</Text>

  </View>
  )}
/>
}</View>
    </View>
  )
}

export default apiDataScreen;