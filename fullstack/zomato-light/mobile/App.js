import { Appbar, PaperProvider } from 'react-native-paper'
import { StatusBar } from 'expo-status-bar'
import Register from './screens/Register'
import { NavigationContainer } from '@react-navigation/native'
import Login from './screens/Login'
import Home from './screens/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import reduxStore from './redux/store'
import Menu from './screens/Menu'
import Checkout from './screens/Checkout'

const App = () => {
  const Stack = createNativeStackNavigator()
  return <Provider store={reduxStore}>
    <PaperProvider>
      <StatusBar hidden />
      <Appbar.Header style={{ backgroundColor: "red" }} >
        <Appbar.Content color='white' title="Zomato Lite" />
      </Appbar.Header>

      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='login' component={Login} />
          <Stack.Screen name='register' component={Register} />
          <Stack.Screen name='home' component={Home} />
          <Stack.Screen options={{ headerShown: true }} name='checkout' component={Checkout} />
          <Stack.Screen options={{ headerShown: true }} name='menu' component={Menu} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  </Provider>
}

export default App