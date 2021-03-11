import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import Card from "../../components/atoms/Card";
import { SIZE, COLORS } from "../../constants";
import { useAuth } from "../../context/auth-context";

const SignInScreen = () => {
  const { signIn } = useAuth();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const onSubmit = () => {
    signIn({
      ...values,
    });
  };

  const onInputChange = fieldName => text => {
    setValues(state => ({
      ...state,
      [`${fieldName}`]: text,
    }))
  };

  return (
    <View style={styles.root}>
      <Card rootStyle={styles.formContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>Username:</Text>
          <TextInput
            style={styles.input}
            value={values.username}
            onChangeText={onInputChange('username')}
            placeholder="Enter your Username"
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            onChangeText={onInputChange('password')}
            value={values.password}
            placeholder="Enter your Password"
          />
        </View>

        <View style={styles.row}>
          <Button
            onPress={onSubmit}
            color="white"
            style={styles.button}
            title="Sign In"
          />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary.main,
  },
  formContainer: {
    minWidth: "90%",
    backgroundColor: "transparent",
  },
  input: {
    height: 40,
    borderColor: "#EBEBEB",
    borderWidth: 1,
    padding: SIZE.spacing(1),
    color: "white",
    fontWeight: "bold",
  },
  label: {
    color: "white",
    marginBottom: SIZE.spacing(2),
    fontWeight: "bold",
  },
  row: {
    marginBottom: SIZE.spacing(2),
  },
  button: {
    borderWidth: 1,
  },
});
export const ScreenOptions = {
  headerShown: false,
};

export default SignInScreen;
