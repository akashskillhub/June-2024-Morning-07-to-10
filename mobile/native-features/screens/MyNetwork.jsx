import { StyleSheet, Text, View } from 'react-native'
import * as Network from 'expo-network'
import { useEffect, useState } from 'react'

const MyNetwork = () => {
    const [netInfo, setNetInfo] = useState({})
    const handleNetwork = async () => {
        try {
            const x = await Network.getNetworkStateAsync()
            const y = await Network.getIpAddressAsync()
            const z = await Network.isAirplaneModeEnabledAsync()
            setNetInfo({
                isConnected: x.isConnected,
                reachable: x.isInternetReachable,
                type: x.type,
                ip: y,
                airplaneMode: z
            })
            console.log(x)
            console.log(y)
            console.log(z)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { handleNetwork() }, [])
    return (
        <View>
            <Text>Net Connected : {netInfo.isConnected ? "Yes" : "No"}</Text>
            <Text>internet : {netInfo.reachable ? "Yes" : "No"}</Text>
            <Text>type : {netInfo.type}</Text>
            <Text>ip : {netInfo.ip}</Text>
            <Text>airplane : {netInfo.airplaneMode ? "yes" : "no"}</Text>
        </View>
    )
}

export default MyNetwork

const styles = StyleSheet.create({})