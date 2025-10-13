import {Text, View,} from 'react-native'
import styles from './styles';


const shopScreen = () => {
  return (
    <View style={styles.screenContainer}>

      <View style={styles.container}>
        <Text style={styles.title}>Shop Screen</Text>
        <Text style={styles.subtitle}>Welcome to the Shop!</Text>
        <View style={styles.content}>
          <Text style={styles.text}>This is the Shop screen content.</Text>
          <Text style={styles.text}>You can browse and purchase items here.</Text>
        </View>
      </View>
    </View>
  )
}

export default shopScreen

