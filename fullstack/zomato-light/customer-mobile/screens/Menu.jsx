import { FlatList, Pressable, RefreshControl, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLazyMobileGetResturantMenuQuery } from '../redux/apis/customer.api'
import { Button, Card, MD3Colors } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, decCartQty, incCartQty } from '../redux/slices/cart.slice'
import { useNavigation } from '@react-navigation/native'

const Menu = ({ route }) => {
    const { navigate } = useNavigation()
    const { cart } = useSelector(state => state.bag)
    const dispatch = useDispatch()
    const { item } = route.params
    const [getMenu, { isLoading, data }] = useLazyMobileGetResturantMenuQuery()

    useEffect(() => { getMenu(item._id) }, [])

    console.log(cart)

    return <>
        {
            data && <FlatList
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={e => getMenu(item._id)} />}
                data={data}
                keyExtractor={item => item._id}
                renderItem={({ item }) => <Card style={{ margin: 20, }}>
                    <View style={{ flexDirection: "row" }}>
                        <Card.Content style={{ padding: 10, flex: 1, justifyContent: "space-between" }}>
                            <View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text>{item.name}</Text>
                                    <Text>{item.price}</Text>
                                </View>
                                <Text>{item.desc}</Text>
                            </View>
                            {
                                cart.find(cartItem => cartItem._id === item._id)
                                    ? <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <Button onPress={e => dispatch(decCartQty(item._id))} mode='contained-tonal'>-</Button>
                                        <Text style={{ flex: 1, textAlign: "center" }}>
                                            {cart[cart.findIndex(c => c._id === item._id)].qty}
                                        </Text>
                                        <Button onPress={e => dispatch(incCartQty(item._id))} mode='contained-tonal'>+</Button>
                                    </View>
                                    : <Button onPress={e => dispatch(addToCart(item))} mode='contained-tonal'>ADD</Button>
                            }

                        </Card.Content>
                        <Card.Cover style={{ flex: 1 }} source={{ uri: item.image }} />
                    </View>
                </Card>}

            />
        }

        {
            cart.length > 0 && <View style={{
                alignItems: "center",
                padding: 10,
                backgroundColor: MD3Colors.primary80
            }}>
                <Text>{cart.length} items added </Text>
                <Button onPress={e => navigate("checkout", { resturant: item._id })} mode='contained'>Checkout</Button>
            </View>
        }

    </>
}

export default Menu

const styles = StyleSheet.create({})