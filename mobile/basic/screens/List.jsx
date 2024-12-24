import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const List = () => {

    const todos = [
        { id: 1, task: "learn RN" },
        { id: 2, task: "learn react" },
        { id: 3, task: "learn node" },
        { id: 4, task: "learn mongodb" },
    ]
    return <>
        {
            todos.map(item => <View key={item.id}>
                <Text>{item.task}</Text>
            </View>)
        }

        {/* performance */}
        <FlatList
            data={todos}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <View>
                <Text>{item.task}</Text>
            </View>}
        />
    </>
}

export default List

const styles = StyleSheet.create({})