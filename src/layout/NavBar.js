import React from "react";
import {View, Text, StyleSheet, Platform} from "react-native";
import {THEME} from "./theme";
import AppTextBold from "../components/ui/AppTextBold"

const Navbar = ({title}) => {

    return (
        <View style={{...style.navBar, ...Platform.select({
                ios: style.navbarIos,
                android: style.navbarAndroid,
            })}}>
            <AppTextBold style={style.text}>{title}</AppTextBold>
        </View>
    )
}

const style = StyleSheet.create({
    navBar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10,
    },
    navbarAndroid: {
        backgroundColor: THEME.MAIN_COLOR,
    },
    navbarIos: {
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 1
    },
    text: {
        color: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#fff',
        fontSize: 18
    }
});

export default Navbar;