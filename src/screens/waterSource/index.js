import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {useState, useEffect, useCallback} from 'react';
import CustomHeader from '../../headerCustomComponent';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {icons, Images} from '../../assets';
import moment from 'moment';
import {
  addWaterSource,
  deleteWaterSource,
  getWaterSourceList,
} from '../../service/waterSource/index';
import SortByModal from '../../components/modals/sortModal/index';
import SiteModal from '../../components/modals/siteModal/index';
import styles from '../waterSource/styles';
import strings from '../../utils/strings';
import {screenNames} from '../../utils/screenNames';

const WaterSourceScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [waterTypes, setWaterTypes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sortVisible, setSortVisible] = useState(false);
  const [selectedSort, setSelectedSort] = useState('asc');
  const [subtitle, setSutitle] = useState(strings.defaultSubtitle);

  useFocusEffect(
    useCallback(() => {
      fetchWaterTypes();
    }, [selectedSort]),
  );

  const route = useRoute();

  useEffect(() => {
    if (route.params?.newSource) {
      setWaterTypes(prev => [route.params.newSource, ...prev]);
    }
  }, [route.params?.newSource]);

  const waterTypesMaster = [
    {id: 1, name: 'City Water'},
    {id: 2, name: 'Soft Water'},
    {id: 3, name: 'Reclaim Water'},
    {id: 4, name: 'Reject Water'},
  ];

  const fetchWaterTypes = async () => {
    try {
      setLoading(true);
      const sortMap = {asc: 1, desc: 2, recent: 3, oldest: 4};
      const data = await getWaterSourceList({
        site_id: '42528f47-b0c5-4080-ae5a-069fda791a3f',
        sort_by: sortMap[selectedSort] || 3,
      });
      console.log('fetched', data);
      setWaterTypes(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = id => {
    Alert.alert(
      strings.deleteConfirmTitle,
      strings.deleteConfirmMessage,
      [
        {text: strings.deleteConfirmCancel, style: 'cancel'},
        {
          text: strings.deleteConfirmOk,
          onPress: async () => {
            try {
              await deleteWaterSource(id, {
                reason: 'Required',
              });
              fetchWaterTypes();
            } catch (error) {
              setError(error.message || strings.deleteError);
            }
          },
        },
      ],
      {cancelable: true},
    );
  };

  const Editdata = async item => {
    try {
      const matchedType = waterTypesMaster.find(
        type => type.name === item?.water_type,
      );
      if (!matchedType) {
        Alert.alert(strings.updateFailedTitle, strings.errorInvalidType);
        return;
      }

      const payload = {
        site_id: '42528f47-b0c5-4080-ae5a-069fda791a3f',
        water_type: {id: matchedType.id, name: matchedType.name},
        water_cost: item?.water_cost?.replace(/\$/g, ''),
        water_source_id: item.id,
      };

      const response = await addWaterSource(payload, true);
      if (response?.statusCode === 200) {
        const editData = {
          id: item.id,
          water_cost: item.water_cost,
          water_type_id: matchedType.id,
          water_type: matchedType.name,
        };
        navigation.navigate(screenNames.ADD_WATER_SOURCE, {editData});
      } else {
        Alert.alert(
          strings.updateFailedTitle,
          response?.message || strings.updateFailedMessage,
        );
      }
    } catch (error) {
      setError(error.message || strings.generalError);
    }
  };

  const sites = [strings.siteOne, strings.siteTwo, strings.siteThree];

  const filteredSites = sites.filter(site =>
    site.toLowerCase().includes(searchText.toLowerCase()),
  );

  const renderWaterSourceCard = ({item}) => {
    const formattedDate = item.created_date
      ? moment(item.created_date).format('DD MMM YYYY')
      : 'N/A';
    return (
      <View style={styles.waterSourceCard}>
        <TouchableOpacity
          onLongPress={() => handleDelete(item?.id)}
          onPress={() => Editdata(item)}>
          <Text style={styles.cardTitle}>{item.water_type}</Text>
          <View style={styles.cardContent}>
            <View style={styles.cardColumn}>
              <Text style={styles.cardLabel}>{strings.costLabel}</Text>
              <Text style={styles.cardValue}>{`$ ${item.water_cost}`}</Text>
            </View>
            <View style={styles.middleWidth} />
            <View style={styles.cardColumn}>
              <Text style={styles.cardLabel}>{strings.addedOnLabel}</Text>
              <Text style={styles.cardValue} numberOfLines={1}>
                {formattedDate}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        title={strings.screenTitle}
        subtitle={subtitle}
        onBackPress={() => navigation.goBack()}
        Image1={icons.notifiactionicon}
        Image2={icons.bellicon}
        onSubtitlePress={() => setModalVisible(true)}
        showIconBackground={true}
      />

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Image
            source={icons.searchIconWaterSource}
            style={styles.searchIcon}
          />
          <TouchableOpacity
            style={styles.searchText}
            onPress={() =>
              navigation.navigate(screenNames.SEARCH_SCREEN, {
                waterdata: waterTypes,
              })
            }>
            <Text style={styles.searchInput}>{strings.searchPlaceholder}</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={icons.filterfunel} style={styles.filterIcon} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.downloadButton}>
          <Image source={icons.downloadicon} style={styles.downloadIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.sourcesHeader}>
        <Text style={styles.sourcesCount}>
          {waterTypes.length} {strings.sourcesLabel}
        </Text>
        <View style={styles.sortButton}>
          <TouchableOpacity onPress={() => setSortVisible(true)}>
            <Image source={Images.waterSourceSlider} style={styles.sortIcon} />
          </TouchableOpacity>
        </View>
      </View>

      {loading ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <FlatList
          data={waterTypes}
          keyExtractor={item => item.id.toString()}
          renderItem={renderWaterSourceCard}
          showsVerticalScrollIndicator={false}
        />
      )}

      <View style={styles.floatingIcon}>
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => navigation.navigate(screenNames.ADD_WATER_SOURCE)}>
          <Image source={Images.waterSourceAddIcon} style={styles.addIcon} />
        </TouchableOpacity>
      </View>

      <SiteModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        searchText={searchText}
        setSearchText={setSearchText}
        filteredSites={filteredSites}
        setSubtitle={setSutitle}
      />

      <SortByModal
        visible={sortVisible}
        onClose={() => setSortVisible(false)}
        selectedOption={selectedSort}
        onSelect={option => {
          setSelectedSort(option);
          setSortVisible(false);
        }}
      />
    </View>
  );
};

export default WaterSourceScreen;
