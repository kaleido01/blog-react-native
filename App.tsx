import React from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "./src/context/BlogContext";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";

const AppNavigator = createStackNavigator(
  {
    IndexScreen: {
      screen: IndexScreen,
      navigationOptions: {
        title: "Todoリスト"
      }
    },
    ShowScreen: {
      screen: ShowScreen,
      navigationOptions: {
        title: "詳細"
      }
    },
    CreateScreen: {
      screen: CreateScreen,
      navigationOptions: {
        title: "新しいTodo"
      }
    }
  },
  {
    initialRouteName: "IndexScreen"
  }
);

const App = createAppContainer(AppNavigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
