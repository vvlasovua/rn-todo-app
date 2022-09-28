import {View, Text, StyleSheet} from "react-native";
import React from "react";
import {THEME} from "./theme";

const Navbar = ({title}) => {

    return (
        <View style={style.navBar}>
            <Text style={style.text}>{title}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    navBar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: THEME.MAIN_COLOR,
        paddingBottom: 10,
    },
    text: {
        color: '#fff',
        fontSize: 18
    }
});

export default Navbar;