import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { ActivityIndicator, Button, Card, List, MD3Colors } from 'react-native-paper'
import { useSelector } from 'react-redux'
import { useMobileEmployeeLogoutMutation } from '../redux/authApi'

const Profile = ({ navigation }) => {
    const { employee } = useSelector(state => state.auth)
    const [logout, { isSuccess, isLoading }] = useMobileEmployeeLogoutMutation()
    useEffect(() => {
        if (isSuccess) {
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
                            <List.Item title={employee && employee.name}></List.Item>
                            <List.Item title={employee && employee.email}></List.Item>
                            <Button onPress={logout} mode='contained' buttonColor={MD3Colors.error50}>Logout</Button>
                        </List.Section>
                    </Card.Content>
            }

        </Card>
    </>
}

export default Profile

const styles = StyleSheet.create({})