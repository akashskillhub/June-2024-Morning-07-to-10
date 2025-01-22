import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { Button, Card, TextInput } from 'react-native-paper'
import { useState } from 'react'
import {
    useMobileCustomerVerifyOTPMutation,
    useMobileLoginCustomerMutation
} from '../redux/apis/auth.api'

import asyncStorage from "@react-native-async-storage/async-storage"
import { useDispatch } from 'react-redux'
import { setLocalData } from '../redux/slices/auth.slice'
import { useIsFocused } from '@react-navigation/native'
const Login = ({ navigation }) => {
    const isFocused = useIsFocused()
    const dispatch = useDispatch()
    const [signin, { isSuccess, isLoading, reset }] = useMobileLoginCustomerMutation()
    const [verify, { error, isSuccess: verifySuccess, data, isLoading: verifyIsLoading }] = useMobileCustomerVerifyOTPMutation()
    const [otp, setOtp] = useState()
    const [userData, setUserData] = useState({
        userName: ""
    })

    const handleLogin = async () => {
        await asyncStorage.setItem("zomato-customer", JSON.stringify(data))
        navigation.navigate("home")
    }
    const isLogin = async () => {
        const result = await asyncStorage.getItem("zomato-customer")
        if (result) {
            dispatch(setLocalData(JSON.parse(result)))
            navigation.navigate("home")
        }
    }
    useEffect(() => {
        if (verifySuccess) {
            handleLogin()
        }
    }, [verifySuccess])

    useEffect(() => {
        isLogin()

    }, [])

    useEffect(() => {
        if (isFocused) {
            reset()
            setUserData({ userName: "" })
            setOtp(null)
        }
    }, [isFocused])

    return (
        <View style={{
            padding: 20,
            height: Dimensions.get("screen").height,
            justifyContent: "center"
        }}>
            {
                isSuccess
                    ? <Card>
                        <Card.Title title="Enter Otp" />
                        <Card.Content style={{ gap: 10 }}>
                            <TextInput
                                onChangeText={val => setOtp(val)}
                                value={otp}
                                placeholder="Enter Your Otp"
                                mode="outlined"
                            />
                            <Button
                                disabled={verifyIsLoading}
                                onPress={e => verify({ ...userData, otp })}
                                buttonColor='orange'
                                mode='contained'>
                                {verifyIsLoading ? "Please wait..." : "Verify OTP"}
                            </Button>
                        </Card.Content>
                    </Card>
                    : <Card>
                        <Card.Title title="Login" />
                        <Card.Content style={{ gap: 10 }}>
                            <TextInput
                                value={userData.userName}
                                onChangeText={val => setUserData({ userName: val })}
                                placeholder="Enter Email or Mobile"
                                mode="outlined"
                            />
                            <Button
                                onPress={e => signin(userData)}
                                buttonColor='black'
                                mode='contained'
                                disabled={isLoading}
                            >
                                {isLoading ? "Please Wait.." : "SignIn"}
                            </Button>
                            <Pressable onPress={e => navigation.navigate("register")}>
                                <Text>Create Account</Text>
                            </Pressable>
                        </Card.Content>
                    </Card>
            }
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})