import { StatusBar, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { Appbar, PaperProvider } from 'react-native-paper'
import riderReduxStore from './redux/store'
import { Provider } from 'react-redux'
import Login from './screnns/Login'
import Home from './screnns/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { io } from 'socket.io-client'
import Wrapper from './screnns/Wrapper'
export const socket = io("https://zomato-lite-yfnq.onrender.com")

const App = () => {

  const Stack = createNativeStackNavigator()

  return <Provider store={riderReduxStore} >

    <PaperProvider>
      <StatusBar hidden />
      <Appbar.Header style={{ backgroundColor: "red" }} >
        <Appbar.Content color='white' title="Zomato Lite" />
      </Appbar.Header>

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