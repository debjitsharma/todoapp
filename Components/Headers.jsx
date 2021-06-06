import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Headers()
{
    return(
        <View style={styles.cont}><Text style={styles.text}>To Do App</Text></View>
    )
}

const styles = StyleSheet.create({
cont:{
    padding:13,
    backgroundColor:'#4682B4',
},

text:{
    fontSize:24,
    fontWeight:'bold',
    color:'white',
    textAlign:'center'
    
}


})