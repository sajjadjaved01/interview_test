import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function Login({ navigation, route }) {
  const password = useRef(null);
  const txtUser = useRef(null);
  const [showPassword, setShowPassword] = useState(false);

  const logins = () => {};
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <StatusBar />

      <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 22, margin: 15 }}>WELCOME</Text>
      <TextInput
        placeholder="Email"
        ref={txtUser}
        returnKeyType="next"
        autoCapitalize="none"
        keyboardType="email-address"
        autoCompleteType="email"
        onSubmitEditing={() => password.current.focus()}
        blurOnSubmit={false}
        left={<TextInput.Icon name="account" />}
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        ref={password}
        secureTextEntry={showPassword == false ? true : false}
        textContentType="password"
        autoCapitalize="none"
        onSubmitEditing={() => logins()}
        left={<TextInput.Icon name="lock" />}
        right={
          <TextInput.Icon
            name={showPassword == false ? "eye" : "eye-off"}
            onPress={() => setShowPassword(showPassword ? false : true)}
          />
        }
        style={styles.input}
      />
      <Button
        onPress={() => navigation.navigate("productList")}
        style={{ marginTop: 30, backgroundColor: "gray", borderRadius: 40 }}
        mode="contained"
      >
        Login
      </Button>
      <Text style={{ ...styles.text, alignSelf: "center", marginTop: 20 }}>
          Don’t have an account?{" "}
          <Text
            onPress={() => navigation.navigate("register")}
            style={{ fontSize: 14, fontWeight: 'bold', color: 'green' }}
          >
            Sign up.
          </Text>
          </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: { height: 50, fontSize: 14, marginTop: 25 },
  text: { marginTop: 8, fontSize: 12 },
});
