import { FlatList, RefreshControl, StyleSheet, View, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLazyRiderGetOrdersQuery, useRiderUpdateOrderStatusMutation } from '../redux/rider.api'
import { ActivityIndicator, Button, Card, Text } from 'react-native-paper'
import { socket } from '../App'

const Booking = () => {
  // const [riderBookings, setRiderBookings] = useState([])

  const [updateStatus, {
    isSuccess: updateSuccess,
    isError: updateIsError,
    error: updateError,
    isLoading: updateIsLoading
  }] = useRiderUpdateOrderStatusMutation()
  const [getOrders, { isLoading, data, isSuccess, isError, error }] = useLazyRiderGetOrdersQuery()

  if (updateIsError) {
    // console.log(updateError);
  }
  if (updateSuccess) {
    // console.log("update");
  }
  if (isError) {
    // console.log(error)
  }
  if (isSuccess) {
    // console.log(data)
  }
  useEffect(() => { getOrders() }, [])

  // useEffect(() => {
  socket.on("rider-orders", data => {
    getOrders()
    // console.log(data)

    // setRiderBookings(data)
  })
  // }, [])

  // useEffect(() => {
  //   if (isSuccess) {
  //     setRiderBookings(data)
  //   }
  // }, [isSuccess])

  return <>
    {
      data && <FlatList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={getOrders} />}
        data={data}
        keyExtractor={item => item._id}
        renderItem={({ item }) => <Card style={{ margin: 20 }}>
          <Card.Content>
            <View>
              <Text>{item.resturant.name}</Text>
              <Text>{item.resturant.mobile}</Text>
              <Text>{item.resturant.address}</Text>

              <Text>{item.customer.name}</Text>
              <Text>{item.customer.address}</Text>
              <Text>{item.customer.mobile}</Text>
              <Text>STATUS : {item.status}</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 5, marginTop: 10 }}>
              <Button
                onPress={e => updateStatus({ _id: item._id, status: "out" })}
                style={{ flex: 1 }} mode='contained-tonal'>Out</Button>
              <Button
                onPress={e => updateStatus({ _id: item._id, status: "delivered" })}
                style={{ flex: 1 }} mode='contained-tonal'>Delivered</Button>
            </View>

          </Card.Content>
        </Card>}
      />
    }
  </>
}

export default Booking

const styles = StyleSheet.create({})