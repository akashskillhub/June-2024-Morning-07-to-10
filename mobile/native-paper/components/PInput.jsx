import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'

const PInput = () => {
    const [isPass, setIsPass] = useState(true)
    return <View style={{ margin: 15, gap: 10 }}>
        <TextInput placeholder='default' />
        <TextInput mode='flat' placeholder='flat' />
        <TextInput mode='outlined' placeholder='outline' />

        <TextInput error={true} mode='outlined' placeholder='outline' />
        <TextInput error={true} mode='flat' placeholder='flat' />

        <TextInput secureTextEntry={true} mode='outlined' placeholder='password' />

        <TextInput
            keyboardType='numeric'
            mode='outlined'
            placeholder='num keyboard'
            onChangeText={val => console.warn(val)}
        />

        <TextInput
            secureTextEntry={isPass}
            mode='outlined'
            placeholder='pass'
            right={<TextInput.Icon
                icon={isPass ? "eye" : "eye-off"}
                onPress={e => setIsPass(!isPass)} />}
        />
    </View>
}

export default PInput

const styles = StyleSheet.create({})