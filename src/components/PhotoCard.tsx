import React, {FC} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {PropsMainScreen, PropsPhotoCard} from "../store/types";

const PhotoCard: FC<PropsPhotoCard & PropsMainScreen> =
    (
        {
            uri,
            username,
            tags,
            id,
            navigation
        }
    ) => {
        return <View style={styles.card}>
            <TouchableOpacity
                style={styles.pressImage}
                onPress={() => {
                    navigation.navigate("PhotoPage", {id})
                }}>
                <Image
                    style={styles.image}
                    source={{uri}}/>
            </TouchableOpacity>
            <View>
                <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.author}>
                    Author: {username}
                </Text>
                <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.tags}>
                    {
                        tags.map(tag => `#${tag} `)
                    }
                </Text>
            </View>
        </View>
    }

const styles = StyleSheet.create({
    card: {
        display: "flex",
        borderWidth: 1,
        borderColor: "#e7d7c2",
        borderRadius: 15,
        width: 150,
        height: 170,
        marginBottom: 10,
        padding: 15
    },
    author: {
        fontSize: 16,
    },
    tags: {

        textDecorationLine: "underline"
    },
    image: {
        borderRadius: 5,
        resizeMode: "cover",
        width: "100%",
        height: "100%",
    },
    pressImage: {
        width: "100%",
        height: "60%",
        marginBottom: 10

    }
})

export default PhotoCard