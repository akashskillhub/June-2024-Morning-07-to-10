import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActivityIndicator, Button, Card } from 'react-native-paper'
import { useGetMobileEmployeeTodosQuery } from '../redux/employeeApi'

const Todos = () => {
    const { data, isLoading, error } = useGetMobileEmployeeTodosQuery()
    return <>
        {
            isLoading && <ActivityIndicator />
        }
        {
            data && <FlatList
                data={data.result}
                keyExtractor={item => item._id} // key
                renderItem={({ item }) => <Card style={{
                    margin: 10,
                }}>
                    <Card.Content style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>
                        <Text>{item.task}</Text>
                        <Button disabled={item.isComplete} mode='outlined'>Complete</Button>
                    </Card.Content>
                </Card>}
            />
        }
    </>
}

export default Todos

const styles = StyleSheet.create({})