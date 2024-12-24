import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = ({ navigation }) => {
    return (
        <View style={{
            gap: 20,
            margin: 10,
            backgroundColor: "red",
            height: 400,
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <Text>Profile</Text>
            <Button
                title='setting'
                onPress={e => navigation.navigate("settings", { id: 1, name: "fake product" })} />
            <Button title='home' onPress={e => navigation.navigate("home")} />
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})