import React, {useState} from "react"
import {View, StyleSheet, TextInput, Button, Alert} from "react-native";

const AddTodo = ({ onSubmit }) => {

    const [value, setValue] = useState("");

    const pressHandler = () => {
        if(value.trim()) {
            onSubmit(value);
            setValue('');
        } else {
            Alert.alert('Name task do not empty!');
        }

    }

    return (
        <View style={style.block}>
            <TextInput
                style={style.input}
                onChangeText={text => setValue(text)}
                value={value}
                placeholder='Enter task'
            />
            <Button title="ADD" style={style.button} onPress={pressHandler}/>
        </View>
    )
}

const style = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'
    },
    button: {
        width: '30%',

    }
});

export default AddTodo;