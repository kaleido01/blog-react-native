import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const { blogPosts, setBlogPosts } = React.useContext(BlogContext);
  return (
    <View>
      <Text>Index Screen</Text>
      <FlatList
        data={blogPosts}
        keyExtractor={item => item.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
      <View>
        <TouchableOpacity
          onPress={() =>
            setBlogPosts(prev => [
              ...prev,
              { title: `title ${prev.length + 1}` }
            ])
          }
        >
          <Text>add blog post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IndexScreen;
