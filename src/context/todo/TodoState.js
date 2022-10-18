import React, {useReducer} from 'react'
import {TodoContext} from './todoContext'
import {todoReducer} from "./todoReducer";
import {ADD_TODO, REMOVE_TODO, UPDATE_TODO} from "../type";

const TodoState = ({children}) => {
    const initState = {
        todos: [
            {id: '1', title: 'Выучить React Native'},
            {id: '2', title: 'Написать приложение'},
        ]
    }
    const [state, dispatch] = useReducer(todoReducer, initState);

    const addTodo = title => dispatch({type: ADD_TODO, title});
    const removeTodo = id => dispatch({type: REMOVE_TODO, id});
    const updateTodo = (id, title) => dispatch({type: UPDATE_TODO, id, title});

    return <TodoContext.Provider value={{
        todos: state.todos,
        addTodo,
        removeTodo,
        updateTodo
    }}>{children}</TodoContext.Provider>
}

export default TodoState;