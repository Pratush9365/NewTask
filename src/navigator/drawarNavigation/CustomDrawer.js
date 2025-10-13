import {View, Image, Text, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Images, icons} from '../../assets';
import styles from './styles';
import strings from '../../utils/strings';
import {screenNames} from '../../utils/screenNames';
import {ScrollView} from 'react-native-gesture-handler';
import {logout} from '../../redux/slice/login';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

const CustomDrawer = ({navigation}) => {
  const rootNavigation = useNavigation();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headercontainer}>
          <Image source={Images.profileImage} style={styles.profileImage} />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.card}>
          <TouchableOpacity
            onPress={() => navigation.navigate(screenNames.BOTTOM_TAB)}>
            <View style={styles.Secton}>
              <View style={styles.ImagesBackground}>
                <Image source={icons.HomeIcon} style={styles.icon} />
              </View>
              <Text style={styles.sectionText}>{strings.home}</Text>
              <Image source={icons.TextIcon} style={styles.arrow} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate(screenNames.SHOP)}>
            <View style={styles.Secton}>
              <View style={styles.ImagesBackground}>
                <Image source={icons.DrawerShop} style={styles.icon} />
              </View>
              <Text style={styles.sectionText}>{strings.shop}</Text>
              <Image source={icons.TextIcon} style={styles.arrow} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate(screenNames.SECHDULE)}>
            <View style={styles.Secton}>
              <View style={styles.ImagesBackground}>
                <Image source={icons.DrawerSechdule} style={styles.icon} />
              </View>
              <Text style={styles.sectionText}>{strings.schedule}</Text>
              <Image source={icons.TextIcon} style={styles.arrow} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate(screenNames.Remainder)}>
            <View style={styles.Secton}>
              <View style={styles.ImagesBackground}>
                <Image source={icons.Notifiactions} style={styles.icon} />
              </View>
              <Text style={styles.sectionText}>{strings.reminders}</Text>
              <Image source={icons.TextIcon} style={styles.arrow} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate(screenNames.ACCOUNT)}>
            <View style={styles.Secton}>
              <View style={styles.ImagesBackground}>
                <Image source={icons.Account} style={styles.icon} />
              </View>
              <Text style={styles.sectionText}>{strings.myAccount}</Text>
              <Image source={icons.TextIcon} style={styles.arrow} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate(screenNames.CART)}>
            <View style={styles.Secton}>
              <View style={styles.ImagesBackground}>
                <Image source={icons.cartIconDrawer} style={styles.icon} />
              </View>
              <Text style={styles.sectionText}>{strings.cart}</Text>
              <Image source={icons.TextIcon} style={styles.arrow} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate(screenNames.NOTIFICATION)}>
            <View style={styles.Secton}>
              <View style={styles.ImagesBackground}>
                <Image source={icons.Notifiactions} style={styles.icon} />
              </View>
              <Text style={styles.sectionText}>{strings.notifications}</Text>
              <Image source={icons.TextIcon} style={styles.arrow} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Alert.alert(strings.logoutTitle, strings.logoutMessage, [
                {
                  text: strings.cancel,
                  onPress: () => navigation.navigate(screenNames.BOTTOM_TAB),
                },
                {
                  text: strings.yes,
                  onPress: async () => {
                    try {
                      dispatch(logout());
                      navigation.closeDrawer();
                      rootNavigation.replace(screenNames.LOGIN);
                    } catch (err) {
                      setError(err);
                    }
                  },
                },
              ])
            }>
            <View style={styles.Secton}>
              <View style={styles.ImagesBackground}>
                <Image source={icons.Logout} style={styles.icon} />
              </View>
              <Text style={styles.sectionText}>{strings.logout}</Text>
              <Image source={icons.TextIcon} style={styles.arrow} />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CustomDrawer;
