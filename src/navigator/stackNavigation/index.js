import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../../screens/splashScreen';
import Onboarding from '../../screens/tutorials';
import LoginScreen from '../../screens/login';
import ForgotPassword from '../../screens/forgotPassword';
import ResetPassword from '../../screens/resetPassword';
import detailsScreen from '../../screens/details';
import AddWaterSource from '../../screens/addWaterSource';
import {screenNames} from '../../utils/screenNames';
import DrawarNavigation from '../drawarNavigation';
import DetailsScreen from '../../screens/productDetail';

const Stack = createStackNavigator();
export default function StackNavgation() {
  return (
    <Stack.Navigator
      initialRouteName={screenNames.SPLASH}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={screenNames.SPLASH} component={SplashScreen} />
      <Stack.Screen name={screenNames.ONBOARDING} component={Onboarding} />
      <Stack.Screen name={screenNames.LOGIN} component={LoginScreen} />
      <Stack.Screen name={screenNames.FORGOT} component={ForgotPassword} />
      <Stack.Screen name={screenNames.RESET} component={ResetPassword} />
      <Stack.Screen
        name={screenNames.DRAWER_TAB}
        component={DrawarNavigation}
      />
      <Stack.Screen
        name={screenNames.ADD_WATER_SOURCE}
        component={AddWaterSource}
      />
      <Stack.Screen
        name={screenNames.DETAILS_SCREEN}
        component={detailsScreen}
      />
      <Stack.Screen
        name={screenNames.PRODUCT_DETAILS}
        component={DetailsScreen}
      />
    </Stack.Navigator>
  );
}
