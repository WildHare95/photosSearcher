import {Animated, Dimensions} from "react-native";
import {useRef} from "react";
import {AnimationsSpecs} from "../store/types";

const animationFunction = (): AnimationsSpecs  => {
    const endScreenAnimation = Math.trunc(Dimensions.get("window").height)
    const startScreenAnimation = Math.trunc(endScreenAnimation / 3)

    const value = useRef(new Animated.Value(endScreenAnimation)).current

    const inputRange = [startScreenAnimation, endScreenAnimation]

    const translateY = value.interpolate(
        {
            inputRange: inputRange,
            outputRange: [0, startScreenAnimation]
        }
    )
    const opacity = value.interpolate(
        {
            inputRange: inputRange,
            outputRange: [1, 0.2]
        }
    )
    return {
        value,
        startScreenAnimation,
        stylesAnimation: {
            transform: [{translateY}],
            opacity
        }
    }
}

export default animationFunction