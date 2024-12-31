import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useBatteryLevel, useBatteryState, useLowPowerMode, usePowerState } from 'expo-battery'

const MyBattery = () => {
    const bl = useBatteryLevel()
    const isChanrging = useBatteryState()
    const isLow = useLowPowerMode() // battery power save mode

    const { batteryLevel, batteryState, lowPowerMode } = usePowerState()
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text>Level {Math.round(bl * 100)}</Text>
            <Text>{isChanrging === 1 ? "not charging" : "charging"}</Text>
            <Text>{isLow ? "Low" : "Not Low"}</Text>

            <Text>------------------------------</Text>

            <Text>Level {Math.round(batteryLevel * 100)}</Text>
            <Text>{batteryState === 1 ? "not charging" : "charging"}</Text>
            <Text>{lowPowerMode ? "Low" : "Not Low"}</Text>
        </View>
    )
}

export default MyBattery

const styles = StyleSheet.create({})