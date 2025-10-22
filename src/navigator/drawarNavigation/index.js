import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import 'react-native-gesture-handler';
import {screenNames} from '../../utils/screenNames.js';
import BottomTabNavigation from '../bottomTabNavigation/index.js';
import ShopScreen from '../../screens/shop/index.js';
import ScheduleScreen from '../../screens/schedule/index.js';
import RemainderScreen from '../../screens/remainder/index.js';
import AccountScreen from '../../screens/account/index.js';
import NotificationScreen from '../../screens/notification/index.js';
import CartScreen from '../../screens/cart/index.js';
import ProductDetailsScreen from '../../screens/productDetail/index.js';

const Drawer = createDrawerNavigator();

export default function DrawarNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName={screenNames.BOTTOM_TAB}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name={screenNames.BOTTOM_TAB}
        component={BottomTabNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name={screenNames.SHOP}
        component={ShopScreen}
        options={{
          title: 'Shop',
          headerShown: true,
        }}
      />
      <Drawer.Screen
        name={screenNames.SECHDULE}
        component={ScheduleScreen}
        options={{
          title: 'Schedule',
          headerShown: true,
        }}
      />
      <Drawer.Screen
        name={screenNames.Remainder}
        component={RemainderScreen}
        options={{
          title: 'Reminder',
          headerShown: true,
        }}
      />
      <Drawer.Screen
        name={screenNames.ACCOUNT}
        component={AccountScreen}
        options={{
          title: 'My Account',
          headerShown: true,
        }}
      />
      <Drawer.Screen
        name={screenNames.NOTIFICATION}
        component={NotificationScreen}
        options={{
          title: 'Notifications',
          headerShown: true,
        }}
      />
      <Drawer.Screen
        name={screenNames.CART}
        component={CartScreen}
        options={{
          title: 'Cart',
          headerShown: true,
        }}
      />
      <Drawer.Screen
        name={screenNames.DETAILS}
        component={ProductDetailsScreen}
        options={{
          title: 'Details',
          headerShown: true,
        }}
      />
    </Drawer.Navigator>
  );
}
