const initState = {
  popularMovies: null,
  topRatedMovies: null,
  searchedMovies: null,
  movieDetails: null,
};

const reducerMovie = (state = initState, action) => {
  switch (action.type) {
    case "POPULAR_FETCH_SUCCEEDED":
      return { popularMovies: action.popularMovies };
    case "TOPRATED_FETCH_SUCCEEDED":
      return { topRatedMovies: action.topRatedMovies };
    case "MOVIE_DETAILS_FETCH_SUCCEEDED":
      return { movieDetails: action.movieDetails };
    case "SEARCH_FETCH_SUCCEEDED":
      return { searchedMovies: action.searchedMovies };
    case "CLEAR_MOVIES":
      return { searchedMovies: null };
  }
  return state;
};

export default reducerMovie;
