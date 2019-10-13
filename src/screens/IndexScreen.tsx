import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost } = React.useContext(Context);
  console.log(navigation);
  return (
    <View>
      <Text>Index Screen</Text>
      <TouchableOpacity
        onPress={() => addBlogPost()}
        style={{
          height: 100,
          justifyContent: "center",
          alignItems: "center",
          borderColor: "red",
          borderWidth: 2
        }}
      >
        <Text>add blog post</Text>
      </TouchableOpacity>
      <FlatList
        data={state}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ShowScreen", { id: item.id })}
          >
            <View style={{ flexDirection: "row" }}>
              <Text>
                {item.title}-{item.id}
              </Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather name="trash" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate("CreateScreen")}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    )
  };
};

export default IndexScreen;
