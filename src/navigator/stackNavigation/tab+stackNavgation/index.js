import {createStackNavigator} from '@react-navigation/stack';
import menuScreen from '../../../screens/menu';
import waterSourceScreen from '../../../screens/waterSource';
import searchScreen from '../../../screens/waterSource/searchScreen';
import {screenNames} from '../../../utils/screenNames';

const MenuStack = createStackNavigator();

export default function MenuStackNavigator() {
  return (
    <MenuStack.Navigator screenOptions={{headerShown: false}}>
      <MenuStack.Screen name={screenNames.MENU} component={menuScreen} />
      <MenuStack.Screen
        name={screenNames.Water_Source_SCREEN}
        component={waterSourceScreen}
      />
      <MenuStack.Screen
        name={screenNames.Search_Screen}
        component={searchScreen}
      />
    </MenuStack.Navigator>
  );
}
