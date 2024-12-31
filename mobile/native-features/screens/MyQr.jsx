import { Button, Linking, StyleSheet, Text, View } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { useState } from 'react'

const MyQr = () => {
    const [result, setResult] = useState()
    const handleBarcode = (qrData) => {
        console.log(qrData)
        Linking.openURL(qrData.data)
    }
    return (
        <View>
            {
                result
                    ? <View>
                        <Text>{result}</Text>
                        <Button title='visit' onPress={e => Linking.openURL(result)} />
                        <Button title='scan again' onPress={e => setResult(null)} />
                    </View>
                    : <BarCodeScanner
                        focusable={true}
                        onBarCodeScanned={handleBarcode}
                        style={{ height: 400, width: 400 }} />
            }

        </View>
    )
}

export default MyQr

const styles = StyleSheet.create({})