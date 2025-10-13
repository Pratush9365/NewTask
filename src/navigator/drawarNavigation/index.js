import {createDrawerNavigator} from '@react-navigation/drawer';
import accountScreen from '../../screens/account/index.js';
import shopScreen from '../../screens/shop/index.js';
import scheduleScreen from '../../screens/schedule/index.js';
import remainderScreen from '../../screens/remainder/index.js';
import notificationScreen from '../../screens/notification/index.js';
import cartScreen from '../../screens/cart/index.js';
import CustomDrawer from './CustomDrawer';
import 'react-native-gesture-handler';
import detailsScreen from '../../screens/details/index.js';
import {screenNames} from '../../utils/screenNames.js';
import BottomTabNavigation from '../bottomTabNavigation/index.js';

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
        component={shopScreen}
        options={{
          title: 'Shop',
          headerShown: true,
        }}
      />
      <Drawer.Screen
        name={screenNames.SECHDULE}
        component={scheduleScreen}
        options={{
          title: 'Schedule',
          headerShown: true,
        }}
      />
      <Drawer.Screen
        name={screenNames.Remainder}
        component={remainderScreen}
        options={{
          title: 'Reminder',
          headerShown: true,
        }}
      />
      <Drawer.Screen
        name={screenNames.ACCOUNT}
        component={accountScreen}
        options={{
          title: 'My Account',
          headerShown: true,
        }}
      />
      <Drawer.Screen
        name={screenNames.NOTIFICATION}
        component={notificationScreen}
        options={{
          title: 'Notifications',
          headerShown: true,
        }}
      />
      <Drawer.Screen
        name={screenNames.CART}
        component={cartScreen}
        options={{
          title: 'Cart',
          headerShown: true,
        }}
      />
      <Drawer.Screen
        name={screenNames.DETAILS}
        component={detailsScreen}
        options={{
          title: 'Details',
          headerShown: true,
        }}
      />
    </Drawer.Navigator>
  );
}
