import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Success = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Orders")
        }, 3000)
    }, [])
    return (
        <View>
            <Text>Order Place Success</Text>
        </View>
    )
}

export default Success

const styles = StyleSheet.create({})