import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Button, Card, List, MD3Colors } from 'react-native-paper'
import { useSelector } from 'react-redux'
import asyncStorage from '@react-native-async-storage/async-storage'
import { useMobileRiderLogoutMutation } from '../redux/rider-auth.api'

const Profile = ({ navigation }) => {
    const { rider } = useSelector(state => state.auth)
    const [logoutRider,{isSuccess,isLoading}] = useMobileRiderLogoutMutation()

    const handleRiderLogout = async() => {
        await asyncStorage.removeItem("zomato-rider")
    }
    useEffect(()=>{
        if(isSuccess){
            handleRiderLogout()
            navigation.navigate("login")
        }
    },[isSuccess])

    return <View style={{marginTop:10}}>
        <Card>
            {
                isLoading
                ? <ActivityIndicator/>
                :  <Card.Content>
                <List.Section>
                    <List.Subheader>Profile</List.Subheader>
                    <List.Item title={rider && rider.name}></List.Item>
                    <List.Item title={rider && rider.email}></List.Item>
                    <Button onPress={logoutRider}  mode='contained' buttonColor={MD3Colors.error50}>Logout</Button>
                </List.Section>
            </Card.Content>
            }
        </Card>
    </View>
}

export default Profile

const styles = StyleSheet.create({})