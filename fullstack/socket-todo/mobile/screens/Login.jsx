import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Button, Card, TextInput } from 'react-native-paper'
import { useMobileEmployeeLoginMutation } from '../redux/authApi'

const Login = ({ navigation }) => {
    const [employeeData, setEmployeeData] = useState({})
    const [loginEmployee, { data, isSuccess, isError, error, isLoading }] = useMobileEmployeeLoginMutation()
    useEffect(() => {
        if (isSuccess) {
            navigation.navigate("home")
        }
    }, [isSuccess])
    return (
        <View style={{
            padding: 20,
            height: Dimensions.get("screen").height,
            justifyContent: "center"
        }}>

            {
                data && <Text>{JSON.stringify(data, null, 2)}</Text>
            }
            {
                isError && <Text>{JSON.stringify(error, null, 2)}</Text>
            }

            {
                isLoading
                    ? <ActivityIndicator />
                    : <Card>
                        <Card.Title title="Login" />
                        <Card.Content style={{ gap: 15 }}>
                            <TextInput
                                onChangeText={val => setEmployeeData({ ...employeeData, email: val })}
                                mode='outlined'
                                placeholder='Enter Email' />
                            <TextInput
                                secureTextEntry
                                onChangeText={val => setEmployeeData({ ...employeeData, password: val })}
                                mode='outlined'
                                placeholder='Enter Password' />
                            <Button onPress={() => loginEmployee(employeeData)} mode='contained'>Login</Button>
                        </Card.Content>
                    </Card>
            }

        </View>
    )
}

export default Login

const styles = StyleSheet.create({})