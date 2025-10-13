import { View, Text, TouchableOpacity, FlatList, Image, ActivityIndicator, StyleSheet } from 'react-native';
import Modal from "react-native-modal";
import { Images } from '../../../assets';
import { styless } from '../styles';
const WaterTypeModal = ({ modalVisible, setModalVisible, waterTypes, setSelectedWaterType, loading }) => {
  return (
    <Modal
      isVisible={modalVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropOpacity={0.6}
      backdropColor="rgba(8,16,23,1)"
      onBackdropPress={() => setModalVisible(false)}
      useNativeDriver
      style={{ margin: 0, justifyContent: "flex-end" }}
    >
      <View style={styless.modalContainer}>
        <View style={styless.modalHeader}>
          <View style={styless.modalTitleSection}>
            <Text style={styless.modalTitle}>Select Water Type</Text>
          </View>
          <TouchableOpacity style={styless.closeButton} onPress={() => setModalVisible(false)}>
            <Image style={styless.closeButtonText} source={Images.crossImage} />
          </TouchableOpacity>
        </View>

      
    
          <FlatList
            data={waterTypes}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styless.siteItem}
                onPress={() => {
                  setSelectedWaterType(item);
                  setModalVisible(false);
                }}
              >
                <Text style={styless.siteItemText}>{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => item.id?.toString() || index.toString()}
            showsVerticalScrollIndicator={false}
          />
        
      </View>
    </Modal>
  );
};

export default WaterTypeModal;

