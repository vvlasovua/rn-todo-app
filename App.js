import React, {useEffect, useState} from "react";
import {ScrollView, StyleSheet, View, FlatList} from 'react-native';
import Navbar from "./src/layout/NavBar"
import AddTodo from "./src/components/AddTodo";
import TodoList from "./src/components/Todo";

export default function App() {
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

    useEffect(() => {
        console.log(todos);
    }, [todos])

  return (
    <View>
      <Navbar title="Todo APP" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}/>
        <FlatList
          data={todos}
          renderItem={({item}) => (<TodoList todo={item} onRemove={removeTodo}/>)}
          keyExtractor={item => item.id.toString()}
        />
          {/*<ScrollView>
              { todos.map(item => (<TodoList todo={item} key={item.id} />))}
          </ScrollView>*/}
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
