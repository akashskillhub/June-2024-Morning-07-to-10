import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import ModelWindow from './screens/ModelWindow';
import List from './screens/List';

export default function App() {
  return <>
    {/* <Home /> */}
    {/* <ModelWindow /> */}
    <List />
  </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
