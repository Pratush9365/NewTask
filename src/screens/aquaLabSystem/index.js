import {
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import {useEffect, useState} from 'react';
import CustomHeader from '../../headerCustomComponent';
import strings from '../../utils/strings';
import {icons, Images} from '../../assets';
import SiteModal from '../../components/modals/siteModal';
import colors from '../../utils/colors';
import getLocationComponents from '../../service/aquaLab';
import styles from './styles';
import {screenNames} from '../../utils/screenNames';

const AquaLabSystem = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [subtitle, setSubtitle] = useState('PBA2');
  const [searchText, setSearchText] = useState('');
  const [aquaLabData, setAquaLabData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const sites = [strings.siteOne, strings.siteTwo, strings.siteThree];
  const filteredSites = sites.filter(site =>
    site.toLowerCase().includes(searchText.toLowerCase()),
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getLocationComponents({
        site_id: '8a637256-ed45-44ba-a47f-2be2863479f4',
      });
      setAquaLabData(response?.components);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const renderItem = ({item}) => {
    const isPump = item.name.toLowerCase().includes('pump');
    const backgroundColor = isPump ? colors.green3DD : colors.MediumBlue;
    const imageSource = isPump ? Images.pump : Images.pannel;

    const handlePress = () => {
      if (isPump) {
        navigation.navigate(screenNames.PUMP, {item1: item.name});
      }
    };

    return (
      <Pressable onPress={handlePress}>
        <View style={styles.card}>
          <View style={styles.cardInner}>
            <View style={[styles.imageWrapper, {backgroundColor}]}>
              <Image source={imageSource} style={styles.image} />
            </View>
            <Text style={styles.itemName}>{item.name}</Text>
            <View style={{flex: 1}} />
            <Image source={Images.chevranRight} style={styles.image} />
          </View>
        </View>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <CustomHeader
        title={strings.AquaLabSystem}
        subtitle={subtitle}
        onBackPress={() => navigation.goBack()}
        Image1={icons.notifiactionicon}
        Image2={icons.bellicon}
        onSubtitlePress={() => setModalVisible(true)}
        showIconBackground={true}
      />

      <View>
        <Text style={styles.titleText}>
          12 Aqua-Lab Pannel & 6 Pumps Configured
        </Text>
      </View>

      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" />
        </View>
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <View style={styles.flatListContainer}>
          <FlatList
            data={aquaLabData}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
      )}

      <SiteModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        searchText={searchText}
        setSearchText={setSearchText}
        filteredSites={filteredSites}
        setSubtitle={setSubtitle}
      />
    </View>
  );
};

export default AquaLabSystem;
