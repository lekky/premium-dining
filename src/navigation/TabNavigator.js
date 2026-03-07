import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import HomeScreen from '../screens/Home/HomeScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import ReservationsScreen from '../screens/Reservations/ReservationsScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: '🏠',
  Search: '🔍',
  Reservations: '📅',
  Profile: '👤',
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => (
          <Text style={{ fontSize: 20 }}>{TAB_ICON[route.name]}</Text>
        ),
        tabBarActiveTintColor: '#c8a97e',
        tabBarInactiveTintColor: '#999',
        headerStyle: { backgroundColor: '#1a1a1a' },
        headerTintColor: '#c8a97e',
        headerTitleStyle: { fontWeight: 'bold' },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Reservations" component={ReservationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
