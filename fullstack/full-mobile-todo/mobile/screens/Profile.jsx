import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Card, List, MD3Colors } from 'react-native-paper'

const Profile = () => {
    return <>
        <Card>
            <Card.Content>
                <List.Section>
                    <List.Subheader>Profile</List.Subheader>
                    <List.Item title="John doe"></List.Item>
                    <List.Item title="john@gmail.com"></List.Item>
                    <Button mode='contained' buttonColor={MD3Colors.error50}>Logout</Button>
                </List.Section>
            </Card.Content>
        </Card>
    </>
}

export default Profile

const styles = StyleSheet.create({})