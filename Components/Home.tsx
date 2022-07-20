import axios from "axios";
import React, { useEffect, useState, useContext, FC } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppContext } from "../Context/Appcontext";
import { Table, Row, Rows } from "react-native-table-component";
export const Home = ({ navigation }: any) => {
  const [page, setPage] = useState<number>(0);
  const context = useContext<any>(AppContext);

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

  // const navigateHandler = (item: any) => {
  //   context?.setCurrent(item);
  //   navigation.navigate("Result");
  // };
  return (
    <View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text style={styles.tableHead}>Title</Text>
        <Text style={styles.tableHead}>Author</Text>
        <Text style={styles.tableHead}>Comments</Text>
        <Text style={styles.tableHead}>Created at</Text>
        <Text style={styles.tableHead}>Url</Text>
      </View>

      <FlatList
        testID="test-flatlist-item"
        data={context?.data}
        onEndReachedThreshold={0.5}
        onEndReached={pageIncrement}
        renderItem={({ item, index, separators }) => (
          <View style={styles.postContainer} key={index}>
            <View style={styles.tableHead}>
              <Text
                testID="test-nav-item"
                onPress={() => {
                  context?.setCurrent(item);
                  navigation.navigate("Result");
                }}
              >
                {item.url}
              </Text>
            </View>

            <View style={styles.tableHead}>
              <Text>{item.title}</Text>
            </View>

            <View style={styles.tableHead}>
              <Text>{item.author}</Text>
            </View>

            <View style={styles.tableHead}>
              <Text>{item.num_comments}</Text>
            </View>

            <View style={styles.tableHead}>
              <Text>{item.created_at}</Text>
            </View>
            {/* <View>
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
            </View> */}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: "#e4eded",
    display: "flex",
    flexDirection: "row",
    padding: 10,
  },

  tableHead: {
    // borderBottomLeftRadius:"1px solid black",
    // border: "1px solid black",
    display: "flex",
    flexDirection: "row",
    padding: 10,
    width: Dimensions.get("window").width / 6,
    borderLeftColor: "black",
  },

  head: {
    width: Dimensions.get("window").width / 6,
  },
  postInfoOne: {
    display: "flex",
    flexDirection: "row",
  },
  subText: {
    // margin: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 25,
  },
});
