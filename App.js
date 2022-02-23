import React from "react";
import { createStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import movieSaga from "./sagas/handleMovie";
import createSagaMiddleware from "redux-saga";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieDetails from "./src/screens/movieDetails";
import Search from "./src/screens/search";
import SearchResult from "./src/screens/searchResult";
import reducerMovie from "./store/rootReducer";
import TabNavigationHome from "./navigators/tabNavigatorHome";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducerMovie, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(movieSaga);

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={TabNavigationHome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MovieDetails"
            component={MovieDetails}
            options={{
              title: "Movie Details",
              headerStyle: { backgroundColor: "#272b2b" },
              headerTintColor: "aliceblue",
            }}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{
              headerStyle: { backgroundColor: "#272b2b" },
              headerTintColor: "aliceblue",
            }}
          />
          <Stack.Screen
            name="SearchResult"
            component={SearchResult}
            options={{
              title: "Search Result",
              headerStyle: { backgroundColor: "#272b2b" },
              headerTintColor: "aliceblue",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
