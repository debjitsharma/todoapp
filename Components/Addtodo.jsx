import React,{useState} from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View,TextInput, Button } from 'react-native';
export default  function Addtodo({submitHandler})
{
    const [add,setAdd]=useState('');
    const changeState=(val)=>{
        setAdd(val);
    }
return( 
    <view>
        <TextInput placeholder='Add Todo' style={styles.todo} onChangeText={(val)=>changeState(val)} />

        <View style={styles.bttn}><Button color='#228B22' title='Submit' onPress={()=>submitHandler(add)} /></View>
    </view>


)
}

const styles = StyleSheet.create({

todo:{
    marginTop:20,
    marginHorizontal:20,
    padding:10,
    borderWidth:1,
    borderColor:'#777',
    width:315,
    borderRadius:10,
},
bttn:{ width:120,
    marginTop:10,
    marginHorizontal:120,
    borderRadius:10,

}




})