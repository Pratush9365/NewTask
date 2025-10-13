import {useNavigation} from '@react-navigation/native';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {FlatList, Pressable} from 'react-native-gesture-handler';
import styles from './styles';
import {icons, Images} from '../../assets';
export default function DetailsScreen({route}) {
  const {item1, cartItems} = route.params;
  const cartcount = cartItems.find(item => item.id === item1.id)?.quantity || 0;
  const navigation = useNavigation();

  const imageSection = {
    type: 'Image',
    source: 'Image',
  };

  const header = {
    type: 'header',
    subtitle: 'Unlimited Washes • Unlimited Visits',
    price: '$43.24',
    Data: 'Reedmable and available on the following sites',
  };

  const services = {
    type: 'services',
  };

  const description = {
    type: 'description',
    text: `Papa Bear Carwash is dedicated to strong relationships,
a genuine love for the community, and quality that knows no end.
We feel that these three components are our formula for success,
that if we build our culture on an inclusive.`,
  };

  const redeem = {
    type: 'instructions',
    steps: [
      'Drive to selected car wash location.',
      'Enter the VIP lane.',
      'Wait for the License Plate Recognition to scan your plate.',
      'The gate will automatically open for you to enjoy your wash!',
    ],
  };

  const sections = [imageSection, header, services, description, redeem];

  const renderItem = ({item}) => {
    switch (item.type) {
      case 'Image':
        return (
          <View style={styles.section1}>
            <View style={styles.image}>
              <Image source={Images.Membership} />
            </View>
          </View>
        );

      case 'header':
        return (
          <View style={styles.section}>
            <View style={styles.card}>
              <Text style={styles.badge}>{item1.category}</Text>
              <Text style={styles.badge}>{item1.category1}</Text>
            </View>

            <Text style={styles.title}>{item1.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>

            <Text style={styles.label}>Price</Text>
            <Text style={styles.price}>{item1.price}</Text>

            <View style={styles.redeem}>
              <Text style={styles.redeemText}>
                Redeemable and available on the following sites
              </Text>
              <Image style={styles.arrow} source={icons.TextIcon} />
            </View>
          </View>
        );
      case 'services':
        return (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Service Includes</Text>

            <View style={styles.servicesContainer}>
              {item1.features.map((s, i) => (
                <View key={i} style={styles.row}>
                  <View style={styles.Check}>
                    <Image style={styles.ImageSize} source={icons.checkIcon} />
                  </View>
                  <Text style={styles.text1}>{s}</Text>
                </View>
              ))}
            </View>
          </View>
        );

      case 'description':
        return (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        );

      case 'instructions':
        return (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Redeem Instructions</Text>
            {item.steps.map((step, i) => (
              <Text key={i} style={styles.text}>
                {i + 1}. {step}
              </Text>
            ))}
          </View>
        );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headercontainer}>
        <View style={styles.header}>
          <View style={styles.icon}>
            <Pressable
              onPress={() => navigation.goBack()}
              hitSlop={{top: 24, bottom: 24, left: 24, right: 24}}>
              <Image source={icons.backIcon} style={{width: 24, height: 24}} />
            </Pressable>
          </View>

          <Text style={styles.headerStyle}>Detail</Text>

          <View style={{width: 40}} />
        </View>
      </View>

      <FlatList
        data={sections}
        renderItem={renderItem}
        contentContainerStyle={{paddingBottom: 20}}
      />

      <View style={styles.headercontainer}>
        {cartcount === 0 ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Cart')}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.buttonText}>Add To Cart</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Cart')}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.buttonText}>Go To Cart</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
