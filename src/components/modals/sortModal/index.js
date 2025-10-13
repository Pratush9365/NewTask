import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from "react-native"
import Modal from "react-native-modal";
import styles from "./styles";
import { Images } from "../../../assets";



const SortByModal = ({ visible, onClose, selectedOption, onSelect }) => {
  
    const options = [
    { key: "asc",  },
    { key: "desc",  },
    { key: "recent",  },
    { key: "oldest",  },
  ]
  return (
    <Modal
      isVisible={visible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropOpacity={0.6}
      backdropColor="rgba(8,16,23,1)"
      onBackdropPress={onClose}
      style={{ margin: 0, justifyContent: "flex-end" }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>Sort By</Text>
          <TouchableOpacity onPress={onClose}>
            <Image source={Images.crossImage} style={styles.closeIcon} />
          </TouchableOpacity>
        </View>
{options.map((item, index) => (
  <TouchableOpacity
    key={item.key}
    style={[
      styles.optionRow,
      index !== options.length - 1 && styles.optionBorder,
    ]}
    onPress={() => onSelect(item.key)}
  >
      <View style={{ flexDirection: "row", alignItems: "center" ,marginBottom:8}}>
    <Image
      source={
        selectedOption === item.key
          ? Images.circleSortImageSource
          : Images.circleSortImageSource
      }
      style={styles.radioCircle}
    />
      {item.key === "asc" && (
        <>
          <Text style={styles.optionText1}>Alphabetical  A</Text>
          <Image source={Images.sortImageArrowSource} style={styles.inlineIcon} />
          <Text style={styles.optionText}>Z</Text>
        </>
      )}

      {item.key === "desc" && (
        <>
          <Text style={styles.optionText1}>Alphabetical  Z</Text>
          <Image source={Images.sortImageArrowSource} style={styles.inlineIcon} />
          <Text style={styles.optionText}>A</Text>
        </>
      )}

      {item.key === "recent" && (
        <Text style={styles.optionText1}>Recently Added</Text>
      )}

      {item.key === "oldest" && (
        <Text style={styles.optionText1}>Oldest First</Text>
      )}
    </View>
  </TouchableOpacity>
))}
     </View>
    </Modal>
  )
}

export default SortByModal

