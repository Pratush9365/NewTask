import {View, Text, Image} from 'react-native';
import {Images} from '../../assets';
import styles from './styles';
const toastConfig = {
  error: props => (
    <View style={styles.container}>
      <View style={styles.headercontainer}>
        <Image source={Images.toastCrossIcon} resizeMode="contain" />
      </View>
      <View>
        <Text style={styles.text1}>{props.text1}</Text>
        <Text style={styles.text2}>{props.text2}</Text>
      </View>
    </View>
  ),
};

export default toastConfig;
