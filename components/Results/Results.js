import { View, Text, StyleSheet } from "react-native";
import { dark, light } from "../../colors/colors";
import ResultItem from "../ResultItem/ResultItem";

const Results = ({ results, colorScheme }) => {
  const styles = StyleSheet.create({
    results: {
      marginTop: 50,
    },

    resultsTitle: {
      fontSize: 50,
      fontWeight: "500",
      color: colorScheme === "light" ? dark : light,
      textAlign: "center",
    },

    resultsList: {
      paddingTop: 10,
    },
  });

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
              colorScheme={colorScheme}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Results;
