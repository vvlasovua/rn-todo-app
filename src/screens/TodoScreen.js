import React, {useState} from "react"
import {View, StyleSheet, Text, Button} from "react-native"
import {THEME} from "../layout/theme";
import AppCard from "../components/ui/AppCard";
import EditModal from "../components/ui/Modal";

const TodoScreen = ({goBack, todo, removeTodo}) => {
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <View>
            <AppCard style={style.card}>
                <Text style={style.title}>{todo.title}</Text>
                <Button title='edit' onPress={() => setModalVisible(true)}/>
            </AppCard>
            <View style={style.buttons}>
                <View style={style.button}>
                    <Button title="Go Back" color={THEME.GREY_COLOR} onPress={goBack}/>
                </View>
                <View style={style.button}>
                    <Button title="Delete" color={THEME.DANGER_COLOR} onPress={()=> removeTodo(todo.id)}/>
                </View>
            </View>

            {modalVisible && <EditModal visible={modalVisible} setModalVisible={() => {setModalVisible(false)}}/>}
        </View>
    )
}

const style = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: '45%'
    },
    title: {
        fontSize: 22
    },
    card: {
        marginBottom: 20,
        padding: 15
    }
})

export default TodoScreen