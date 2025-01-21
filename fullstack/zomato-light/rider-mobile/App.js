import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PaperProvider } from 'react-native-paper'
import Login from './screens/Login'
import { Provider } from 'react-redux'
import riderReduxStore from './redux/riderStore'

const App = () => {
  return <Provider store={riderReduxStore}>
    <PaperProvider>
      <Login />
    </PaperProvider>
  </Provider>
}

export default App

const styles = StyleSheet.create({})