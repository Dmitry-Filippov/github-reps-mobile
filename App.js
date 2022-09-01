import { useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { dark, light } from "./colors/colors";
import Form from "./components/Form/Form";
import Results from "./components/Results/Results";

export default function App() {
  const [results, setResults] = useState([]);
  const [totalCount, setTotalCount] = useState(null);
  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === "light" ? light : dark,
      alignItems: "center",
      paddingTop: 30,
      paddingBottom: 50,
    },

    title: {
      color: colorScheme === "light" ? dark : light,
      fontWeight: "500",
      lineHeidht: "1.5em",
      fontSize: 50,
      paddingTop: 60,
      textAlign: "center",
    },

    subtitle: {
      color: colorScheme === "light" ? dark : light,
      fontSize: 25,
      fontWeight: "400",
      textAlign: "center",
    },

    header: {
      height: 35,
      backgroundColor: colorScheme === "light" ? light : dark,
    },

    totalCountText: {
      color: colorScheme === "light" ? dark : light,
      fontSize: 25,
      fontWeight: "400",
      paddingTop: 30,
    },
  });

  return (
    <>
      <View style={styles.header}></View>
      <ScrollView
        style={{ backgroundColor: colorScheme === "light" ? light : dark }}
      >
        <StatusBar
          style="auto"
          barStyle={colorScheme === "light" ? "dark-content" : "light-content"}
        />
        <View style={styles.container}>
          <Text style={styles.title}>Поиск на GitHub</Text>
          <Text style={styles.subtitle}>Введите ключевое слово</Text>
          <Form
            setResults={setResults}
            setTotalCount={setTotalCount}
            colorScheme={colorScheme}
          />
          {results[0] ? (
            <Results results={results} colorScheme={colorScheme} />
          ) : (
            <></>
          )}
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
