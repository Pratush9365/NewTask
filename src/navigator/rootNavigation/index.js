import {NavigationContainer} from '@react-navigation/native';
import StackNavgation from '../stackNavigation';

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <StackNavgation />
    </NavigationContainer>
  );
}
