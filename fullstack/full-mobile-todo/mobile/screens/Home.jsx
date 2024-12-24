import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Todos from './Todos'
import CompleteTodos from './CompleteTodos'
import Profile from './Profile'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const Home = () => {
    const Tab = createBottomTabNavigator()
    return <>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                options={{
                    tabBarIcon: () => <FontAwesome name="tasks" size={24} color="black" />
                }}
                name="todos"
                component={Todos} />
            <Tab.Screen
                options={{
                    tabBarIcon: () => <Octicons name="tasklist" size={24} color="black" />
                }}
                name="complete"
                component={CompleteTodos} />
            <Tab.Screen
                options={{
                    tabBarIcon: () => <MaterialIcons name="account-circle" size={24} color="black" />
                }}
                name="profile"
                component={Profile} />
        </Tab.Navigator>
    </>
}

export default Home

const styles = StyleSheet.create({})