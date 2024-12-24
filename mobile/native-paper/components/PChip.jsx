import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Chip } from 'react-native-paper'

const PChip = () => {
    return <View style={{ flexDirection: "row", gap: 10 }}>
        <Chip>john doe</Chip>
        <Chip mode='flat'>ross doe</Chip>
        <Chip
            mode='outlined'
            onPress={e => console.warn("pressed")}>ross doe</Chip>
    </View>
}

export default PChip

const styles = StyleSheet.create({})