import React, {FC, useCallback, useEffect, useState} from "react";
import {ActivityIndicator, Dimensions, Image, Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";

import ImageZoom from "react-native-image-pan-zoom";

import {FetchBaseQuery, PropsPhotoPage, ResponseById} from "../store/types";
import {useGetPhotoByIdMutation} from "../store/photos/photos-api-slice";
import Description from "./ModalDescription";

const PhotoPage: FC<PropsPhotoPage> = ({route, navigation}) => {
    const [uri, setURI] = useState<string | undefined>()
    const [description, setDescription] = useState<string>("No description exist")
    const [modalVisible, setModalVisible] = useState(false);
    const [photoById] = useGetPhotoByIdMutation()

    useEffect(() => {
        photoById(route.params.id)
            .unwrap()
            .then((res: ResponseById) => {
                if (res.alt_description) {
                    setDescription(res.alt_description)
                }
                setURI(res.urls.regular)
            })
            .catch((err: FetchBaseQuery ) => console.log(err))
    }, [])

    const showModal = () => {
        setModalVisible(prevState => !prevState)
    }

    const heightScreen = Dimensions.get('window').height - 100
    const widthScreen = Dimensions.get('window').width

    return uri
            ? <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.buttonBack}>
                    <Text style={styles.buttonTitle}>Back</Text>
                </TouchableOpacity>
                <ImageZoom cropWidth={widthScreen}
                           cropHeight={heightScreen}
                           imageWidth={widthScreen}
                           imageHeight={heightScreen}>
                    <Image style={{
                        resizeMode: "contain",
                        width: "100%", height: "100%"
                    }}
                           source={{uri}}/>
                </ImageZoom>
                <TouchableOpacity
                    onPress={() => setModalVisible(prevState => !prevState)}
                    style={[styles.buttonBack, styles.desc]}>
                    <Text style={styles.buttonTitle}>Description</Text>
                </TouchableOpacity>
                <Description
                    description={description}
                    modalVisible={modalVisible}
                    setModalVisible={showModal}
                />
            </View>
            : <ActivityIndicator size="large" color="#00ff00"/>

}


const styles = StyleSheet.create({
    container: {
        position: "relative",
    },
    buttonBack: {
        position: "absolute",
        margin: 10,
        zIndex: 1
    },
    buttonTitle: {
        fontSize: 16,
        color: "#d9d5d5"
    },
    desc: {
        bottom: 0,
    }
})

export default PhotoPage