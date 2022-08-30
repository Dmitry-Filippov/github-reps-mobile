import { StyleSheet, Text, View } from "react-native";
import Form from "./components/Form/Form";

export const textColor = "#fff";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Поиск на GitHub</Text>
      <Text style={styles.subtitle}>Введите ключевое слово</Text>
      <Form />
    </View>
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
});
