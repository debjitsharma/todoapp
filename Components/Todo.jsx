import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Todo({item,handeler})
{return(<TouchableOpacity onPress={()=>handeler(item.key)}> <Text style={styles.items}>{item.name}</Text></TouchableOpacity>
    );
}

const styles = StyleSheet.create({
   
  
    items:{
      marginTop:24,
      padding:20,
      backgroundColor:'#FFA07A',
      fontSize:24,
      marginHorizontal:20,
      marginTop:24,
      borderRadius:20,
    }
  
  
    
   
  });