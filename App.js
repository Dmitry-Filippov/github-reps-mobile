import { useState } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import Form from "./components/Form/Form";
import Results from "./components/Results/Results";

export const textColor = "#fff";

export default function App() {
  const [results, setResults] = useState([]);
  const [totalCount, setTotalCount] = useState(null);

  return (
    <>
      <View style={styles.header}></View>
      <ScrollView style={{ backgroundColor: "#262626" }}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <Text style={styles.title}>Поиск на GitHub</Text>
          <Text style={styles.subtitle}>Введите ключевое слово</Text>
          <Form setResults={setResults} setTotalCount={setTotalCount} />
          {results[0] ? <Results results={results} /> : <></>}
          {totalCount ? (
            <Text style={styles.totalCountText}>
              Всего репозиториев найдено: {totalCount}
            </Text>
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262626",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 50,
  },

  title: {
    color: textColor,
    fontWeight: "500",
    lineHeidht: "1.5em",
    fontSize: 50,
    paddingTop: 60,
    textAlign: "center",
  },

  subtitle: {
    color: textColor,
    fontSize: 25,
    fontWeight: "400",
    textAlign: "center",
  },

  header: {
    height: 35,
    backgroundColor: "#262626",
  },

  totalCountText: {
    color: textColor,
    fontSize: 25,
    fontWeight: "400",
    paddingTop: 30,
  },
});
