import { Button, Image, StyleSheet, Text, View } from 'react-native'
import * as Doc from 'expo-document-picker'
import { useState } from 'react'

const MyDoc = () => {
    const [docs, setDocs] = useState([])
    const handleDocs = async () => {
        const result = await Doc.getDocumentAsync({ multiple: true })
        console.log(result)
        setDocs(result.assets)
    }
    return <>
        <View>
            {
                docs.map(item => <View>
                    <Text>name {item.name}</Text>
                    <Text>mime {item.mimeType}</Text>
                    <Text>size {item.size}</Text>
                    <Image source={{ uri: item.uri }} height={100} />
                </View>)
            }
            <Button title='select docs' onPress={handleDocs} />
        </View>
    </>
}

export default MyDoc

const styles = StyleSheet.create({})