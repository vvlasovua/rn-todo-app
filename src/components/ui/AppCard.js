import React from 'react'
import {View, StyleSheet} from 'react-native'

const AppCard = props => (<View style={ {...style.default, ...props.style} }>{props.children}</View>)

const style = StyleSheet.create({
    default: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000', //for iOs
        shadowRadius: 2, //for iOs
        shadowOpacity: 0.3, //for iOs
        shadowOffset: {width: 2, height: 2}, //for iOs
        elevation: 8, //for android
        backgroundColor: '#fff',
        borderRadius: 10,
    }
})

export default AppCard;