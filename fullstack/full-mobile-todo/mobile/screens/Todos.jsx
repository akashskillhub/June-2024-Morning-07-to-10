import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { ActivityIndicator, Button, Card } from 'react-native-paper'
import { useCompleteMobileEmployeeTodoMutation, useGetMobileEmployeeTodosQuery, useLazyGetMobileEmployeeTodosQuery } from '../redux/employeeApi'

const Todos = () => {
    const [completeTodo, { error: completeError, isSuccess }] = useCompleteMobileEmployeeTodoMutation()
    const [getTodos, { data, isLoading, error }] = useLazyGetMobileEmployeeTodosQuery()

    console.warn(completeError)
    console.log(isSuccess)

    useEffect(() => { getTodos() }, [])
    return <>
        {
            isLoading && <ActivityIndicator />
        }
        {
            data && <FlatList
                refreshControl={<RefreshControl
                    refreshing={isLoading}
                    onRefresh={getTodos}
                />}
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
                        <Button onPress={e => completeTodo(item)} disabled={item.isComplete} mode='outlined'>Complete</Button>
                    </Card.Content>
                </Card>}
            />
        }
        {/* OTA */}
    </>
}

export default Todos

const styles = StyleSheet.create({})