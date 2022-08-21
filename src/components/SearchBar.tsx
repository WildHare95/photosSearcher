import {
    Animated,
    StyleSheet,
    TextInput, TouchableOpacity,
    View
} from "react-native";
import React, {useEffect, useState} from "react";
import {useAppDispatch} from "../store/hooks";
import {setSearchQuery} from "../store/photos/photos-slice";
import animationFunction from "../utils/animationHelper";


const SearchBar = () => {
    const [searchStr, setSearchStr] = useState('')
    const {stylesAnimation,startScreenAnimation,value} = animationFunction()

    const dispatch = useAppDispatch()

    useEffect(() => {
        Animated.timing(value, {
            toValue: startScreenAnimation,
            useNativeDriver: true,
            duration: 1000
        }).start()
    }, [])

    useEffect(() => {
        const delay = setTimeout(() => {
            dispatch(setSearchQuery(searchStr))
        }, 1000)
        return () => clearTimeout(delay)
    }, [searchStr])

    return (
        <Animated.View style={[styles.container, stylesAnimation]}>
            <View style={styles.inputWrap}>
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    value={searchStr}
                    onChangeText={(text) => {
                        setSearchStr(text)
                    }}
                />
                <TouchableOpacity
                onPress={() => {
                    setSearchStr("")
                }}
                >
                    <View style={styles.dot}/>
                </TouchableOpacity>
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
        container: {
            display: "flex",
            marginTop: 15,
            marginBottom: 15,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
        },
        input: {
            width: "90%",
            fontSize: 20,
            marginLeft: 10,
        },
        inputWrap: {
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "#d9dbda",
            borderRadius: 16,
            width: "90%"
        },
        dot: {
            borderRadius: 50,
            width: 10,
            height: 10,
            backgroundColor: "rgba(255,0,0,0.51)"
        }
    }
)

export default SearchBar