import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import CustomHeader from '../../headerCustomComponent';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {icons} from '../../assets';
import styles from './styles';

const PumpScreen = ({route}) => {
  const navigation = useNavigation();
  const [subtitle, setSubTitle] = useState('PBA2');
  const [activeTab, setActiveTab] = useState('Status');

  const {item1} = route.params;

  const pumpSummaryData = [
    {
      id: 1,
      title: 'Actual Set-point',
      value: '20',
      unit: '',
      icon: icons.sequare,
    },
    {
      id: 2,
      title: 'User Set-point',
      value: '20%',
      unit: '',
      icon: icons.user,
    },
    {
      id: 3,
      title: 'Max Flow Limit',
      value: '100',
      unit: 'Gallons',
      icon: icons.thunder,
    },
    {
      id: 4,
      title: 'DC Voltage',
      value: '50',
      unit: 'Watts',
      icon: icons.swap,
    },
    {
      id: 5,
      title: 'On Time',
      value: '1 hr 30 mins',
      unit: '',
      icon: icons.clockCheck,
    },
    {
      id: 6,
      title: 'Run Time',
      value: '1 hr 30 mins',
      unit: '',
      icon: icons.watch,
    },
    {
      id: 7,
      title: 'Total Power Usage',
      value: '50',
      unit: 'Kwh',
      icon: icons.power,
    },
    {
      id: 8,
      title: 'Total Starts',
      value: '3678',
      unit: '',
      icon: icons.film,
    },
  ];

  const pumpStatusData = [
    {
      id: 1,
      title: 'RPM',
      value: '100',
      unit: '',
      icon: icons.setting1,
    },
    {
      id: 2,
      title: 'Frequency',
      value: '50',
      unit: 'hz',
      icon: icons.replay,
    },
    {
      id: 3,
      title: 'Frequency Converter Temperature',
      value: '10',
      unit: '°F',
      icon: icons.temperature,
    },
    {
      id: 4,
      title: 'AMPS',
      value: '20',
      unit: 'amps',
      icon: icons.setting1,
    },
    {
      id: 5,
      title: 'Watts',
      value: '20',
      unit: 'watts',
      icon: icons.thunder,
    },
    {
      id: 6,
      title: 'Electronic Temperature',
      value: '10',
      unit: '°F',
      icon: icons.electronicTemperature,
    },
    {
      id: 7,
      title: 'Outlet Pressure',
      value: '20',
      unit: 'psi',
      icon: icons.cyclone,
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.listRow}>
        <View style={styles.iconWrapper}>
          <View style={styles.iconBox}>
            <Image source={item.icon} />
          </View>
        </View>

        <View>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <View style={styles.itemValueContainer}>
            <Text style={styles.itemValue}>
              {item.value} {item.unit}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <CustomHeader
        title={item1}
        subtitle={subtitle}
        onBackPress={() => navigation.goBack()}
      />

      <View style={styles.tabBar}>
        {['Status', 'Summary'].map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[
              styles.tabButton,
              activeTab === tab && styles.activeTabButton,
            ]}>
            <Text style={styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.headerText}>{`${item1} Statitics`}</Text>
          <View style={{flex: 1}} />
          <View style={styles.iconSmallBox}>
            <Image source={icons.settings} />
          </View>
          <View style={styles.iconSmallBox}>
            <Image source={icons.filterFunel} />
          </View>
        </View>

        <View style={styles.cardContainer}>
          <FlatList
            data={activeTab === 'Status' ? pumpStatusData : pumpSummaryData}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            bounces={false}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
      </View>
    </>
  );
};

export default PumpScreen;
