import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {useState, useEffect} from 'react';
import CustomHeader from '../../headerCustomComponent';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Images} from '../../assets';
import {addWaterSource, getWaterTypeList} from '../../service/waterSource';
import Toast from 'react-native-toast-message';
import WaterTypeModal from './modal/waterTypeModal';
import SiteModal from '../../components/modals/siteModal';
import {styles} from './styles';
import strings from '../../utils/strings';
import colors from '../../utils/colors';
import siteId from '../../service/api/siteId';

const AddWaterSource = () => {
  const [Cost, setCost] = useState('');
  const [waterTypes, setWaterTypes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedWaterType, setSelectedWaterType] = useState(null);
  const [error, setError] = useState(null);
  const [modalSiteVisible, setSiteModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [subtitle, setSutitle] = useState(strings.defaultSubtitle);

  const navigation = useNavigation();
  const route = useRoute();

  const handleSaved = async () => {
    try {
      if (!selectedWaterType || !selectedWaterType?.id) {
        Alert.alert(
          strings.selectWaterTypeTitle,
          strings.selectWaterTypeMessage,
        );
        return;
      }
      if (!Cost || !Cost.trim()) {
        Alert.alert(strings.enterCostTitle, strings.enterCostMessage);
        return;
      }
      if (!/^\d+(\.\d{1,2})?$/.test(Cost.trim())) {
        Alert.alert(strings.invalidCostTitle, strings.invalidCostMessage);
        return;
      }

      const payload = {
        site_id: '42528f47-b0c5-4080-ae5a-069fda791a3f',
        water_type: {
          id: selectedWaterType?.id,
          name: selectedWaterType?.name,
        },
        water_cost: Cost.replace(/\$/g, ''),
      };
      // console.log("Payload:",payload);

      let response;
      if (route.params?.editData) {
        response = await addWaterSource(
          {...payload, water_source_id: route.params.editData.id},
          true,
        );
      } else {
        response = await addWaterSource(payload);
      }

      if (response?.statusCode === 200) {
        navigation.goBack();
      } else {
        Alert.alert(
          strings.saveFailedTitle,
          response?.message || strings.saveFailedMessage,
        );
      }
    } catch (error) {
      Alert.alert(strings.errorTitle, error?.message || strings.errorMessage);
    }
  };

  useEffect(() => {
    if (route.params?.editData) {
      const editData = route.params.editData;
      setCost(editData.water_cost);
      setSelectedWaterType({
        id: editData.water_type_id,
        name: editData.water_type,
      });
    }
  }, [route.params?.editData]);

  useEffect(() => {
    fetchWaterTypes();
  }, []);

  const fetchWaterTypes = async () => {
    setLoading(true);
    try {
      const response = await getWaterTypeList();
      if (response) {
        setWaterTypes(response || []);
        setLoading(false);
      }
    } catch (err) {
      setError(err || strings.fetchError);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  const handleTextChange = text => {
    const regex = /^\d+(\.\d{0,2})?$/;
    if (regex.test(text) || text === '') {
      setCost(text);
    }
  };

  const isFormValid = !!(selectedWaterType?.id && Cost.trim() !== '');

  const sites = [strings.siteOne, strings.siteTwo, strings.siteThree];

  const filteredSites = sites.filter(site =>
    site.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <CustomHeader
        title={strings.addWaterSourceTitle}
        subtitle={subtitle}
        onBackPress={() => navigation.goBack()}
        onSubtitlePress={() => setSiteModalVisible(true)}
      />
      <View style={styles.contentContainer}>
        {!selectedWaterType ? (
          <TouchableOpacity
            onPress={() => {
              if (waterTypes.length === 0) {
                Toast.show({
                  type: 'error',
                  text1: strings.noWaterTypeTitle,
                  text2: strings.noWaterTypeMessage,
                });
                return;
              } else {
                setModalVisible(true);
              }
            }}>
            <View style={styles.selectBox}>
              <Image
                source={Images.addwaterSourceWindicon}
                style={styles.images}
              />
              <Text style={styles.textInputStyle}>
                {strings.searchWaterTypePlaceholder}
              </Text>
              <Image source={Images.addWaterSourceChevronDown} />
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              if (waterTypes.length === 0) {
                Toast.show({
                  type: 'error',
                  text1: strings.noWaterTypeTitle,
                  text2: strings.noWaterTypeMessage,
                });
                return;
              } else {
                setModalVisible(true);
              }
            }}>
            <View style={styles.selectBox1}>
              <Image
                source={Images.addwaterSourceWindicon}
                style={styles.images}
              />
              <View style={styles.textInputStyle4}>
                <Text style={styles.labelText}>
                  {strings.selectWaterTypeLabel}
                </Text>
                <Text style={styles.selectedText}>
                  {selectedWaterType.name}
                </Text>
              </View>
              <Image source={Images.addWaterSourceChevronDown} />
            </View>
          </TouchableOpacity>
        )}

        <View style={styles.costBox}>
          <Image
            source={Images.addwaterSourceDollericon}
            style={styles.dollarIcon}
          />
          <TextInput
            placeholder={strings.waterCostPlaceholder}
            style={styles.textInputStyle2}
            value={Cost}
            onChangeText={handleTextChange}
            placeholderTextColor={colors.gray3BA}
            keyboardType="numeric"
            maxLength={15}
          />
          <Text style={styles.textInputStyle1}>{strings.perGallon}</Text>
        </View>

        {loading && (
          <View style={styles.overlay}>
            <ActivityIndicator size="large" />
          </View>
        )}

        <View style={{flex: 1}} />

        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.saveButton, {opacity: isFormValid ? 3 : 0.3}]}
            onPress={handleSaved}>
            <Text style={styles.saveButtonText}>{strings.saveButtonText}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <SiteModal
        modalVisible={modalSiteVisible}
        setModalVisible={setSiteModalVisible}
        searchText={searchText}
        setSearchText={setSearchText}
        filteredSites={filteredSites}
        setSubtitle={setSutitle}
      />
      <WaterTypeModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        waterTypes={waterTypes}
        setSelectedWaterType={setSelectedWaterType}
        loading={loading}
      />
    </View>
  );
};

export default AddWaterSource;
