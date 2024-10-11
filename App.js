import { NavigationContainer } from '@react-navigation/native';
import CalculoScreen from './screens/calculo/CalculoScreens';
import BaskaraScreen from './screens/calculo/BaskaraScreen';
import HomeScreen from './screens/home/HomeScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Calculo" component={CalculoScreen} />
        <Drawer.Screen name="Báskara" component={BaskaraScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}