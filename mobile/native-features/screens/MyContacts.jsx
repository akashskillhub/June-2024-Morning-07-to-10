import { FlatList, Linking, Pressable, StyleSheet, Text, View } from 'react-native'
import * as Contacts from 'expo-contacts'
import { useEffect, useState } from 'react'

const MyContacts = () => {
    const [data, setData] = useState([])
    const handleContacts = async () => {
        const { status } = await Contacts.requestPermissionsAsync()
        if (status === "granted") {
            const { data } = await Contacts.getContactsAsync()
            setData(data)
        }
    }
    useEffect(() => {
        handleContacts()
    }, [])
    return <>
        <FlatList
            data={data}
            keyExtractor={item => item.lookupKey}
            renderItem={({ item }) => <View>
                <Text>{item.name}</Text>
                <View>{item.phoneNumbers && item.phoneNumbers.map(m => <Pressable onPress={e => Linking.openURL(`tel:${m.number}`)}>
                    <Text>{m.number}</Text>
                </Pressable>)}</View>
            </View>}
        />
    </>
}

export default MyContacts

const styles = StyleSheet.create({})