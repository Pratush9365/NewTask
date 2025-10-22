import React, {useRef, useState, useEffect} from 'react';
import {View, Text, Image, Pressable, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import {Dimensions} from 'react-native';
import {screenNames} from '../../utils/screenNames';
import {icons, Images} from '../../assets';

const {width} = Dimensions.get('window');

const slides = [
  {
    id: '1',
    title: 'Start Saving with Memberships',
    description:
      'Join the Unlimited Club for daily visits and VIP access with license plate recognition.',
    image: Images.tutorial1,
  },

  {
    id: '2',
    title: 'Shop Online Redeem On-Site',
    description:
      'Shop in-app for washes, washbooks, or gift cards with secure checkout.',
    image: Images.tutorial2,
  },
  {
    id: '3',
    title: 'Get the Best Deals Nearest You!',
    description:
      'Get exclusive app discounts and never miss a great deal on your favorite services!',
    image: Images.tutorial3,
  },
];

export default function OnBoarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();
  const flatListRef = useRef(null);

  const handleNext = async () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current.scrollToIndex({index: currentIndex + 1});
    } else {
      await AsyncStorage.setItem('hasSeenOnboarding', 'true');
      navigation.reset({
        index: 0,
        routes: [{name: screenNames.LOGIN}],
      });
    }
  };

  const handleSkip = async () => {
    await AsyncStorage.setItem('hasSeenOnboarding', 'true');
    navigation.reset({
      index: 0,
      routes: [{name: screenNames.LOGIN}],
    });
  };

  const handleMomentumEnd = e => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const index = Math.floor(offsetX / width + 0.5);
    setCurrentIndex(index);
  };

  const renderItem = ({item}) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <View style={styles.footer}>
        <View style={styles.foortcontent}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Pressable style={styles.nextButton} onPress={handleNext}>
            <Image style={styles.nextText} source={icons.ArrowIconRight} />
          </Pressable>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.skipButton}
        onPress={handleSkip}
        hitSlop={{top: 22, bottom: 22, right: 22, left: 22}}>
        <View style={styles.SkipTextbackground}>
          <Text style={styles.skipText}>Skip</Text>
        </View>
      </Pressable>

      <FlatList
        data={slides}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        ref={flatListRef}
        onMomentumScrollEnd={handleMomentumEnd}
      />
    </View>
  );
}
