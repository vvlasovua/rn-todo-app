import React from "react";
import {Modal, View, StyleSheet, Button, TextInput, Alert} from "react-native";
import {THEME} from "../../layout/theme";

const EditModal = ({visible, setModalVisible}) => {

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <View style={style.wrap}>
                <TextInput
                    style={style.input}
                    placeholder="enter text"
                    autoCapitalize="none"
                    autoCorrect={false}
                    maxLength={64}
                />
                <View style={style.buttons}>
                    <View >
                        <Button title="Cancel" onPress={setModalVisible} color={THEME.DANGER_COLOR} />
                    </View>
                    <View >
                        <Button title="Save"/>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const style = StyleSheet.create({
    wrap: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff'
    },
    buttons: {
        width: '100%',
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '80%',
    }
})

export default EditModal;