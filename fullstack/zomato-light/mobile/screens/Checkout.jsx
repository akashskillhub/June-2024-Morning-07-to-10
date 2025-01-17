import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Checkbox, Divider } from 'react-native-paper'
import { addToCart, decCartQty, emptyCart, incCartQty, removeFromCart } from '../redux/slices/cart.slice'
import { useNavigation } from '@react-navigation/native'
import { useMobilePlaceOrderMutation } from '../redux/apis/customer.api'

const Checkout = ({ route }) => {
    const [placeMobileOrder, { isSuccess, isLoading, isError, error }] = useMobilePlaceOrderMutation()

    if (isError) {
        console.log(error)
    }
    if (isSuccess) {
        console.log("placed success")
    }
    const { resturant } = route.params

    const { navigate } = useNavigation()
    const [isChecked, setIsChecked] = useState(false)
    const { cart } = useSelector(state => state.bag)
    const dispatch = useDispatch()
    useEffect(() => {
        if (isSuccess) {
            navigate("success")
        }
    }, [isSuccess])

    return <ScrollView>
        <View Style={{ gap: 5 }}>
            {
                cart && <FlatList
                    scrollEnabled={false}
                    data={cart}
                    keyExtractor={item => item._id}
                    renderItem={({ item }) => <Card style={{ margin: 20 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Card.Content style={{ padding: 10, flex: 1, justifyContent: "space-between" }}>
                                <View>
                                    <Text>{item.name}</Text>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
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
                                        : <Button onPress={e => dispatch(addToCart(item))} mode='contained-tonal'>Add</Button>
                                }
                            </Card.Content>
                            <Card.Cover style={{ flex: 1 }} source={{ uri: item.image }} />

                        </View>
                    </Card>}
                />
            }


            <Card style={{ margin: 25 }}>
                <Card.Title title="Bill Summary :-" />
                <Divider style={{ marginVertical: 5 }} />
                <View style={{ padding: 10, flexDirection: "row", justifyContent: "space-between" }}>
                    <Card.Content>
                        <Text>total</Text>
                        <Text>tax</Text>
                        <Text>delivery</Text>
                        <Text>to pay</Text>
                    </Card.Content>
                    <Card.Content>
                        <Text>{cart.reduce((sum, item) => sum + item.price * item.qty, 0)}</Text>
                        <Text>{cart.reduce((sum, item) => sum + item.price * item.qty, 0) * 18 / 100}</Text>
                        <Text>10</Text>
                        <Text>
                            {
                                (cart.reduce((sum, item) => sum + item.price * item.qty, 0))
                                +
                                (cart.reduce((sum, item) => sum + item.price * item.qty, 0) * 18 / 100)
                                +
                                10
                            }
                        </Text>
                    </Card.Content>
                </View>
            </Card>


            <View style={{ margin: 20 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Checkbox status={isChecked ? 'checked' : 'unchecked'} onPress={e => setIsChecked(!isChecked)} />
                    <Text style={{ fontSize: 18 }}>Cash on Delivery</Text>
                </View>

                <Button
                    onPress={e => placeMobileOrder({
                        resturant,
                        items: cart.map(item => {
                            return { dish: item._id, qty: item.qty }
                        })
                    })}
                    mode='contained'>Place Order</Button>

                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Pressable onPress={() => {
                        dispatch(emptyCart())
                        navigate("home")
                    }}>
                        <Text style={{ fontSize: 20 }}>Empty Cart</Text>
                    </Pressable>
                </View>
            </View>

        </View>
    </ScrollView>

}

export default Checkout

const styles = StyleSheet.create({})