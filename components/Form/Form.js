import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  Vibration,
} from "react-native";
import { dark, light } from "../../colors/colors";
import { searchReps } from "../../utils/api/api";

const Form = ({ setResults, setTotalCount, colorScheme }) => {
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (inputValue !== "") {
      setIsInputEmpty(false);
    } else {
      setIsInputEmpty(true);
    }
  });

  function handleSearch() {
    setIsLoading(true);
    searchReps(inputValue)
      .then((res) => {
        setResults(res.items.slice(0, 10));
        setTotalCount(res.total_count);
        if (!res.items[0]) {
          throw new Error("Ничего не найдено!");
        }
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        Alert.alert("Ошибка", err.message);
        Vibration.vibrate();
      });
  }

  const styles = StyleSheet.create({
    formInput: {
      color: colorScheme === "light" ? dark : light,
      fontSize: 20,
      fontWeight: "300",
      borderRadius: 5,
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: colorScheme === "light" ? dark : light,
      padding: 10,
      width: 300,
      marginTop: 30,
    },

    formButton: {
      marginTop: 20,
      padding: 10,
      borderRadius: 5,
      borderColor: colorScheme === "light" ? dark : light,
      borderWidth: 1,
    },

    formButtonDisabled: {
      marginTop: 20,
      padding: 10,
      borderRadius: 5,
      borderColor: colorScheme === "light" ? dark : light,
      borderWidth: 1,
      opacity: 0.4,
    },

    buttonText: {
      color: colorScheme === "light" ? dark : light,
      fontSize: 20,
      fontWeight: "300",
    },

    buttonTextDisabled: {
      color: colorScheme === "light" ? dark : light,
      fontSize: 20,
      fontWeight: "300",
      opacity: 0.4,
    },

    loader: {
      marginBottom: 30,
      marginTop: 43,
    },
  });

  return (
    <>
      {isLoading ? (
        <ActivityIndicator
          size={60}
          color={colorScheme === "light" ? dark : light}
          style={styles.loader}
        />
      ) : (
        <>
          <TextInput
            style={styles.formInput}
            defaultValue={inputValue}
            onChangeText={(text) => setInputValue(text)}
            clearButtonMode="while-editing"
            enablesReturnKeyAutomatically={true}
            keyboardAppearance={colorScheme === "light" ? "light" : "dark"}
            onSubmitEditing={() => handleSearch(inputValue)}
          />
          <Pressable
            disabled={isInputEmpty}
            style={isInputEmpty ? styles.formButtonDisabled : styles.formButton}
            onPress={() => handleSearch(inputValue)}
          >
            <Text style={styles.buttonText}>Поиск</Text>
          </Pressable>
        </>
      )}
    </>
  );
};

export default Form;
