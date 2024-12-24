import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Card, TextInput } from 'react-native-paper'

const Login = ({ navigation }) => {
    return (
        <View style={{
            padding: 20,
            height: Dimensions.get("screen").height,
            justifyContent: "center"
        }}>
            <Card>
                <Card.Title title="Login" />
                <Card.Content style={{ gap: 15 }}>
                    <TextInput mode='outlined' placeholder='Enter Email' />
                    <TextInput mode='outlined' placeholder='Enter Password' />
                    <Button onPress={() => navigation.navigate("home")} mode='contained'>Login</Button>
                </Card.Content>
            </Card>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})