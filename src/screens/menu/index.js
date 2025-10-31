import {View, Text, TouchableOpacity} from 'react-native';
import CustomHeader from '../../headerCustomComponent';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import strings from '../../utils/strings';
import {screenNames} from '../../utils/screenNames';

const MenuScreen = () => {
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
          <Text style={styles.text}>{strings.chemiaclInventory}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate(screenNames.AQUA_LAB_SYSTEAM)}>
          <Text style={styles.text}>{strings.aquaLabSystem}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate(screenNames.WATER_SOURCE_SCREEN)}>
          <Text style={styles.text}>{strings.waterSource}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box}>
          <Text style={styles.text}>{strings.location}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuScreen;
