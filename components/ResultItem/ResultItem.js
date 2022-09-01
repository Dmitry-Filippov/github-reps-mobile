import { Linking, Pressable, View, Text, StyleSheet } from "react-native";
import { dark, light } from "../../colors/colors";

const ResultItem = ({ name, link, owner, lang, colorScheme }) => {
  function handlePress() {
    Linking.openURL(link);
  }

  const styles = StyleSheet.create({
    resultItem: {
      paddingVertical: 15,
      maxWidth: 290,
    },

    linkText: {
      color: "#6dd6eb",
      fontSize: 30,
      fontWeight: "500",
    },

    ownerText: {
      color: colorScheme === "light" ? dark : light,
      fontSize: 20,
      fontWeight: "300",
      paddingTop: 4,
    },

    langText: {
      color: colorScheme === "light" ? dark : light,
      fontSize: 20,
      fontWeight: "400",
      paddingTop: 4,
    },
  });

  return (
    <View style={styles.resultItem}>
      <Pressable onPress={handlePress}>
        <Text style={styles.linkText}>{name}</Text>
      </Pressable>
      <Text style={styles.ownerText}>Владелец: {owner}</Text>
      <Text style={styles.langText}>
        Язык разработки: {lang ? lang : "не указан"}
      </Text>
    </View>
  );
};

export default ResultItem;
