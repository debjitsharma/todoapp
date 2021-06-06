import React,{useState} from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Headers from './Components/Headers';
import Todo from './Components/Todo';
import Addtodo from './Components/Addtodo';
import Footer from './Components/Footer';

export default function App() {
  const [per, setPer]=useState([
   {name:'Create an app', key:1},
   {name:'Go for a walk', key:2},
   {name:'Heart rate monitor', key:3},
   {name:'Study Mode', key:4},
   {name:'Go for shopping', key:5},
   {name:'Prepare Dinner ', key:6},
   {name:'Go to bed', key:7},
   {name:'Take a quick shower', key:8},
   {name:'Go to college', key:9},
    
  ]);
  const handeler=(key)=>{setPer((pre)=>{return pre.filter(per=>per.key!=key)})};
  const submitHandler=(add)=>
  {
    setPer((per)=>
    {return[ {name:add,key: Math.random().toString()},
    ...per];

    })
  }
  
  return (     <View style={styles.container}><Headers/><Addtodo submitHandler={submitHandler}/>
      <FlatList data={per} renderItem={({item})=>(<Todo item={item} handeler={handeler} />
        )}/>
        <Footer/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom:20,
  },
});


