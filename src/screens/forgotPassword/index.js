import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  Pressable,
} from 'react-native';
import {Images, icons} from '../../assets';
import Modal from 'react-native-modal';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './style';
import strings from '../../utils/strings';
import {screenNames} from '../../utils/screenNames';

export default function ForgotPassword({navigation}) {
  const [email, setEmail] = useState('');
  const [Modalvisible, SetModalVisible] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const validateEmail = text => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(text);
  };

  const handleVerify = () => {
    if (!validateEmail(email)) {
      Alert.alert(strings.errorTitle, strings.invalidEmailMessage);
      return;
    }
    const foundUser = userdata.find(item => item.email === email);
    setButtonDisabled(true);
    if (foundUser) {
      SetModalVisible(true);
    } else {
      Alert.alert(strings.userNotFoundMessage);
    }
  };

  const loginFunction = () => {
    navigation.navigate(screenNames.RESET);
    SetModalVisible(false);
  };

  const isFormValid = validateEmail(email);

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Pressable onPress={() => navigation.goBack()}>
          <View style={styles.backicon}>
            <Image source={icons.backIcon} style={styles.imageSize} />
          </View>
        </Pressable>
        <Text style={styles.title}>{strings.forgotPasswordTitle}</Text>
      </View>

      <Text style={styles.subtitle}>{strings.forgotPasswordSubtitle}</Text>
      <Text style={styles.email}>{strings.emailLabel}</Text>

      <TextInput
        placeholder={strings.emailPlaceholder}
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TouchableOpacity
        style={[
          styles.verifyBtn,
          isFormValid && !buttonDisabled
            ? styles.btnopacity
            : styles.btnopacity1,
        ]}
        onPress={handleVerify}>
        <Text style={styles.verifyText}>{strings.verifyButton}</Text>
      </TouchableOpacity>

      <Modal
        style={styles.modalHeader}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        isVisible={Modalvisible}
        onRequestClose={() => SetModalVisible(false)}
        onBackdropPress={() => SetModalVisible(false)}
        backdropOpacity={0.6}
        useNativeDriver
        backdropColor="rgba(8,16,23,1)">
        <SafeAreaView style={{backgroundColor: 'transparent'}}>
          <View style={styles.modalView}>
            <View style={styles.modalContainer}>
              <Image source={Images.MailBox} style={styles.mailImage} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.modalText}>{strings.linkSentTitle}</Text>
              <Text style={styles.modalText2}>
                {strings.linkSentDescription}
                <Text style={styles.emailText}> {email} </Text>
              </Text>
            </View>
            <TouchableOpacity onPress={loginFunction} style={styles.loginbtn}>
              <Text style={styles.loginText}>{strings.loginButton}</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
}
