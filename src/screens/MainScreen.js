import React from "react"
import {View, StyleSheet, FlatList} from "react-native"
import AddTodo from "../components/AddTodo";
import TodoList from "../components/Todo";

const MainScreen = ({addTodo, todos, removeTodo, setIdTodo}) => {

    return(
        <View>
            <AddTodo onSubmit={addTodo}/>
            <FlatList
                data={todos}
                renderItem={({item}) => (<TodoList todo={item} onRemove={removeTodo} setIdTodo={setIdTodo}/>)}
                keyExtractor={item => item.id.toString()}
            />
            {/*<ScrollView>
              { todos.map(item => (<TodoList todo={item} key={item.id} />))}
          </ScrollView>*/}
        </View>
    )
}

const style = StyleSheet.create({

})

export default MainScreen