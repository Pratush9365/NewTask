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
import styles from './styles';
import {screenNames} from '../../utils/screenNames';
import {getLocationComponents} from '../../service/aquaLab';
import siteId from '../../service/api/siteId';

const AquaLabSystem = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [subtitle, setSubtitle] = useState('PBA2');
  const [searchText, setSearchText] = useState('');
  const [aquaLabData, setAquaLabData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [panelCount, setPannelCount] = useState(null);
  const [pumpCount, setPumpCount] = useState(null);

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
        site_id: siteId.aquaLabSiteId.site_id,
      });
      setAquaLabData(response?.components);
      const panelCount =
        response?.components?.filter(item => item?.type === 'panel-gen4')
          .length ?? 0;
      setPannelCount(panelCount);
      const pumpCount =
        response?.components?.filter(item => item?.type === 'pump-gen4')
          .length ?? 0;
      setPumpCount(pumpCount);
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
        title={strings.aquaLabSystem}
        subtitle={subtitle}
        onBackPress={() => navigation.goBack()}
        Image1={icons.notifiactionicon}
        Image2={icons.bellicon}
        onSubtitlePress={() => setModalVisible(true)}
        showIconBackground={true}
      />

      <View>
        <Text style={styles.titleText}>
          {panelCount}
          {strings.aquaLabPannel}
          {pumpCount}
          {strings.pumpConfigured}
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
