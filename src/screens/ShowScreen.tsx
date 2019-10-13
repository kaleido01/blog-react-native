import React from "react";
import { Text } from "react-native";
import { Context } from "../context/BlogContext";
const ShowScreen = ({ navigation }) => {
  const { state } = React.useContext(Context);
  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam("id")
  );
  return <Text>{blogPost.title}</Text>;
};

export default ShowScreen;
