import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import {Images, icons} from '../../assets';
import styles from './styles';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import {authentication} from '../../redux/slice/login';
import strings from '../../utils/strings';
import {screenNames} from '../../utils/screenNames';
import {ScrollView} from 'react-native-gesture-handler';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setloading] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const dispatch = useDispatch();
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert(strings.errorTitle, 'Please enter both email and password');
      return;
    }
    if (password.length < 6) {
      Alert.alert(strings.errorTitle, strings.passwordTooShort);
      return;
    }

    setloading(true);

    try {
      const result = await dispatch(authentication({email, password})).unwrap();
      if (result && result.access_token) {
        Toast.show({
          type: 'success',
          text1: 'Login Successful',
          text2: 'Welcome back!',
        });
        navigation.replace(screenNames.DRAWER_TAB);
      }
    } catch (error) {
      setTimeout(() => {
        Toast.show({
          type: 'error',
          text1: strings.errorTitle,
          text2: strings.errorMessage1,
          topOffset: 40,
          position: 'top',
        });
        setloading(false);
      }, 3000);
    }
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isFormValid = emailRegex.test(email.trim()) && password.length >= 8;

  return (
    <View style={styles.container}>
      <View style={styles.containerItem}>
        <ImageBackground
          source={Images.VectorImage}
          style={styles.backgroundImage}>
          <View style={styles.containerItem1}>
            <Image source={Images.appLogo} style={styles.ImageStyle} />
            <Text style={styles.title}>{strings.welcomeTitle}</Text>
            <Text style={styles.Texts1}>{strings.welcomeSubtitle}</Text>
          </View>
        </ImageBackground>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.textHeader}>
          <Text style={styles.Texts}>{strings.emailLabel}</Text>
          <TextInput
            placeholder={strings.emailPlaceholder}
            value={email}
            onChangeText={text => {
              setEmail(text);
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailRegex.test(text)) {
                setError(strings.invalidEmail);
              } else {
                setError('');
              }
            }}
            style={[styles.input, error ? styles.errorborder : null]}
          />
          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <Text style={styles.Texts}>{strings.passwordLabel}</Text>
          <View>
            <TextInput
              placeholder={strings.passwordPlaceholder}
              value={password}
              onChangeText={text => {
                setPassword(text);
                if (text.length < 8) {
                  setPasswordError(strings.invalidPassword);
                } else {
                  setPasswordError('');
                }
              }}
              secureTextEntry={!showPassword}
              style={[styles.input, passwordError ? styles.errorborder : null]}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              hitSlop={{top: 12, right: 12, bottom: 12, left: 12}}>
              <Image
                source={showPassword ? icons.passwordSeen : icons.eyeOffIcon}
                style={styles.passwordicon}
              />
            </TouchableOpacity>
          </View>
          {passwordError ? (
            <Text style={styles.errorText}>{passwordError}</Text>
          ) : null}

          {loading && (
            <View style={styles.overlay}>
              <ActivityIndicator size="large" />
            </View>
          )}
          <TouchableOpacity
            onPress={() => navigation.navigate(screenNames.FORGOT)}>
            <Text style={styles.forgot}>{strings.forgotPassword}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.loginBtn,
              isFormValid && !loading ? styles.Visible : styles.notVisible,
            ]}
            onPress={handleLogin}
            disabled={!isFormValid}>
            <Text style={styles.loginText}>{strings.loginButton}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footerText}>
        <Text style={styles.register}>
          {strings.noAccountText}{' '}
          <Text
            style={styles.registerText}
            onPress={() => navigation.navigate('Register')}>
            {strings.registerText}
          </Text>
          <Text style={styles.register}> {strings.nowText}</Text>
        </Text>
      </View>
    </View>
  );
}
