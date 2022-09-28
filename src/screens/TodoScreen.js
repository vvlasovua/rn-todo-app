import React from "react"
import {View, StyleSheet, Text, Button} from "react-native"
import {THEME} from "../layout/theme";
import AppCard from "../components/ui/AppCard";

const TodoScreen = ({goBack, todo, removeTodo}) => {
    return(
        <View>
            <AppCard style={style.card}>
                <Text style={style.title}>{todo.title}</Text>
                <Button title='edit'/>
            </AppCard>
            <View style={style.buttons}>
                <View style={style.button}>
                    <Button title="Go Back" color={THEME.GREY_COLOR} onPress={goBack}/>
                </View>
                <View style={style.button}>
                    <Button title="Delete" color={THEME.DANGER_COLOR} onPress={()=> removeTodo(todo.id)}/>
                </View>
            </View>
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