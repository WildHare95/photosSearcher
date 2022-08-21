import {Animated, ViewStyle} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../navigation/Navigations";

export interface IResponse {
    id: string,
    image: string,
    user: {
        first_name: string,
        last_name: string
    }
    username: string,
    tags: string[]
}

export interface ResponseById {
    urls: {
        regular: string
    },
    alt_description: string,
}

export interface AnimationsSpecs {
    value: Animated.Value,
    startScreenAnimation: number,
    stylesAnimation: ViewStyle
}

export type PropsPhotoCard = {
    uri: string,
    username: string,
    tags: string[],
    id: string
}

export interface FetchBaseQuery {
    status: number
    data: any
}


export type PropsMainScreen = NativeStackScreenProps<RootStackParamList, "WelcomePage", "PhotoPage">
export type PropsPhotoPage = NativeStackScreenProps<RootStackParamList, "PhotoPage">
export type PropsWelcomePage = NativeStackScreenProps<RootStackParamList, "MainScreen">

