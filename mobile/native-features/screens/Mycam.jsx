import { Camera, CameraType, FlashMode } from 'expo-camera'
import { useEffect, useRef, useState } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'

const Mycam = () => {
    const [img, setImg] = useState()
    const [flash, setFlash] = useState(FlashMode.off)
    const camRef = useRef()
    const [type, setType] = useState(CameraType.back)
    const handlePermission = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync()
        if (status === "granted") {
            console.log("ok")
        }
    }

    const captureImage = async () => {
        const result = await camRef.current.takePictureAsync()
        console.log(result)
        setImg(result.uri)

    }



    useEffect(() => {
        handlePermission()
        // console.log(camRef)
    }, [])

    return <>

        {
            img
                ? <View>
                    <Image source={{ uri: img }} height={100} width={100} />
                    <Button title='cancel' onPress={e => setImg(null)} />
                </View>
                : <View style={{ gap: 10 }}>
                    <Camera
                        flashMode={flash}
                        ref={camRef}
                        type={type}
                        style={{ height: 400, width: 400 }}
                    />
                    <Button title='switch' onPress={e => setType(type === CameraType.back ? CameraType.front : CameraType.back)} />

                    <Button title='capture' onPress={captureImage} />
                    <Button title='flash' onPress={e => setFlash(flash === FlashMode.torch ? FlashMode.off : FlashMode.torch)} />
                </View>
        }

    </>
}

export default Mycam

const styles = StyleSheet.create({})