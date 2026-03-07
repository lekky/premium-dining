import { StyleSheet, Text, View } from 'react-native';

export default function ReservationsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reservations</Text>
      <Text style={styles.subtitle}>Manage your bookings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});
