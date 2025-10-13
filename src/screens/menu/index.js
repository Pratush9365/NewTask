import {View, Text, TouchableOpacity} from 'react-native';
import CustomHeader from '../../headerCustomComponent';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const menuScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <CustomHeader
        title="MenuScreen"
        subtitle="PBA1"
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.grid}>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.text}>Chemical Inventory</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box}>
          <Text style={styles.text}>Packages</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('waterSourceScreen')}>
          <Text style={styles.text}>Water Source</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box}>
          <Text style={styles.text}>Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default menuScreen;
