import { useEffect, useState } from "react";
import { Button, Pressable, StyleSheet, Text, TextInput } from "react-native";

const Form = () => {
  const [isInputEmpty, setIsInputEmpty] = useState(true);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputValue !== "") {
      setIsInputEmpty(false);
    } else {
      setIsInputEmpty(true);
    }
  });

  return (
    <>
      <TextInput
        style={styles.formInput}
        defaultValue={inputValue}
        onChangeText={(text) => setInputValue(text)}
      />
      <Pressable
        disabled={isInputEmpty}
        style={isInputEmpty ? styles.formButtonDisabled : styles.formButton}
      >
        <Text style={styles.buttonText}>Поиск</Text>
      </Pressable>
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
});

export default Form;
