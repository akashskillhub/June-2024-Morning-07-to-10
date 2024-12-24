import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AntDesign from '@expo/vector-icons/AntDesign';
import Profile from './Profile'
import Settings from './Settings'

const Home = () => {
    const Tab = createBottomTabNavigator()
    return <>
        <Tab.Navigator>
            <Tab.Screen
                options={{ tabBarIcon: () => <AntDesign name="profile" size={24} color="black" /> }}
                name='profile'
                component={Profile} />
            <Tab.Screen
                options={{ tabBarIcon: () => <AntDesign name="setting" size={24} color="black" /> }}
                name='settings'
                component={Settings} />
        </Tab.Navigator>
    </>
}

export default Home

const styles = StyleSheet.create({})