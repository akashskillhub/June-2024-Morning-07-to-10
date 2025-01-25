import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useLazyMobileGetOrdersQuery } from '../redux/apis/customer.api'
import { Card } from 'react-native-paper'
import { socket } from '../App'

const Orders = () => {
    const [getOrders, { isLoading, data, isSuccess, isError, error }] = useLazyMobileGetOrdersQuery()

    if (isSuccess) {
        // console.log(data);
    }
    if (isError) {
        // console.log(error);
    }
    useEffect(() => { getOrders() }, [])
    useEffect(() => {
        socket.on("rider-orders", () => {
            getOrders()
        })

        socket.on("status-update", data => {
            getOrders()
        })
    }, [])

    return <>

        {
            data && <FlatList
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={getOrders} />}
                data={data}

                keyExtractor={item => item._id}
                renderItem={({ item }) => <Card style={{ margin: 20 }}>
                    <View style={{ flexDirection: "row", }}>
                        <Card.Cover style={{ flex: 1 }} source={{ uri: item.resturant.hero }} />
                        <Text style={{ flex: 1 }}>{item.resturant.name}</Text>
                    </View>
                    <Card.Content>
                        {
                            item.items.map(d => <View>
                                <Text>{d.qty} x {d.dish.name}</Text>
                            </View>)
                        }
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                            <Text>{item.status}</Text>
                            <Text>{item.items.reduce((sum, d) => sum + (d.qty * d.dish.price), 0)}</Text>
                        </View>
                        {
                            item.rider && <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 10 }}>
                                <Text>{item.rider.name}</Text>
                                <Text>{item.rider.mobile}</Text>
                            </View>
                        }
                    </Card.Content>
                </Card>}
            />
        }
    </>
}

export default Orders

const styles = StyleSheet.create({})