import axios from "axios";
import React, { useEffect, useState, useContext,FC } from "react";
import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppContext } from "../Context/Appcontext";

export const Home = ({navigation}:any) => {


  
  const [page, setPage] = useState<number>(0);
  const context= useContext<any>(AppContext);
  
  useEffect(() => {
    getData();
    const interval = setInterval(() => {
      getData();
    }, 10000);
    return () => clearInterval(interval);
  }, [page]);


  const getData = () => {
    axios
      .get(
        `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`
      )
      .then((response) => {
        console.log(response.data);
        context?.setData(response.data.hits);
      });
  };

  const pageIncrement = () => {
    setPage(page + 1);
  };

  const navigateHandler = () => {
    navigation.navigate("Result");
  };
  return (
    <View>
      <FlatList
      testID="test-flatlist-item"
        data={context?.data}
        onEndReachedThreshold={0.5}
        onEndReached={pageIncrement}
        renderItem={({ item, index, separators }) => (
          <View style={styles.postContainer} key={index}>
            <View>
              <Text style={styles.text} onPress={navigateHandler}>
                {item.title}
              </Text>
              <Text>{item.url}</Text>
            </View>
            <View style={styles.postInfoOne}>
              <View>
                <Text style={styles.subText}>Author:{item.author}</Text>
                <Text style={styles.subText}>Comments:{item.num_comments}</Text>
              </View>
              <Text style={styles.subText}>Posted Date{item.created_at}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: "#e4eded",
    margin: 10,
    padding: 10,
  },
  postInfoOne: {
    display: "flex",
    // justifyContent:"center",
    // alignItems:"center",
    flexDirection: "row",
  },
  subText: {
    margin: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 25,
  },
});