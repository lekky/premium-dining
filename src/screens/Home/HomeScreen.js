import { StyleSheet, Text, View } from 'react-native';
import HomeHeader from '../../components/HomeHeader';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <View style={styles.body}>
        <Text style={styles.title}>Premium Dining</Text>
        <Text style={styles.subtitle}>Discover exceptional restaurants</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    flex: 1,
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
