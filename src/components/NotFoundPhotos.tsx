import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";

const NotFoundPhotos = () => {
    return <View style={styles.container}>
        <Image
            style={styles.notFoundImg}
            source={require("../assets/not-found.png")}
        />
        <Text style={styles.label}>
            No images found!
        </Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        opacity: 0.5,
        width: "100%"
    },
    notFoundImg: {
        width: "100%",
        resizeMode: "contain",
        marginBottom: -60
    },
    label: {
        fontSize: 18,
        textAlign: "center"
    }
})

export default NotFoundPhotos