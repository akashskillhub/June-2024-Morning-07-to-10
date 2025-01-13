import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card, Chip, Searchbar } from 'react-native-paper'

const Food = () => {
    return (
        <View style={{ gap: 10 }}>
            <Searchbar
                style={{ marginTop: 5 }}
                placeholder="Search For Dish or Resturant"
            />

            <Card>
                <Card.Content style={{ alignItems: 'center' }}>
                    <Text variant="titleLarge">Dishes at Flat 50% Off</Text>
                    <Text variant="bodyMedium">make the most of it now!</Text>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/700' }} />
            </Card>

            <Chip icon="heart" style={{ height: 50, padding: 5 }}>Your Hunger Partner</Chip>
            <Chip icon="check" style={{ height: 50, padding: 5 }}>Good Food Within Minutes</Chip>

        </View>
    )
}

export default Food

const styles = StyleSheet.create({})