import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Login = ({ navigation }) => {
    return (
        <View>
            <Text>Login</Text>
            <Button title='login' onPress={e => navigation.navigate("home")} />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})