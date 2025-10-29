import {
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
  Pressable,
} from 'react-native';
import {useState, useRef} from 'react';
import styles from './styles';
import FilterModal from './modal';
import {Washbook, Washes, giftCards, memberships} from './utils/staticData';
import strings from '../../utils/strings';
import {icons, Images} from '../../assets';
import {screenNames} from '../../utils/screenNames';
export default function HomeScreen({navigation}) {
  const flatListRef = useRef(null);
  const [selectedId, setSelectedId] = useState(1);
  const [visible, setVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const Slide = [
    {id: 1, title: strings.membership},
    {id: 2, title: strings.washes},
    {id: 3, title: strings.washbooks},
    {id: 4, title: strings.giftCards},
  ];

  const handleAddToCart = item => {
    setCartItems(prev => {
      const existingItem = prev.find(
        cartItem => cartItem.uniqueId === `${item.category}-${item.id}`,
      );
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.uniqueId === `${item.category}-${item.id}`
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem,
        );
      }
      return [...prev, {uniqueId: `${item.category}-${item.id}`, quantity: 1}];
    });
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.tabButton,
        selectedId === item.id && styles.activeTabButton,
      ]}
      onPress={() => {
        setSelectedId(item.id);
      }}>
      <Text
        style={[
          styles.tabText,
          selectedId === item.id && styles.activeTabText,
        ]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  const getDataForSelectedTab = () => {
    switch (selectedId) {
      case 1:
        return memberships;
      case 2:
        return Washes;
      case 3:
        return Washbook;
      case 4:
        return giftCards;
    }
  };

  const renderItem1 = ({item}) => {
    const itemCount =
      cartItems.find(
        cartItem => cartItem.uniqueId === `${item.category}-${item.id}`,
      )?.quantity || 0;

    return (
      <View style={styles.card}>
        <Pressable
          onPress={() =>
            navigation.navigate(screenNames.DETAILS_SCREEN, {
              item1: item,
              cartItems: cartItems,
              feature: item.features,
              category: item.category,
              category1: item.category1,
              price: item.price,
            })
          }>
          <View style={styles.cardItems}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.category}>{item.category1}</Text>
          </View>

          <Text style={styles.title}>{item.title}</Text>

          <View style={styles.featuresContainer}>
            {item.features.map((feature, index) => (
              <View key={index} style={styles.featureRow}>
                <View style={styles.featureItem}>
                  <Image style={styles.check} source={icons.checkIcon} />
                </View>
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            ))}
          </View>

          <View style={styles.footer}>
            <View style={styles.footer1}>
              <Text style={styles.footerItem}>{item.rate}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>

            <View>
              {itemCount === 0 ? (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleAddToCart(item)}>
                  <View>
                    <Text style={styles.buttonText}>{strings.addToCart}</Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => navigation.navigate(screenNames.CART)}>
                  <View style={styles.ButtonBackground}>
                    <View style={styles.Footer1}>
                      <Text style={styles.ButtonText}>{strings.goToCart}</Text>
                      <Image source={icons.ArrowIcon} />
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </Pressable>
      </View>
    );
  };

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <View style={styles.headerContainer}>
        <View style={styles.headerRow}>
          <TouchableOpacity hitSlop={6} onPress={() => navigation.openDrawer()}>
            <View style={styles.ImagebackgroundGround}>
              <Image
                source={icons.menuIcon}
                style={styles.menuIcon}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>

          <View style={styles.headerCenter}>
            <Text style={styles.text1}>{strings.selectedSite}</Text>
            <Text style={styles.text}>{strings.siteName}</Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.ImagebackgroundGround}>
              <Pressable>
                <Text style={styles.badgeText}>{totalCount}</Text>
                <Image
                  source={icons.cartIcon}
                  style={{width: 20, height: 20}}
                />
              </Pressable>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.tabContainer}>
        <FlatList
          ref={flatListRef}
          data={Slide}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>

      <View style={styles.searchRow}>
        <View style={styles.inputBox}>
          <Image source={icons.searchIcon} style={{width: 20, height: 20}} />
          <TextInput
            placeholder={strings.searchPlaceholder}
            style={styles.inputBox1}
          />
        </View>
        <TouchableOpacity
          style={styles.filterIcon}
          onPressIn={() => setVisible(true)}>
          <View style={styles.filterView}>
            <Image source={icons.filterIcon} style={styles.filtericonSize} />
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.Teg}>{strings.memberShipFound}</Text>

      <FlatList
        data={getDataForSelectedTab()}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem1}
        contentContainerStyle={{padding: 16}}
      />
      <FilterModal modalVisible={visible} setModalVisible={setVisible} />
    </View>
  );
}
