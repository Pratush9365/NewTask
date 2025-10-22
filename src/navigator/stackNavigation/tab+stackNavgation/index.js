import {createStackNavigator} from '@react-navigation/stack';
import {screenNames} from '../../../utils/screenNames';
import WaterSourceScreen from '../../../screens/waterSource';
import SearchScreen from '../../../screens/waterSource/searchScreen';
import MenuScreen from '../../../screens/menu';
import AquaLabSystem from '../../../screens/aquaLabSystem';

const MenuStack = createStackNavigator();

export default function MenuStackNavigator() {
  return (
    <MenuStack.Navigator screenOptions={{headerShown: false}}>
      <MenuStack.Screen name={screenNames.MENU1} component={MenuScreen} />
      <MenuStack.Screen
        name={screenNames.WATER_SOURCE_SCREEN}
        component={WaterSourceScreen}
      />
      <MenuStack.Screen
        name={screenNames.SEARCH_SCREEN}
        component={SearchScreen}
      />
      <MenuStack.Screen
        name={screenNames.AQUA_LAB_SYSTEAM}
        component={AquaLabSystem}
      />
    </MenuStack.Navigator>
  );
}
