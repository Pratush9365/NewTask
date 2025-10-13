import { View, Text,} from 'react-native'
import styles from './styles'


const notificationScreen = () => {
  return (
    <View style={styles.screenContainer}>

      <View style={styles.container}>
      <Text style={styles.title}>Notification Screen</Text>
      <Text style={styles.subtitle}>Your Notifications</Text>
      <View style={styles.content}>
        <Text style={styles.text}>This is the Notification screen content.</Text>
        <Text style={styles.text}>View all your notifications here.</Text>
      </View>
      </View>
    </View>
  )
}

export default notificationScreen

