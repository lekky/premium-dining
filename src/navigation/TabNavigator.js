import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import HomeScreen from '../screens/Home/HomeScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import ReservationsScreen from '../screens/Reservations/ReservationsScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';

const Tab = createBottomTabNavigator();

const ACTIVE_COLOR = '#F2B90D';
const INACTIVE_COLOR = '#64748B';

const TAB_ICONS = {
  Discover: 'compass',
  Bookings: 'calendar',
  Saved: 'heart',
  Chef: 'user',
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <Feather
            name={TAB_ICONS[route.name]}
            size={20}
            color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
          />
        ),
        tabBarActiveTintColor: ACTIVE_COLOR,
        tabBarInactiveTintColor: INACTIVE_COLOR,
        tabBarLabelStyle: styles.tabLabel,
        tabBarStyle: styles.tabBar,
        headerStyle: { backgroundColor: '#1a1a1a' },
        headerTintColor: ACTIVE_COLOR,
        headerTitleStyle: { fontWeight: 'bold' },
      })}
    >
      <Tab.Screen name="Discover" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Bookings" component={ReservationsScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Saved" component={SearchScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Chef" component={ProfileScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    height: 76,
    paddingTop: 12,
    paddingBottom: 24,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(242, 185, 13, 0.1)',
    backgroundColor: 'rgba(34, 30, 16, 0.95)',
    elevation: 0,
  },
  tabLabel: {
    fontFamily: Platform.select({ ios: 'Manrope-Bold', android: 'Manrope-Bold', default: 'Manrope' }),
    fontWeight: '700',
    fontSize: 10,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
});
