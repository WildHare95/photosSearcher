import React, {FC, useEffect, useState} from "react";
import {Button, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";

import PhotoCard from "../../components/PhotoCard";

import transformData from "../../utils/transformData";

import {useGetPhotosByNameMutation} from "../../store/photos/photos-api-slice";
import {setPhotos} from "../../store/photos/photos-slice";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {searchString, selectPhotos} from "../../store/selectors";
import {PropsMainScreen} from "../../store/types";
import NotFoundPhotos from "../../components/NotFoundPhotos";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";


const FeedScreen: FC<PropsMainScreen> = ({navigation, route}) => {
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState<number>(0)

    const dispatch = useAppDispatch()

    const photos = useAppSelector(selectPhotos)
    const searchStr = useAppSelector(searchString)

    const [searchPhoto] = useGetPhotosByNameMutation()

    useEffect(() => {
        searchPhoto({page, searchStr})
            .unwrap()
            .then(response => {
                setTotalPages(response.total_pages)
                dispatch(setPhotos(transformData(response.results)))
            }).catch((err: FetchBaseQueryError) => console.log(err))
    }, [page, searchStr])

    useEffect(() => {
        if (!searchStr) {
            navigation.navigate("WelcomePage")
        }
        return () => {
            dispatch(setPhotos([]))
            setPage(1)
        }
    }, [searchStr])

    const changePage = () => {
        setPage(prevState => prevState + 1)
    }

    return <ScrollView>
        <View style={styles.container}>
            {
                !!photos.length
                    ? photos.map((item) => {
                        return <PhotoCard
                            route={route}
                            navigation={navigation}
                            id={item.id}
                            key={item.id}
                            uri={item.image}
                            username={item.username}
                            tags={item.tags}
                        />
                    })
                    : <NotFoundPhotos/>
            }
        </View>
            <Button
                onPress={changePage}
                title="check"
                disabled={!photos.length || page === totalPages}
            />
        <View style={styles.counter}>
            <Text>
                {
                    !!photos.length
                        ? `${page}/${totalPages}`
                        : null
                }
            </Text>
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        padding: 10,
        flexWrap: "wrap"
    },
    counter: {
        position: "absolute",
        bottom: 0,
        right: 0,
    }
})

export default FeedScreen