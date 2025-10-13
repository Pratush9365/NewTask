import { Text, View } from 'react-native'
import styles from './styles'

const scheduleScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Schedule Screen</Text>
        <Text style={styles.subtitle}>Manage Your Schedule</Text>
        <View style={styles.content}>
          <Text style={styles.text}>This is the Schedule screen content.</Text>
          <Text style={styles.text}>View and manage your appointments here.</Text>
        </View>
      </View>
    </View>
  )
}

export default scheduleScreen

