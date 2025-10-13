import {useEffect, useState} from 'react';
import {
  View,
  StatusBar,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import colors from '../../../utils/colors';
import {Images} from '../../../assets';
import strings from '../../../utils/strings';
import {useNavigation, useRoute} from '@react-navigation/native';
import moment from 'moment';
import styles from './styles';

const SearchScreen = () => {
  const route = useRoute();
  const [searchText, setSearchText] = useState('');
  const {waterdata} = route.params || {};
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState([]);

  const navigations = useNavigation();

  useEffect(() => {
    if (searchText.trim() === '') {
      setApiData([]);
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      const filteredData = (waterdata || []).filter(site =>
        site.water_type?.toLowerCase().includes(searchText.toLowerCase()),
      );

      setApiData(filteredData);
      if (filteredData.length > 0) {
        setLoading(true);
      } else {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchText]);

  const renderWaterSourceCard = ({item}) => {
    const formattedDate = item.created_date
      ? moment(item.created_date).format('DD MMM YYYY')
      : 'N/A';
    return (
      <View style={styles.waterSourceCard}>
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
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.lightBlue || '#E6EDF3'}
      />

      <View style={styles.searchBarContainer}>
        <View style={styles.searchBar}>
          <TouchableOpacity onPress={() => navigations.goBack()}>
            <Image source={Images.ArrowIconBack} style={styles.backIcon} />
          </TouchableOpacity>
          <TextInput
            placeholder={strings.searchText}
            placeholderTextColor="#A0A0A0"
            style={styles.input}
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      </View>

      {loading ? (
        <View>
          <FlatList
            data={apiData}
            keyExtractor={item => item.id.toString()}
            renderItem={renderWaterSourceCard}
            showsVerticalScrollIndicator={false}
          />
        </View>
      ) : (
        <View style={styles.emptyStateContainer}>
          <Image
            source={Images.cloudImage}
            style={styles.cloudImage}
            resizeMode="contain"
          />
          <View>
            <Text style={styles.title}>Search to View Result</Text>
          </View>
          <Text style={styles.subtitle}>
            Start typing in to view your search results
          </Text>
        </View>
      )}
    </View>
  );
};
export default SearchScreen;
