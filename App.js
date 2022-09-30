import React, {useState, useCallback} from "react";
import {Alert, StyleSheet, View} from 'react-native';
import {useFonts} from 'expo-font'
import Navbar from "./src/layout/NavBar";
import MainScreen from "./src/screens/MainScreen";
import TodoScreen from "./src/screens/TodoScreen";
//import * as SplashScreen from 'expo-splash-screen';

//SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded] = useFonts({
        'roboto-regular': require("./assets/fonts/Roboto-Regular.ttf"),
        'roboto-bold': require("./assets/fonts/Roboto-Bold.ttf"),
    });

    const [idTodo, setIdTodo] = useState(null);
    const [todos, setTodos] = useState([
        {id: '1', title: 'Выучить React Native'},
        {id: '2', title: 'Написать приложение'},
    ]);

    /*const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);*/

    if(!fontsLoaded) return null;


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

    const updateTodo = (id, title) => {
        setTodos(prev => prev.map(item => {
            if(item.id === id) {
                item.title = title;
            }
            return item;
        }));
    }

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
    <View >
      <Navbar title="Todo APP" />
      <View style={styles.container}>
          {content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      paddingHorizontal: 20,
      paddingVertical: 20,
  }
});
