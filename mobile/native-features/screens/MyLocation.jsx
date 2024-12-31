import { StyleSheet, Text, View } from 'react-native'
import * as Location from 'expo-location'
import { useEffect, useState } from 'react'
import axios from 'axios'

const MyLocation = () => {
    const [loc, setLoc] = useState()
    const API_KEY = "fbaaa01af3074fd6906765fea092df89"
    const handleLocation = async () => {
        try {
            const { status } = await Location.requestForegroundPermissionsAsync()
            if (status === "granted") {
                const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync()

                const { data } = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2C${longitude}&key=${API_KEY}`)
                setLoc(data.results[0].formatted)
            }

        } catch (error) {

        }
    }

    useEffect(() => {
        handleLocation()
    }, [])
    return (
        <View>
            <Text>{loc}</Text>
        </View>
    )
}

export default MyLocation

const styles = StyleSheet.create({})