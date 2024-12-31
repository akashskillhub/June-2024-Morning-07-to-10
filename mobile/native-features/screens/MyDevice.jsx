import { StyleSheet, Text, View } from 'react-native'
import * as Device from 'expo-device'

const MyDevice = () => {
    return <>
        <View>
            <Text>Brand : {Device.brand}</Text>
            <Text>Year : {Device.deviceYearClass}</Text>
            <Text>Manu : {Device.manufacturer}</Text>
            <Text>OS Name : {Device.osName}</Text>
            <Text>OS : {Device.osVersion}</Text>
            <Text>RAM : {Device.totalMemory / 1e9}</Text>
            {/* <Text>{JSON.stringify(Device, null, 2)}</Text> */}
        </View>
    </>
}

export default MyDevice

const styles = StyleSheet.create({})