import React, {useEffect, useState} from "react";
import {StyleSheet, View, Alert} from 'react-native';
import Navbar from "./src/layout/NavBar"
import MainScreen from "./src/screens/MainScreen";
import TodoScreen from "./src/screens/TodoScreen";

export default function App() {
    const [idTodo, setIdTodo] = useState("2");
    const [todos, setTodos] = useState([
        {id: '1', title: 'Выучить React Native'},
        {id: '2', title: 'Написать приложение'},
    ]);

    const addTodo = (title) => {
        /*const newTodo = {
            id: Date.now().toString(),
            title: title,
        }
        setTodos((prevTodos) => {
            return [
                ...prevTodos,
                newTodo
            ]
        });*/

        setTodos(prev => [...prev, {
            id: Date.now().toString(),
            title,
        }]);
    }

    const removeTodo = (id) => {
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


    }

    let content = <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} setIdTodo={setIdTodo}/>
    if (idTodo) {
        const selectedTodo = todos.find(item => item.id === idTodo);
        content = <TodoScreen goBack={() => setIdTodo(null)} todo={selectedTodo} removeTodo={removeTodo}/>
    }

    useEffect(() => {
        console.log(todos);
    }, [todos])

  return (
    <View>
      <Navbar title="Todo APP" />
      <View style={styles.container}>
          {content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      paddingHorizontal: 30,
      paddingVertical: 30,
  }
});
