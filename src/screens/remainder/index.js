import {View, Text} from 'react-native';
import styles from './styles';

const RemainderScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Reminder Screen</Text>
        <Text style={styles.subtitle}>Set Your Reminders</Text>
        <View style={styles.content}>
          <Text style={styles.text}>This is the Reminder screen content.</Text>
          <Text style={styles.text}>
            Create and manage your reminders here.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RemainderScreen;
