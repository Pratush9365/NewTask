import {useState} from 'react';
import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Modal from 'react-native-modal';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import strings from '../../../utils/strings';

const FilterModal = ({modalVisible, setModalVisible}) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const filters = [
    {id: 1, label: strings.lessThanTen},
    {id: 2, label: strings.lessThanTwenty},
    {id: 3, label: strings.lessThanFifty},
  ];

  const toggleFilter = id => {
    if (selectedFilters.includes(id)) {
      setSelectedFilters(selectedFilters.filter(f => f !== id));
    } else {
      setSelectedFilters([...selectedFilters, id]);
    }
  };

  const resetFilters = () => {
    setSelectedFilters([]);
  };

  return (
    <View>
      <Modal
        isVisible={modalVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropOpacity={0.6}
        backdropColor="rgba(8,16,23,1)"
        onBackdropPress={() => setModalVisible(false)}
        useNativeDriver
        style={styles.modalHeader}>
        <SafeAreaView edges={['top']} style={{backgroundColor: 'transparent'}}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{strings.filter}</Text>

            <Text style={styles.sectionTitle}>{strings.price}</Text>

            {filters.map(item => (
              <View key={item.id} style={styles.filterRow}>
                <CheckBox
                  value={selectedFilters.includes(item.id)}
                  onValueChange={() => toggleFilter(item.id)}
                />
                <Text style={styles.filterText}>{item.label}</Text>
              </View>
            ))}

            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={styles.resetButton}
                onPress={resetFilters}>
                <Text style={styles.textStyle1}>{strings.reset}</Text>
              </TouchableOpacity>

              <Pressable
                style={styles.applyButton}
                onPress={() => setModalVisible(false)}
                onPressIn={() => setSelectedFilters([])}>
                <Text style={styles.textStyle}>{strings.apply}</Text>
              </Pressable>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default FilterModal;
