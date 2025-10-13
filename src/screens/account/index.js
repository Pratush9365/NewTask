import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../utils/colors'


const accountScreen = () => {
  return (
    <View style={styles.screenContainer}>
    
      <View style={styles.container}>
      <Text style={styles.title}>My Account</Text>
      <Text style={styles.subtitle}>Manage Your Account</Text>
      <View style={styles.content}>
        <Text style={styles.text}>This is the My Account screen content.</Text>
        <Text style={styles.text}>View and edit your account details here.</Text>
      </View>
      </View>
    </View>
  )
}

export default accountScreen

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