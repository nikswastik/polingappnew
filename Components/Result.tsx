import React,{useContext} from 'react'
import {View,Text, StyleSheet} from "react-native"
import { AppContext } from "../Context/Appcontext";


export const Result = () => {
  const context= useContext<any>(AppContext);
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(context?.data)}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
   padding:10
  },
});
