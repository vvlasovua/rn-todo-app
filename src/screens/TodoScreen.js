import React from "react"
import {View, StyleSheet, Text, Button} from "react-native"

const TodoScreen = ({goBack, todo}) => {
    return(
        <View>
            <Text>{todo?.title}</Text>
            <Button title="Go Back" onPress={goBack}/>
        </View>
    )
}

const style = StyleSheet.create({

})

export default TodoScreen