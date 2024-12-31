import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Card } from 'react-native-paper'

const CompleteTodos = () => {
    const arr = [
        { _id: 2, isComplete: true, task: "second task", desc: "second desc", priority: "medium" },
    ]
    return <FlatList
        data={arr}
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

export default CompleteTodos

const styles = StyleSheet.create({})