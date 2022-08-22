import React from "react";
import FeedScreen from "../screens/FeedScreen/FeedScreen";
import WelcomePage from "../components/WelcomePage";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import PhotoPage from "../components/PhotoPage";
import {RootStackParamList} from "../store/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigations = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="WelcomePage"
            >
                <Stack.Screen
                    name="MainScreen"
                    component={FeedScreen}/>
                <Stack.Screen
                    name="WelcomePage"
                    component={WelcomePage}/>
                <Stack.Screen
                    name="PhotoPage"
                    component={PhotoPage}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigations