import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/home/HomeScreen';
import { Provider } from 'react-redux';
import store from './redux/store';
import StackNavigator from './screens/home/navigation/StackNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigator/>
      <StatusBar style="auto" />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
