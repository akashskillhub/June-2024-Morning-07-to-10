import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PaperProvider } from 'react-native-paper'
import PButtons from './components/PButtons'
import PChip from './components/PChip'
import { StatusBar } from 'expo-status-bar'
import PInput from './components/PInput'

export default function App() {
  return <PaperProvider>
    <StatusBar hidden={true} />
    {/* <PButtons /> */}
    {/* <PChip /> */}
    <PInput />
  </PaperProvider>
}

const styles = StyleSheet.create({})