import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Card, TextInput } from 'react-native-paper'
import { useMobileRegisterCustomerMutation } from '../redux/apis/auth.api'

const Register = ({ navigation }) => {
    const [signup, { isSuccess, isError, error }] = useMobileRegisterCustomerMutation()
    const [showOtpScreen, setShowOtpScreen] = useState(false)
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        mobile: ""
    })
    if (isError) {
        console.log(error)
    }
    useEffect(() => {
        if (isSuccess) {
            navigation.navigate("login")
        }
    }, [isSuccess])
    return (
        <View style={{
            padding: 20,
            height: Dimensions.get("screen").height,
            justifyContent: "center"
        }}>
            {
                showOtpScreen
                    ? <Card>
                        <Card.Title title="Enter Otp" />
                        <Card.Content style={{ gap: 10 }}>
                            <TextInput
                                placeholder="Enter Your Otp"
                                mode="outlined"
                            />
                            <Button buttonColor='orange' mode='contained'>Verify OTP</Button>
                        </Card.Content>
                    </Card>
                    : <Card>
                        <Card.Title title="Register" />
                        <Card.Content style={{ gap: 10 }}>
                            <TextInput
                                onChangeText={val => setUserData({ ...userData, name: val })}
                                placeholder="Enter Your Name"
                                mode="outlined"
                            />
                            <TextInput
                                onChangeText={val => setUserData({ ...userData, email: val })}
                                placeholder="Enter Your Email"
                                mode="outlined"
                            />
                            <TextInput
                                onChangeText={val => setUserData({ ...userData, mobile: val })}
                                placeholder="Enter Your Mobile"
                                mode="outlined"
                            />
                            <Button
                                onPress={e => signup(userData)}
                                buttonColor='black' mode='contained'>SignUp</Button>

                            <Pressable onPress={e => navigation.navigate("login")}>
                                <Text>Aready Have Account</Text>
                            </Pressable>
                        </Card.Content>
                    </Card>
            }

        </View>
    )
}

export default Register

const styles = StyleSheet.create({})