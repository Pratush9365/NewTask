import { View, Text, StyleSheet } from 'react-native'
import styles from './styles'

const cartScreen = () => {
  return (
    <View style={styles.screenContainer}>
   
      <View style={styles.container}>
      <Text style={styles.title}>Cart Screen</Text>
      <Text style={styles.subtitle}>Your Shopping Cart</Text>
      <View style={styles.content}>
        <Text style={styles.text}>This is the Cart screen content.</Text>
        <Text style={styles.text}>View and manage your cart items here.</Text>
      </View>
      </View>
    </View>
  )
}

export default cartScreen

