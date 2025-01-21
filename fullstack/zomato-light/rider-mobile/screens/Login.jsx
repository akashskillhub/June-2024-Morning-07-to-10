import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, Button, Card, TextInput } from 'react-native-paper'
import { useMobileRiderLoginMutation } from '../redux/rider-auth.api'


const Login = ({ navigation }) => {
    const [userData, setUserData] = useState({
        userName: "",
        password: ""
    })
    const [signin, { isSuccess, isError, error, data, isLoading }] = useMobileRiderLoginMutation()

    if (isError) {
        console.log("error", error);
    }
    if (isSuccess) {
        console.log("data", data);
    }
    if (isLoading) {
        return <View>
            <ActivityIndicator />
        </View>
    }
    return (
        <View style={{
            padding: 20,
            height: Dimensions.get("screen").height,
            justifyContent: "center"
        }}>
            <Card>
                <Card.Title title="Login" />
                <Card.Content style={{ gap: 10 }}>
                    <TextInput
                        onChangeText={val => setUserData({ ...userData, userName: val })}
                        placeholder="Enter Email or Mobile"
                        mode="outlined"
                    />
                    <TextInput
                        onChangeText={val => setUserData({ ...userData, password: val })}
                        secureTextEntry
                        placeholder="Enter Password"
                        mode="outlined"
                    />
                    <Button onPress={e => signin(userData)} mode='contained'>Login</Button>
                </Card.Content>
            </Card>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})