import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Button, Card, TextInput } from 'react-native-paper'
import asyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'
import { useMobileRiderLoginMutation } from '../redux/rider-auth.api'
import { useDispatch } from 'react-redux'
import { setLocalData } from '../redux/rider-auth.slice'

const Login = ({navigation}) => {
  const dispatch = useDispatch()
    const [riderLogin,{isError,isLoading,isSuccess,error,data}] = useMobileRiderLoginMutation()
    const [userData, setUserData] = useState({
        userName:"",
        password:"",
    })

    const isRiderLogin = async() => {
      const result = await asyncStorage.getItem("zomato-rider")
      if(result){
        dispatch(setLocalData(JSON.parse(result)))
        navigation.navigate("home")
      }
     }

    const handleRiderLogin = async() => {
      await asyncStorage.setItem("zomato-rider",JSON.stringify(data))
      navigation.navigate("home")
   }

    useEffect(()=>{
      if(isSuccess){
        handleRiderLogin()
      }
    },[isSuccess])

    useEffect(()=>{
      isRiderLogin()
    },[])
    
  return (
    <View style={{
      padding:20,
      height: Dimensions.get("screen").height,
      justifyContent:"center"
    }}>
         <Card>
            <Card.Title title="Login"/>
            <Card.Content style={{gap:10}}>
            <TextInput
            onChangeText={val=>setUserData({...userData,userName:val})}
                  placeholder="Enter email or mobile"
                  mode="outlined"
                />
            <TextInput
            onChangeText={val=>setUserData({...userData,password:val})}
                secureTextEntry
                  placeholder="Enter Password"
                  mode="outlined"
                />
              <Button disabled={isLoading} onPress={e=>riderLogin(userData)}  mode='contained'>{isLoading ? "please wait..." : "Login"}</Button>
            </Card.Content>
          </Card>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})