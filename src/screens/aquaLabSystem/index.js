import {StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';
import CustomHeader from '../../headerCustomComponent';
import strings from '../../utils/strings';
import {icons} from '../../assets';
import SiteModal from '../../components/modals/siteModal';
import fonts from '../../assets/fonts';
import colors from '../../utils/colors';

const AquaLabSystem = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [subtitle, setSubtitle] = useState('PBA2');
  const [searchText, setSearchText] = useState('');

  const sites = [strings.siteOne, strings.siteTwo, strings.siteThree];
  const filteredSites = sites.filter(site =>
    site.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <View>
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
        <Text
          style={{
            marginTop: 20,
            marginHorizontal: 16,
            fontFamily: fonts.SEMI,
            color: colors.gray07D,
          }}>
          12 Aqua-Lab Pannel & 6 Pumps Configured
        </Text>
      </View>
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

const styles = StyleSheet.create({});
