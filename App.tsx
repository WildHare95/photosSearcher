import React from 'react';
import type {ReactNode} from 'react'

import {Provider} from "react-redux";

import {
    SafeAreaView,
    StyleSheet
} from 'react-native';
import SearchBar from './src/components/SearchBar';
import {store} from "./src/store/store";
import Navigations from "./src/navigation/Navigations";

const App: () => ReactNode = () => {
    return (
        <Provider store={store}>
            <SafeAreaView style={styles.global}>
                <SearchBar/>
                <Navigations/>
            </SafeAreaView>
        </Provider>
    );
};


const styles = StyleSheet.create({
    global: {
        flex: 1,
        height: "100%"
    }
})

export default App;
