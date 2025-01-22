import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { ActivityIndicator, Button, Card, List, MD3Colors } from 'react-native-paper'
import { useSelector } from 'react-redux'
import { useMobileCustomerLogoutMutation } from '../redux/apis/auth.api'
import asyncStorage from '@react-native-async-storage/async-storage'

const Profile = ({ navigation }) => {
    const { customer } = useSelector(state => state.auth)
    const [logout, { isSuccess, isLoading }] = useMobileCustomerLogoutMutation()

    const handleLogout = async () => {
        await asyncStorage.removeItem("zomato-customer")
    }
    useEffect(() => {
        if (isSuccess) {
            handleLogout()
            navigation.navigate("login")
        }
    }, [isSuccess])
    return <>
        <Card>
            {
                isLoading
                    ? <ActivityIndicator />
                    : <Card.Content>
                        <List.Section>
                            <List.Subheader>Profile</List.Subheader>
                            <List.Item title={customer && customer.name}></List.Item>
                            <List.Item title={customer && customer.email}></List.Item>
                            <Button onPress={logout} mode='contained' buttonColor={MD3Colors.error50}>Logout</Button>
                        </List.Section>
                    </Card.Content>
            }

        </Card>
    </>
}

export default Profile

const styles = StyleSheet.create({})