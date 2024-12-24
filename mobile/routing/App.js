import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home'
import Profile from './screens/Profile'
import Settings from './screens/Settings'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AntDesign from '@expo/vector-icons/AntDesign';
import Login from './screens/Login'

const App = () => {
  const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator()
  return <>
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='home' component={Home} />
      </Stack.Navigator>



    </NavigationContainer>
  </>
}

export default App

const styles = StyleSheet.create({})