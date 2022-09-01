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
import { searchReps } from "../../utils/api/api";

const Form = ({ setResults, setTotalCount }) => {
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
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        Alert.alert("Error", err.message);
        Vibration.vibrate();
      });
  }

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size={60} color="#fff" />
      ) : (
        <>
          <TextInput
            style={styles.formInput}
            defaultValue={inputValue}
            onChangeText={(text) => setInputValue(text)}
            clearButtonMode="while-editing"
            enablesReturnKeyAutomatically={true}
            keyboardAppearance="dark"
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

const styles = StyleSheet.create({
  formInput: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "300",
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#fff",
    padding: 10,
    width: 300,
    marginTop: 30,
  },

  formButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    borderColor: "#fff",
    borderWidth: 1,
  },

  formButtonDisabled: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    borderColor: "#fff",
    borderWidth: 1,
    opacity: 0.4,
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "300",
  },

  buttonTextDisabled: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "300",
    opacity: 0.4,
  },

  loader: {
    marginVertical: 25,
  },
});

export default Form;
