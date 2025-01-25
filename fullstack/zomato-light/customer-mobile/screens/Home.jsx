import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Profile from './Profile'
import Delivery from './Delivery';
import History from './History';
import Orders from './Orders';
import Food from './Food';
import * as Location from 'expo-location';
import { useSelector } from 'react-redux';
import { useMobileCustomerUpdateInfoMutation, useMobileGetLocationMutation } from '../redux/apis/customer.api';
import { Button } from 'react-native-paper';
import asyncStorage from '@react-native-async-storage/async-storage';
const Home = () => {
    const { customer } = useSelector(state => state.auth)
    console.log("customer", customer)

    const Tab = createBottomTabNavigator()
    if (customer && !customer.infoComplete) {
        return <>
            <Info />
        </>
    }
    // mongo aggregation pipeline -> 20 step
    return <>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                options={{
                    tabBarIcon: () => <MaterialCommunityIcons name="food" size={24} color="black" />
                }}
                name="Food"
                component={Food} />
            <Tab.Screen
                options={{
                    tabBarIcon: () => <FontAwesome name="reorder" size={24} color="black" />
                }}
                name="Orders"
                component={Orders} />
            <Tab.Screen
                options={{
                    tabBarIcon: () => <FontAwesome name="history" size={24} color="black" />
                }}
                name="History"
                component={History} />
            <Tab.Screen
                options={{
                    tabBarIcon: () => <MaterialIcons name="account-circle" size={24} color="black" />
                }}
                name="Profile"
                component={Profile} />
        </Tab.Navigator>
    </>
}

const Info = () => {
    const [updateInfo, {
        isSuccess: updateInfoSucess,
        isLoading: updateInfoIsLoading,
        error: updateError,
        data: updatedData
    }
    ] = useMobileCustomerUpdateInfoMutation()
    const [gender, setGender] = useState()
    const [getLocation, { data, isSuccess, isLoading, error }] = useMobileGetLocationMutation()
    const handleLocation = async () => {
        try {

            const { status } = await Location.requestForegroundPermissionsAsync()
            if (status === "granted") {
                const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync()

                getLocation({ latitude, longitude })
            }
        } catch (error) {
            console.log(error)

        }
    }

    const handleUpdateSuccess = async () => {
        await asyncStorage.setItem("zomato-customer", JSON.stringify(updatedData))
    }

    useEffect(() => { handleLocation() }, [])
    useEffect(() => {
        if (updateInfoSucess) {
            handleUpdateSuccess()
        }
    }, [updateInfoSucess])
    return <>
        <View>
            {
                isLoading && <Text>Please Wait...</Text>
            }
            <Text>Info</Text>
            {
                data && <View>
                    <Text>{data.address}</Text>
                    <Text>{data.city}</Text>
                    <Text>Choose Gender</Text>
                    <View style={{ flexDirection: "row", marginVertical: 10 }}>
                        <View style={{
                            padding: 20,
                            flex: 1,
                            borderWidth: 1,
                            backgroundColor: gender === "male" ? "blue" : "white"
                        }}>
                            <Pressable onPress={e => setGender("male")}><View><Text>Male</Text></View></Pressable>
                        </View>
                        <View style={{
                            padding: 20,
                            flex: 1,
                            borderWidth: 1,
                            backgroundColor: gender === "female" ? "blue" : "white"
                        }}>
                            <Pressable onPress={e => setGender("female")}><View><Text>FeMale</Text></View></Pressable>
                        </View>
                    </View>
                    <Button
                        disabled={updateInfoIsLoading}
                        onPress={e => updateInfo({ ...data, gender })}
                        mode='contained'>
                        {updateInfoIsLoading ? "Please Wait" : "Update Info"}
                    </Button>
                </View>
            }
        </View>
    </>
}

export default Home

const styles = StyleSheet.create({})