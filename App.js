import React, {useEffect, useState} from "react";
import {ScrollView, StyleSheet, View, FlatList} from 'react-native';
import Navbar from "./src/layout/NavBar"
import AddTodo from "./src/components/AddTodo";
import TodoList from "./src/components/Todo";
import MainScreen from "./src/screens/MainScreen";
import TodoScreen from "./src/screens/TodoScreen";

export default function App() {
    const [idTodo, setIdTodo] = useState(null);
    const [todos, setTodos] = useState([]);

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
        setTodos(prevState => prevState.filter(item => item.id !== id))
    }

    let content = <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} setIdTodo={setIdTodo}/>

    if(idTodo){
        content = <TodoScreen />
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
