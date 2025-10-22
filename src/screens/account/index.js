import {View, Text, StyleSheet} from 'react-native';
import styles from './styles';

const AccountScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>My Account</Text>
        <Text style={styles.subtitle}>Manage Your Account</Text>
        <View style={styles.content}>
          <Text style={styles.text}>
            This is the My Account screen content.
          </Text>
          <Text style={styles.text}>
            View and edit your account details here.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AccountScreen;
