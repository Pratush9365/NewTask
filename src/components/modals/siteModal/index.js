import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
import {icons, Images} from '../../../assets';
import strings from '../../../utils/strings';

const siteModal = ({
  modalVisible,
  setModalVisible,
  searchText,
  setSearchText,
  filteredSites,
  setSubtitle,
}) => {
  return (
    <Modal
      isVisible={modalVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropOpacity={0.6}
      backdropColor="rgba(8,16,23,1)"
      onBackdropPress={() => setModalVisible(false)}
      useNativeDriver
      style={{margin: 0, justifyContent: 'flex-end'}}>
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <View style={styles.modalTitleSection}>
            <Text style={styles.modalTitle}>{strings.site}</Text>
            <Text style={styles.modalSubtitle}>{strings.siteSubtitle}</Text>
          </View>

          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}>
            <Image style={styles.closeButtonIcon} source={Images.crossImage} />
          </TouchableOpacity>
        </View>

        <View style={styles.searchBarContainer}>
          <View style={styles.searchInputContainer}>
            <Image
              source={icons.searchIconWaterSource}
              style={styles.searchIcon}
            />
            <TextInput
              placeholder={strings.siteSearch}
              value={searchText}
              onChangeText={setSearchText}
              style={styles.searchInput}
            />
          </View>
        </View>

        <FlatList
          data={filteredSites}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.siteItem}
              onPress={() => {
                setSubtitle(item);
                setModalVisible(false);
              }}>
              <Text style={styles.siteItemText}>{item}</Text>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Modal>
  );
};

export default siteModal;
