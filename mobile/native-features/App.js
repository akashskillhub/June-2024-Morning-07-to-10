import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyBattery from './screens/MyBattery';
import MyBrigtness from './screens/MyBrigtness';
import MyContacts from './screens/MyContacts';
import MyDevice from './screens/MyDevice';
import MyNetwork from './screens/MyNetwork';
import MyLocation from './screens/MyLocation';
import Mycam from './screens/Mycam';
import MyDoc from './screens/MyDoc';
import MyQr from './screens/MyQr';

export default function App() {
  return <View style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }}>
    {/* <MyBattery /> */}
    {/* <MyBrigtness /> */}
    {/* <MyContacts /> */}
    {/* <MyDevice /> */}
    {/* <MyNetwork /> */}
    {/* <MyLocation /> */}
    {/* <Mycam /> */}
    {/* <MyDoc /> */}
    <MyQr />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
