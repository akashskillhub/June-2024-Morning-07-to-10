import { ActivityIndicator, Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Home = () => {
    return <ScrollView>
        <View>
            <Text style={{ color: "red", marginTop: 50 }}>hello</Text>
            <Text style={styles.test}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minima ducimus ea, modi perspiciatis dignissimos reprehenderit culpa aliquid obcaecati numquam maiores ullam a totam praesentium molestias perferendis quibusdam, deserunt quisquam!
            </Text>
            <Button
                title='click me'
                onPress={() => console.warn("pressed")} />

            <TextInput
                onChangeText={val => console.warn(val)}
                placeholder='Enter Name' />
            <Pressable
                onPress={e => console.warn("image pressed")}
                onLongPress={e => console.warn("long press")}
            >
                <Image
                    style={{ height: 200, width: 200 }}
                    source={{
                        uri: "https://images.unsplash.com/photo-1719937206341-38a6392dfdef?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }} />

            </Pressable>
            <Text style={{ fontSize: 20 }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam temporibus numquam accusantium, maiores odit delectus quasi recusandae laudantium excepturi sint porro ducimus iste! Eius, id minima voluptatum ipsam aliquam numquam, dolorem, quia excepturi aliquid iste consequuntur quibusdam in? Ipsa natus autem facilis magnam reiciendis sunt quasi at odio quaerat incidunt et assumenda provident vitae distinctio molestiae culpa maxime ullam, ad inventore velit illo dolorem necessitatibus. Recusandae ut aliquam esse officiis? Qui maxime quae dicta enim ab, officia ad aperiam, deleniti deserunt veritatis perferendis, doloribus suscipit. Id delectus consequuntur consequatur voluptatem in magnam. Dolore, quod? Modi veritatis dolore veniam asperiores autem velit, animi iusto, saepe vero dignissimos mollitia adipisci ratione commodi! Ducimus rerum, autem esse incidunt eum quaerat unde reprehenderit dolores ipsa facere pariatur nobis. Impedit, iure? Esse ex iste similique laborum atque asperiores, modi velit, architecto quae voluptate itaque adipisci! Voluptatum ullam expedita cum! Magnam, dolor officia consequuntur et eligendi dicta iste aspernatur porro consectetur sapiente corporis inventore quibusdam eius architecto minima velit, in nemo alias ut illo. Cumque, officiis! Ratione modi corrupti consequatur quisquam repudiandae eius magnam quos illum vitae pariatur deserunt, ab nam autem neque mollitia expedita. Alias error voluptatem asperiores in facilis maiores sunt libero et deleniti!
            </Text>
            <ActivityIndicator size="large" />
        </View>
    </ScrollView>


}

export default Home

const styles = StyleSheet.create({
    test: { color: "blue", padding: 50 }
})