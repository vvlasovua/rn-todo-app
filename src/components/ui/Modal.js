import React, {useState} from "react";
import {Modal, View, StyleSheet, Button, TextInput, Alert} from "react-native";
import {THEME} from "../../layout/theme";
import AppButton from "./AppButton"
import {FontAwesome, AntDesign} from "@expo/vector-icons"

const EditModal = ({value, visible, setModalVisible, onSave}) => {

    const [title, setTitle] = useState(value);

    const saveHandler = () => {
        let newTitle = title.trim();
        if(newTitle.length < 3) {
            Alert.alert(`Error min lenght simbol 3, now ${newTitle.length} simbols`);
        }else{
            onSave(newTitle);
        }
    }

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
                    value={title}
                    onChangeText={setTitle}
                    style={style.input}
                    placeholder="enter text"
                    autoCapitalize="none"
                    autoCorrect={false}
                    maxLength={64}
                />
                <View style={style.buttons}>
                    <View >
                        <AppButton color={THEME.DANGER_COLOR} onPress={setModalVisible}>
                            Cancel
                        </AppButton>
                        {/*<Button title="Cancel" onPress={setModalVisible} color={THEME.DANGER_COLOR} />*/}
                    </View>
                    <View >
                        <AppButton onPress={saveHandler}>
                            Save
                        </AppButton>
                        {/*<Button title="Save" onPress={saveHandler}/>*/}
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