import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import styles from "../styles/movieDetails.style";

const MovieDetails = (props) => {
  const [movieDetails, setmovieDetails] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    props.getMoviesDetails(props.route.params.id);
  }, [props.route.params.id]);

  useEffect(() => {
    setmovieDetails(props.movieDetails);
    setisLoading(false);
  }, [props.movieDetails]);

  const CastCard = ({ item }) => {
    return (
      <View style={styles.castCardContainer}>
        <Card style={styles.castCard}>
          <Card.Cover
            style={styles.castCardImage}
            source={
              item[0].profile_path
                ? {
                    uri: `https://www.themoviedb.org/t/p/w276_and_h350_face${item[0].profile_path}`,
                  }
                : require("../Assets/Images/default_image.jpg")
            }
          />
          <Card.Content style={styles.castCardText}>
            <Title style={styles.castName}>{item[0].name}</Title>
            <Paragraph style={styles.castNameOriginal}>
              {item[0].original_name}
            </Paragraph>
          </Card.Content>
        </Card>
      </View>
    );
  };
  if (!isLoading && movieDetails) {
    return (
      <>
        <StatusBar />
        <ScrollView>
          <View style={styles.container}>
            <ImageBackground
              source={{
                uri: `https://www.themoviedb.org/t/p/original${movieDetails.backdrop_path}`,
              }}
              style={styles.backgroundimage}
              blurRadius={20}
            >
              <Image
                source={
                  movieDetails.poster_path
                    ? {
                        uri: `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movieDetails.poster_path}`,
                      }
                    : require("../Assets/Images/default_image.jpg")
                }
                style={styles.image}
              />
              <Text style={styles.title}>
                {movieDetails.title ? movieDetails.title : ""}
              </Text>
              <Text style={styles.date}>
                {movieDetails.release_date ? movieDetails.release_date : ""}
              </Text>
              <Text style={styles.genres}>
                {movieDetails.movieGenres ? movieDetails.movieGenres : ""}
              </Text>
            </ImageBackground>
          </View>
          <View style={styles.scoreContainer}>
            <View style={styles.scoreCircle}>
              <Text style={styles.scoreNum}>
                {movieDetails.vote_average ? movieDetails.vote_average : "N/A"}
              </Text>
            </View>
            <View>
              <Text style={styles.scoreText}>User Score</Text>
            </View>
          </View>
          <View style={styles.overviewContainer}>
            <Text style={styles.overviewTitle}>Overview</Text>
            <Text style={styles.overviewText}>
              {movieDetails.overview ? movieDetails.overview : "N/A"}
            </Text>
          </View>
          <View style={styles.fullcastContainer}>
            <Text style={styles.fullcaseTitle}>Full Cast</Text>
            <FlatList
              data={movieDetails.cast}
              renderItem={CastCard}
              extraData={movieDetails.cast}
              horizontal={true}
            />
          </View>
        </ScrollView>
      </>
    );
  } else {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" style={styles.loading} color="cyan" />
      </View>
    );
  }
};

function mapStateToProps(state) {
  return {
    movieDetails: state.movieDetails,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMoviesDetails: (id) => dispatch({ type: "GET_MOVIE_DETAILS", id: id }),
    clearMovie: () => dispatch({ type: "CLEAR_MOVIE" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
