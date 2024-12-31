import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from './screens/Login'
import Home from './screens/Home'
import { StatusBar } from 'expo-status-bar'
import { PaperProvider } from 'react-native-paper'
import { Provider } from 'react-redux'
import reduxStore from './redux/store'

const App = () => {
  const Stack = createNativeStackNavigator()
  return <Provider store={reduxStore}>
    <PaperProvider>
      <StatusBar hidden />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='login' component={Login} />
          <Stack.Screen name='home' component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  </Provider>
}

export default App

const styles = StyleSheet.create({})