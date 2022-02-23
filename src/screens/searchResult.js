import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Pressable,
  ActivityIndicator,
  Button,
} from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useIsFocused, useFocusEffect } from "@react-navigation/native";
import styles from "../styles/searchResult.style";

const Popular = (props) => {
  const [movies, setmovies] = useState(props.searchedMovies);
  const [pageNum, setpageNum] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  const [isLoading, setisLoading] = useState(true);
  const [totalPage, settotalPage] = useState(0);

  const searchQuery = props.route.params.searchQuery;

  const flatListRef = React.useRef(null);

  const MovieCard = ({ item }) => {
    return (
      <TouchableOpacity>
        <View style={styles.container}>
          <Card
            style={styles.card}
            onPress={() =>
              props.navigation.navigate("MovieDetails", { id: item.id })
            }
          >
            <Card.Cover
              style={styles.image}
              source={
                item.image
                  ? {
                      uri: `https://www.themoviedb.org/t/p/w220_and_h330_face${item.image}`,
                    }
                  : require("../Assets/Images/default_image.jpg")
              }
            />
            <Card.Content>
              <Title style={styles.text}>{item.title}</Title>
              <Paragraph style={styles.text}>{item.release_date}</Paragraph>
            </Card.Content>
          </Card>
        </View>
      </TouchableOpacity>
    );
  };

  const LoadingComponent = () => {
    return (
      <View>
        <ActivityIndicator size="large" style={styles.loading} color="cyan" />
      </View>
    );
  };

  const FooterComponent = () => {
    if (totalPage !== pageNum) {
      return (
        <Button
          title="Next"
          color="#272b2b"
          onPress={() => {
            setpageNum(pageNum + 1);
            scrollUp();
          }}
        />
      );
    } else {
      return <View></View>;
    }
  };
  const renderitem = ({ item }) => {
    return <MovieCard item={item} />;
  };

  useFocusEffect(
    React.useCallback(() => {
      props.getMovies(searchQuery, pageNum);
    }, [pageNum])
  );

  useEffect(() => {
    props.navigation.addListener("beforeRemove", () => {
      props.clearMovie();
    });
  }, [props.navigation]);

  useEffect(() => {
    if (props.searchedMovies) {
      setmovies(props.searchedMovies.moviesResult);
      settotalPage(props.searchedMovies.total_pages);
      settotalResults(props.searchedMovies.total_results);
      setisLoading(false);
    }
  }, [props.searchedMovies]);

  const scrollUp = () => {
    flatListRef.current.scrollToIndex({ index: 0 });
  };

  if (props.searchedMovies && !isLoading) {
    if (totalPage > 0) {
      return (
        <>
          <StatusBar />
          <FlatList
            ref={flatListRef}
            data={movies}
            renderItem={renderitem}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={LoadingComponent}
            ListFooterComponent={FooterComponent}
            style={styles.flatList}
          />
        </>
      );
    } else if (totalResults === 0) {
      return (
        <>
          <StatusBar />
          <View style={styles.noResultFoundContainer}>
            <Text style={styles.text}>0 Results Found</Text>
          </View>
        </>
      );
    }
  } else {
    return (
      <>
        <StatusBar />
        <View style={styles.loading}>
          <ActivityIndicator size="large" style={styles.loading} color="cyan" />
        </View>
      </>
    );
  }
};

function mapStateToProps(state) {
  return {
    searchedMovies: state.searchedMovies,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clearMovie: () => dispatch({ type: "CLEAR_MOVIES" }),
    getMovies: (searchQuery, pageNum) =>
      dispatch({
        type: "SEARCH_MOVIES",
        searchQuery: searchQuery,
        pageNum: pageNum,
      }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Popular);
