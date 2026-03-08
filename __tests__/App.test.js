import React from 'react';
import { render } from '@testing-library/react-native';

jest.mock('../src/config/firebase', () => ({
  auth: {},
  db: {},
}));

jest.mock('@expo/vector-icons', () => ({
  Feather: 'Feather',
}), { virtual: true });

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
  SafeAreaProvider: ({ children }) => children,
}));

jest.mock('@react-navigation/native', () => {
  const actual = jest.requireActual('@react-navigation/native');
  return {
    ...actual,
    NavigationContainer: ({ children }) => children,
  };
});

jest.mock('@react-navigation/bottom-tabs', () => ({
  createBottomTabNavigator: () => ({
    Navigator: ({ children }) => children,
    Screen: ({ component: Component, name }) => <Component />,
  }),
}));

jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: () => ({
    Navigator: ({ children }) => children,
    Screen: ({ component: Component }) => <Component />,
  }),
}));

describe('App', () => {
  it('renders the home screen', () => {
    const HomeScreen = jest.requireActual('../src/screens/Home/HomeScreen').default;
    const { getByText } = render(<HomeScreen />);
    expect(getByText('Premium Dining')).toBeTruthy();
  });

  it('renders the search screen', () => {
    const SearchScreen = jest.requireActual('../src/screens/Search/SearchScreen').default;
    const { getByText } = render(<SearchScreen />);
    expect(getByText('Search')).toBeTruthy();
  });

  it('renders the reservations screen', () => {
    const ReservationsScreen = jest.requireActual('../src/screens/Reservations/ReservationsScreen').default;
    const { getByText } = render(<ReservationsScreen />);
    expect(getByText('Reservations')).toBeTruthy();
  });

  it('renders the profile screen', () => {
    const ProfileScreen = jest.requireActual('../src/screens/Profile/ProfileScreen').default;
    const { getByText } = render(<ProfileScreen />);
    expect(getByText('Profile')).toBeTruthy();
  });
});
