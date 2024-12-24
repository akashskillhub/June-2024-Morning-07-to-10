import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Settings = ({ route, navigation }) => {
    const x = route.params
    console.warn(x)
    return (
        <View>
            <Text>Settings</Text>
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({})