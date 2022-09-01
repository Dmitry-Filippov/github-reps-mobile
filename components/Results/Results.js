import { View, Text, StyleSheet } from "react-native";
import ResultItem from "../ResultItem/ResultItem";

const Results = ({ results }) => {
  return (
    <View style={styles.results}>
      <Text style={styles.resultsTitle}>Совпадения:</Text>
      <View>
        {results.map((item) => {
          return (
            <ResultItem
              key={item.id}
              name={item.name}
              link={item.html_url}
              owner={item.owner.login}
              lang={item.language}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  results: {
    marginTop: 50,
  },

  resultsTitle: {
    fontSize: 50,
    fontWeight: "500",
    color: "#fff",
    textAlign: "center",
  },

  resultsList: {
    paddingTop: 10,
  },
});

export default Results;
