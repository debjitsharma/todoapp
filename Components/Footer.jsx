import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Footer()
{
    return(
        <View style={styles.cont}><Text style={styles.text}>Copyrighted App</Text></View>
    )
}

const styles = StyleSheet.create({
cont:{
    padding:13,
    backgroundColor:'#2F4F4F',
    marginTop:20,
    marginBottom:0,
    marginEnd:0,
    
},

text:{
    fontSize:24,
    fontWeight:'bold',
    color:'white',
    textAlign:'center'
    
}


})