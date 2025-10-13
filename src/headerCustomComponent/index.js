import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  Pressable,
} from 'react-native';
import {icons} from '../assets';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';

const CustomHeader = ({
  title,
  subtitle,
  onBackPress,
  Image1,
  Image2,
  onNotificationPress,
  onUserPress,
  onSubtitlePress,
  showIconBackground = false,
}) => {
  const inset = useSafeAreaInsets();

  return (
    <View style={[styles.container, {paddingTop: inset.top}]}>
      <View style={styles.leftContainer}>
        <TouchableOpacity onPress={onBackPress}>
          <View style={styles.backButton}>
            <Image source={icons.sortleft} style={styles.icon} />
          </View>
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Pressable onPress={onSubtitlePress}>
            <View style={styles.subtitleContainer}>
              <Text style={styles.subtitle}>{subtitle}</Text>
              <Image source={icons.imagecopy1} style={styles.subtitleIcon} />
            </View>
          </Pressable>
        </View>

        <View style={styles.rightIcons}>
          <TouchableOpacity onPress={onNotificationPress}>
            <View
              style={[
                styles.iconButton,
                !showIconBackground && {backgroundColor: 'transparent'},
              ]}>
              <Image source={Image1} style={styles.icon1} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={onUserPress}>
            <View
              style={[
                styles.iconButton,
                styles.userButton,
                !showIconBackground && {backgroundColor: 'transparent'},
              ]}>
              <Image source={Image2} style={styles.icon1} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CustomHeader;
