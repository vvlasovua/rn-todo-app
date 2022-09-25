import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

const TodoList = ({todo, onRemove, setIdTodo}) => {

    const delTodoHandler = () => {
        onRemove(todo.id)
    }

    return(
        <TouchableOpacity activeOpacity={0.5} onLongPress={delTodoHandler} onPress={() => setIdTodo(todo.id)}>
            <View style={style.todo}>
                <Text>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 5,
    }
})

export default TodoList;