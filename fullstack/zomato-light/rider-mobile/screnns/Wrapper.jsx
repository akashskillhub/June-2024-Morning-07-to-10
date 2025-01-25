import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { socket } from '../App'
import { useMobileRiderLogoutMutation } from '../redux/rider-auth.api'
import asyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from "@react-navigation/native"
const Wrapper = ({ children }) => {
    const { navigate } = useNavigation()

    const handleRiderLogout = async () => {
        await asyncStorage.removeItem("zomato-rider")
    }
    const [logout] = useMobileRiderLogoutMutation()
    useEffect(() => {
        socket.on("rider-logout", () => {
            logout()
            handleRiderLogout()
            navigate("login")
        })
    }, [])

    return children
}

export default Wrapper

const styles = StyleSheet.create({})