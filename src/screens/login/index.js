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
import {useSelector, useDispatch} from 'react-redux';
import {Authentication, Email, Password} from '../../redux/slice/login';
import strings from '../../utils/strings';
import {screenNames} from '../../utils/screenNames';
import {ScrollView} from 'react-native-gesture-handler';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);
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
    setButtonDisabled(true);
    setloading(true);

    try {
      const resultAction = await dispatch(
        Authentication({email: email, password: password}),
      );
      console.log('resultAction', resultAction);
      Toast.show({
        type: 'success',
        text1: strings.loginSuccessTitle,
        text2: 'Welcome back!',
        topOffset: 40,
        position: 'top',
      });
      console.log('resultAction', resultAction);
      if (resultAction?.statusCode === 200)
        // navigation.replace(screenNames.DRAWER_TAB);
        console.log('>>>>>>', resultAction);
      else {
        Toast.show({
          type: 'error',
          text1: strings.errorTitle,
          text2: resultAction?.payload || error,
          topOffset: 40,
          position: 'top',
        });
      }
      setloading(false);
    } catch (error) {
      setTimeout(() => {
        Toast.show({
          type: 'error',
          text1: strings.errorTitle,
          text2: error?.message || error,
          topOffset: 40,
          position: 'top',
        });
        setloading(false);
        setButtonDisabled(false);
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

          {passwordError ? (
            <Text style={styles.errorText}>{passwordError}</Text>
          ) : null}
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            hitSlop={{top: 12, right: 12, bottom: 12, left: 12}}>
            <Image
              source={showPassword ? icons.passwordSeen : icons.eyeOffIcon}
              style={styles.passwordicon}
            />
          </TouchableOpacity>

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
              isFormValid && !buttonDisabled
                ? styles.Visible
                : styles.notVisible,
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
