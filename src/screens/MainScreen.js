import React from "react"
import {View, StyleSheet, FlatList, Image} from "react-native"
import AddTodo from "../components/AddTodo";
import TodoList from "../components/Todo";

const MainScreen = ({addTodo, todos, removeTodo, setIdTodo}) => {
    let content = (<FlatList
        data={todos}
        renderItem={({item}) => (<TodoList todo={item} onRemove={removeTodo} setIdTodo={setIdTodo}/>)}
        keyExtractor={item => item.id.toString()}
    />)

    if(!todos.length){
        content =  (
            <View style={styles.imgWrap}>
                <Image source={require('../../assets/no-items.png')} style={styles.img} />
                {/*<Image
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
                    }}
                    style={styles.img}
                />*/}
            </View>
        )
    }

    return(
        <View>
            <AddTodo onSubmit={addTodo}/>
            {content}
            {/*<ScrollView>
              { todos.map(item => (<TodoList todo={item} key={item.id} />))}
          </ScrollView>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    imgWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 300,
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})

export default MainScreen