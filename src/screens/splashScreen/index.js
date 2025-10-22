import {View, Image, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import {Images} from '../../assets';
import {screenNames} from '../../utils/screenNames';
import {useSelector} from 'react-redux';

function SplashScreen() {
  const navigation = useNavigation();

  const token = useSelector(state => state.Authentication?.token);

  useEffect(() => {
    const checkAuthAndOnboarding = async () => {
      try {
        const hasSeenOnboarding = await AsyncStorage.getItem(
          'hasSeenOnboarding',
        );

        setTimeout(() => {
          if (!hasSeenOnboarding) {
            navigation.replace(screenNames.ONBOARDING);
          } else if (token) {
            navigation.replace(screenNames.DRAWER_TAB);
          } else {
            navigation.replace(screenNames.LOGIN);
          }
        }, 2000);
      } catch (error) {
        navigation.replace(screenNames.LOGIN);
      }
    };

    checkAuthAndOnboarding();
  }, [token, navigation]);

  return (
    <View style={styles.root}>
      <ImageBackground source={Images.splashImage} style={styles.imgBackground}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={Images.appLogo}
        />
      </ImageBackground>
    </View>
  );
}

export default SplashScreen;
