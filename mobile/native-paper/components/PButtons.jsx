import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const PButtons = () => {
    return <>
        <Button>default</Button>
        <Button mode='contained'>contained</Button>
        <Button mode='contained-tonal'>contained-tonal</Button>
        <Button mode='elevated'>elevated</Button>
        <Button mode='outlined'>outlined</Button>
        <Button mode='text'>text</Button>

        <Button
            icon="camera"
            // disabled={true}
            // loading={true}
            mode='contained'>wait..</Button>
    </>
}

export default PButtons

const styles = StyleSheet.create({})