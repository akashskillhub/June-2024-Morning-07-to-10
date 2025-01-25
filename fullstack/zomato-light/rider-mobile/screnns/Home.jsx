import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Booking from './Booking'
import Profile from './Profile'
import Wrapper from './Wrapper';

const Home = () => {
    const Tab = createBottomTabNavigator()
    return <Wrapper>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                options={{
                    tabBarIcon: () => <AntDesign name="profile" size={24} color="black" />
                }}
                name="Booking"
                component={Booking} />
            <Tab.Screen
                options={{
                    tabBarIcon: () => <MaterialCommunityIcons name="account" size={24} color="black" />
                }}
                name="Profile"
                component={Profile} />
        </Tab.Navigator>
    </Wrapper>
}

export default Home

const styles = StyleSheet.create({})