import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 560,
    alignItems: "center",
    backgroundColor: "#3a3f3f",
  },
  image: {
    margin: 26,
    width: 220,
    height: 330,
    alignSelf: "center",
  },
  title: {
    margin: 10,
    fontSize: 30,
    alignSelf: "center",
    color: "aliceblue",
  },
  date: {
    fontSize: 16,
    marginTop: 10,
    alignSelf: "center",
    color: "aliceblue",
  },
  temp: {
    alignSelf: "center",
  },
  genres: {
    fontSize: 16,
    marginTop: 10,
    alignSelf: "center",
    color: "aliceblue",
  },
  backgroundimage: {
    height: "100%",
    width: "100%",
  },
  scoreContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#3a3f3f",
  },
  scoreCircle: {
    margin: 10,
    height: 60,
    width: 60,
    backgroundColor: "cyan",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  scoreNum: {
    fontSize: 18,
    color: "aliceblue",
  },
  scoreText: {
    fontSize: 18,
    color: "aliceblue",
  },
  overviewContainer: {
    padding: 20,
    backgroundColor: "#3a3f3f",
    width: "100%",
  },
  overviewTitle: {
    fontSize: 24,
    color: "aliceblue",
  },
  overviewText: {
    marginTop: 10,
    fontSize: 16,
    color: "aliceblue",
  },
  fullcastContainer: {
    padding: 20,
    backgroundColor: "#3a3f3f",
  },
  fullcaseTitle: {
    fontSize: 26,
    color: "aliceblue",
  },
  castCardContainer: {
    margin: 20,
    backgroundColor: "#3a3f3f",
  },
  castCard: {
    width: 138,
    borderRadius: 10,
    backgroundColor: "#272b2b",
  },
  castCardImage: {
    backgroundColor: "#3a3f3f",
  },
  castName: {
    fontSize: 14,
    color: "aliceblue",
  },
  castNameOriginal: {
    fontSize: 12,
    color: "aliceblue",
  },
  loading: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3a3f3f",
  },
});

export default styles;
