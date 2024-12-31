import { Button, StyleSheet, Text, View } from 'react-native'
import * as Brightness from 'expo-brightness'
import { useEffect, useState } from 'react'

const MyBrigtness = () => {
    const [br, setBr] = useState(0.2)
    const handleBrighness = async () => {
        const { status } = await Brightness.requestPermissionsAsync()
        if (status === "granted") {
            await Brightness.setBrightnessAsync(br)
        }
    }
    useEffect(() => {
        handleBrighness()
    }, [br])
    return (
        <View>
            <Text>MyBrigtness {br}</Text>
            <Button onPress={e => setBr(br + 0.1)} title='in' />
            <Button onPress={e => setBr(br - 0.1)} title='dec' />
        </View>
    )
}

export default MyBrigtness

const styles = StyleSheet.create({})