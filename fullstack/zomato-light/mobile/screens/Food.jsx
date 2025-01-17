import { FlatList, Pressable, RefreshControl, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { ActivityIndicator, Card, Chip, Searchbar } from 'react-native-paper'
import { useLazyMobileGetResturantQuery, useMobileGetResturantQuery } from '../redux/apis/customer.api'
import { useNavigation } from '@react-navigation/native'

const Food = () => {
    const { navigate } = useNavigation()
    const [getResturants, { data, isSuccess, isLoading, error, isError }] = useLazyMobileGetResturantQuery()

    if (isError) {
        console.log(error)
    }
    if (isSuccess) {
        console.log(data)
    }

    useEffect(() => { getResturants() }, [])

    if (isLoading) {
        return <>
            <ActivityIndicator></ActivityIndicator>
        </>
    }
    return (
        <View style={{ gap: 10 }}>
            <Searchbar
                style={{ marginTop: 5 }}
                placeholder="Search For Dish or Resturant"
            />


            {
                data && <FlatList
                    refreshControl={<RefreshControl refreshing={isLoading} onRefresh={getResturants} />}
                    data={data}
                    keyExtractor={item => item._id}
                    renderItem={({ item }) => <Pressable onPress={e => navigate("menu", { item })}>
                        <Card style={{ margin: 20 }}>
                            <Card.Cover source={{ uri: item.hero }} />
                            <Card.Content>
                                <Text>{item.name}</Text>
                            </Card.Content>
                        </Card>
                    </Pressable>
                    }
                />
            }


        </View>
    )
}

export default Food

const styles = StyleSheet.create({})