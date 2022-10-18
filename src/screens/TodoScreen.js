import React, {useState} from "react"
import {View, StyleSheet, Dimensions} from "react-native"
import {THEME} from "../layout/theme";
import AppCard from "../components/ui/AppCard";
import EditModal from "../components/ui/Modal";
import AppTextBold from "../components/ui/AppTextBold";
import AppButton from "../components/ui/AppButton"
import {FontAwesome, AntDesign} from "@expo/vector-icons"

const TodoScreen = ({goBack, todo, removeTodo, onSave}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const saveHandler = (title) => {
        onSave(todo.id, title);
        setModalVisible(false);
    }

    return(
        <View>
            <AppCard style={style.card}>
                <AppTextBold style={style.title}>{todo.title}</AppTextBold>
                <AppButton onPress={() => setModalVisible(true)}>
                    <FontAwesome name="edit" size={20}/>
                </AppButton>
                {/*<Button title='edit' onPress={() => setModalVisible(true)}/>*/}
            </AppCard>
            <View style={style.buttons}>
                <View style={style.button}>
                    <AppButton color={THEME.GREY_COLOR} onPress={goBack}>
                        <AntDesign name="back" size={20} color="#fff"/>
                    </AppButton>
                    {/*<Button title="Go Back" color={THEME.GREY_COLOR} onPress={goBack}/>*/}
                </View>
                <View style={style.button}>
                    <AppButton color={THEME.DANGER_COLOR} onPress={()=> removeTodo(todo.id)}>
                        <AntDesign name="delete" size={20} color="#fff"/>
                    </AppButton>
                    {/*<Button title="Delete" color={THEME.DANGER_COLOR} onPress={()=> removeTodo(todo.id)}/>*/}
                </View>
            </View>

            {modalVisible &&
                <EditModal
                    value={todo.title}
                    visible={modalVisible}
                    setModalVisible={() => {setModalVisible(false)}}
                    onSave={saveHandler}
                />
            }
        </View>
    )
}

const style = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        //width: '45%'
        //width: Dimensions.get('window').width / 3,
        width: Dimensions.get('window').width > 400 ? 200 : 150,
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