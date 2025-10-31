import {
  View,
  Text,
  Image,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import CustomHeader from '../../headerCustomComponent';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {icons} from '../../assets';
import styles from './styles';
import {getPumpSummary} from '../../service/aquaLab';
import strings from '../../utils/strings';

const PumpScreen = ({route}) => {
  const navigation = useNavigation();
  const [subtitle, setSubTitle] = useState('PBA2');
  const [activeTab, setActiveTab] = useState('Status');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pumpStatus, setPumpStatus] = useState({});

  const {item1} = route.params;

  const formatStatusData = pumpStatus?.status
    ? [
        {title: 'RPM', value: pumpStatus.status.rpm, icon: icons.setting1},
        {
          title: 'Frequency',
          value: pumpStatus.status.frequency,
          icon: icons.replay,
        },
        {
          title: 'Frequency Temp',
          value: pumpStatus.status.frequencyTemp,
          icon: icons.temperature,
        },
        {title: 'AMPS', value: pumpStatus.status.amps, icon: icons.setting1},
        {title: 'Watts', value: pumpStatus.status.watts, icon: icons.thunder},
        {
          title: 'Electronic Temp',
          value: pumpStatus.status.electronicsTemp,
          icon: icons.electronicTemperature,
        },
        {
          title: 'Outlet Pressure',
          value: pumpStatus.status.outletPressure,
          icon: icons.cyclone,
        },
      ]
    : [];

  const formatSummaryData = pumpStatus?.summary
    ? [
        {
          title: 'Actual Set-point',
          value: pumpStatus.summary.actualSetpoint,
          icon: icons.sequare,
        },
        {
          title: 'User Set-point',
          value: pumpStatus.summary.userSetpoint,
          icon: icons.user,
        },
        {
          title: 'Max Flow Limit',
          value: pumpStatus.summary.maxFlowLimit,
          icon: icons.thunder,
        },
        {
          title: 'DC Voltage',
          value: pumpStatus.summary.dcVoltage,
          icon: icons.swap,
        },
        {
          title: 'On Time',
          value: pumpStatus.summary.onTime,
          icon: icons.clockCheck,
        },
        {
          title: 'Run Time',
          value: pumpStatus.summary.runTime,
          icon: icons.watch,
        },
        {
          title: 'Total KWH',
          value: pumpStatus.summary.totalKWH,
          icon: icons.power,
        },
        {
          title: 'Total Starts',
          value: pumpStatus.summary.totalStarts,
          icon: icons.film,
        },
      ]
    : [];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getPumpSummary({
        iot_hub_device_id: 'advm2-sensor-trial',
        start_date: '2025-01-13T18:30:00.000Z',
        end_date: '2025-01-15T18:29:59.999Z',
        modbus_id: 240,
      });
      setPumpStatus(response);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  const renderItem = ({item}) => (
    <View style={styles.listRow}>
      <View style={styles.iconWrapper}>
        <View style={styles.iconBox}>
          <Image source={item.icon} />
        </View>
      </View>

      <View>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <View style={styles.itemValueContainer}>
          <Text style={styles.itemValue}>{item.value}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={{flex: 1}}>
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
          {activeTab === 'Status' ? (
            <Text style={styles.headerText}>
              {item1} {strings.statistics}
            </Text>
          ) : (
            <Text style={styles.headerText}>
              {item1}
              {strings.summary}
            </Text>
          )}
          <View style={{flex: 1}} />
          <View style={styles.iconSmallBox}>
            <Image source={icons.settings} />
          </View>
          <View style={styles.iconSmallBox}>
            <Image source={icons.filterFunel} />
          </View>
        </View>

        {loading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" />
          </View>
        ) : error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : (
          <View style={styles.cardContainer}>
            <FlatList
              data={
                activeTab === 'Status' ? formatStatusData : formatSummaryData
              }
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
              bounces={false}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default PumpScreen;
