import {Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {FC} from "react";

interface IDescriptionProps {
    modalVisible: boolean,
    description: string,
    setModalVisible: () => void
}

const Description: FC<IDescriptionProps> =
    (
        {
            modalVisible,
            description,
            setModalVisible
        }
    ) => {
    return <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
    >
        <View style={styles.modal}>
            <View>
                <Text style={styles.label}>"{description}"</Text>
            </View>
            <View>
                <TouchableOpacity
                    onPress={setModalVisible}
                >
                    <Text style={styles.modalButton}>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
}

const styles = StyleSheet.create({
    modal: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        backgroundColor: "rgba(102,85,85,0.49)",
        width: 250,
        borderRadius: 100,
        top: "80%",
        left: "15%",

    },
    modalButton: {
        textAlign: "center",
        backgroundColor: "#1d67ff",
        borderRadius: 100,
        color: "#FFF",
        width: 60,
        marginBottom: 15
    },
    label: {
        color: "#FFF",
        fontSize: 14,
        margin: 15,
    }
})

export default Description