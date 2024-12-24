import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const ModelWindow = () => {
    const [show, setShow] = useState(false)
    return <View style={{ padding: 50 }}>
        <Button title='open modal' onPress={e => setShow(true)} />

        <Modal visible={show} animationType='slide'>
            <Text>helllo</Text>
            <Button title='close' onPress={e => setShow(false)} />
        </Modal>
    </View>
}

export default ModelWindow

const styles = StyleSheet.create({})