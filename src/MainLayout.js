import React, {useState, useContext} from "react";
import Navbar from "./layout/NavBar";
import {View, StyleSheet, Alert} from "react-native";
import MainScreen from "./screens/MainScreen";
import TodoScreen from "./screens/TodoScreen";
import {TodoContext} from "./context/todo/todoContext";

const MainLayout = () => {
    const {todos, addTodo, removeTodo, updateTodo} = useContext(TodoContext);
    const [idTodo, setIdTodo] = useState(null);
    //const [todos, setTodos] = useState(todoContect.todos);

    /*const addTodo = (title) => {
        /!*const newTodo = {
            id: Date.now().toString(),
            title: title,
        }
        setTodos((prevTodos) => {
            return [
                ...prevTodos,
                newTodo
            ]
        });*!/

        setTodos(prev => [...prev, {
            id: Date.now().toString(),
            title,
        }]);
    }*/

    /*const removeTodo = (id) => {
        const todo = todos.find(item => item.id === id );
        Alert.alert(
            "Delete Element",
            `Are you sure you want to delete ${todo.title} ?`,
            [
                {
                    text: "No",
                    //onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Yes",
                    style: 'destructive',
                    onPress: () => {
                        setIdTodo(null);
                        setTodos(prevState => prevState.filter(item => item.id !== id));
                    }
                }
            ],
            {cancelable: false}
        );
    }*/

    /*const updateTodo = (id, title) => {
        setTodos(prev => prev.map(item => {
            if(item.id === id) {
                item.title = title;
            }
            return item;
        }));
    }*/

    let content = <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} setIdTodo={setIdTodo}/>
    if (idTodo) {
        const selectedTodo = todos.find(item => item.id === idTodo);
        content = <TodoScreen
            goBack={() => setIdTodo(null)}
            todo={selectedTodo}
            removeTodo={removeTodo}
            onSave={updateTodo}
        />
    }

    return (
        <View>
            <Navbar title="Todo APP" />
            <View style={styles.container}>
                { content }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    }
});

export default MainLayout;