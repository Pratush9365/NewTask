import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from "react-native";
import { CommonActions } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./style";
import { icons } from "../../assets";
import strings from "../../utils/strings";

export default function ResetPassword({ navigation }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const hasMinLength = password.length >= 8;
  const hasSpecialChar = /[@$!%*?&]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasUpperLower = /(?=.*[a-z])(?=.*[A-Z])/.test(password);

  const handleUpdate = () => {
    const isValid = hasMinLength && hasSpecialChar && hasNumber && hasUpperLower;

    if (!isValid) {
      Alert.alert(strings.invalidPasswordTitle, strings.invalidPasswordMessage);
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert(strings.passwordMismatchTitle, strings.passwordMismatchMessage);
      return;
    }

    Alert.alert(strings.passwordUpdateSuccessTitle, strings.passwordUpdateSuccessMessage);

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: strings.loginScreen }],
      })
    );
  };

  const isFormValid =
    hasMinLength &&
    hasNumber &&
    hasSpecialChar &&
    hasUpperLower &&
    password === confirmPassword;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{strings.resetPasswordTitle}</Text>
      <Text style={styles.subtitle}>{strings.resetPasswordSubtitle}</Text>

      <Text style={styles.textStyle}>{strings.newPasswordLabel}</Text>
      <TextInput
        placeholder={strings.newPasswordPlaceholder}
        value={password}
        onChangeText={setPassword}
        maxLength={16}
        secureTextEntry={!visible1}
        style={styles.inputText}
      />
      <TouchableOpacity
        onPress={() => setVisible1(!visible1)}
        style={styles.iconstyle}
        hitSlop={{ top: 22, bottom: 22, left: 22, right: 22 }}
      >
        <Image
          source={visible1 ? icons.passwordSeen : icons.eyeOffIcon}
          style={styles.iconSize}
        />
      </TouchableOpacity>

      <Text style={styles.textStyle}>{strings.confirmPasswordLabel}</Text>
      <TextInput
        placeholder={strings.confirmPasswordPlaceholder}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        maxLength={16}
        secureTextEntry={!visible}
        style={styles.inputText}
      />
      <TouchableOpacity
        onPress={() => setVisible(!visible)}
        style={styles.iconstyle}
        hitSlop={{ top: 22, bottom: 22, left: 22, right: 22 }}
      >
        <Image
          source={visible ? icons.passwordSeen : icons.eyeOffIcon}
          style={styles.iconSize}
        />
      </TouchableOpacity>

      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
        <View style={styles.conditions}>
          <Image
            source={
              password.length === 0
                ? icons.ResetScreencircle
                : hasMinLength
                ? icons.conditionCheckicon
                : icons.ResetScreencircle
            }
          />
          <Text style={styles.conditionsText}>{strings.conditionMinLength}</Text>
        </View>

        <View style={styles.conditions1}>
          <Image
            source={
              password.length === 0
                ? icons.ResetScreencircle
                : hasSpecialChar
                ? icons.conditionCheckicon
                : icons.ResetScreencircle
            }
          />
          <Text style={styles.conditionsText}>{strings.conditionSpecialChar}</Text>
        </View>

        <View style={styles.conditions1}>
          <Image
            source={
              password.length === 0
                ? icons.ResetScreencircle
                : hasNumber
                ? icons.conditionCheckicon
                : icons.ResetScreencircle
            }
          />
          <Text style={styles.conditionsText}>{strings.conditionNumber}</Text>
        </View>

        <View style={styles.conditions1}>
          <Image
            source={
              password.length === 0
                ? icons.ResetScreencircle
                : hasUpperLower
                ? icons.conditionCheckicon
                : icons.ResetScreencircle
            }
          />
          <Text style={styles.conditionsText}>{strings.conditionUpperLower}</Text>
        </View>
      {/* </ScrollView> */}

      <TouchableOpacity
        style={[
          styles.updateBtn,
          isFormValid && !buttonDisabled ? styles.btnVisible : styles.btnNotVisible,
        ]}
        onPress={handleUpdate}
        disabled={!isFormValid}
      >
        <Text style={styles.updateText}>{strings.updateButton}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <View style={{ flexDirection: "row" }}>
          <Image source={icons.resetScreenBackbtn} style={styles.backBtn1} />
          <Text style={styles.backText}>{strings.backButton}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
