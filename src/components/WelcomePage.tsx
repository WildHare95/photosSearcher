import React, {FC, useEffect} from "react";
import {Image, StyleSheet, Text, View} from "react-native";

import {useAppSelector} from "../store/hooks";
import {searchString} from "../store/selectors";
import {PropsWelcomePage} from "../store/types";



const WelcomePage: FC<PropsWelcomePage> = ({navigation}) => {
    const searchStr = useAppSelector(searchString)

    useEffect(() => {
        if(searchStr){
            navigation.navigate("MainScreen")
        }
    }, [searchStr])

    return <View style={styles.container}>
        <View style={styles.bgImage}>
            <Image
            source={require("../assets/magnifying-glass.png")}
            />
        </View>
        <View >
            <Text style={styles.title}>Search free and high-resolution photos!</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90%",
        opacity: 0.5,
    },
    bgImage: {
        width: 250,
        margin: 20
    },
    title: {
        width: 250,
        textAlign: "center",
        fontSize: 24
    }
})

export default WelcomePage