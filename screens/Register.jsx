import React, { useRef, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function Register({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", marginHorizontal: 20 }}>
      <View style={{ flexDirection: "column" }}>
        <Text>Username</Text>
        <TextInput
          ref={userName}
          autoCapitalize="none"
          textContentType="username"
          blurOnSubmit={false}
          onSubmitEditing={() => email.current.focus()}
          keyboardType="default"
          returnKeyType="next"
          left={<TextInput.Icon name="account" />}
          style={styles.input}
        />
      </View>

      <View style={{ flexDirection: "column", marginTop: 20 }}>
        <Text>Email</Text>
        <TextInput
          ref={email}
          onSubmitEditing={() => password.current.focus()}
          autoCapitalize="none"
          textContentType="emailAddress"
          blurOnSubmit={false}
          keyboardType="email-address"
          returnKeyType="next"
          placeholder="someone@example.com"
          left={<TextInput.Icon name="email" />}
          style={styles.input}
        />
      </View>
      <View style={{ flexDirection: "column", marginTop: 20 }}>
        <Text>Password</Text>
        <TextInput
        ref={password}
          secureTextEntry={showPassword == false ? true : false}
          autoCapitalize="none"
          textContentType="password"
          left={<TextInput.Icon name="lock" />}
          returnKeyType="next"
          right={
            <TextInput.Icon
              name={showPassword == false ? "eye" : "eye-off"}
              onPress={() => setShowPassword(showPassword == true ? false : true)}
            />
          }
          style={styles.input}
        />
      </View>

      <Button
        onPress={() => navigation.navigate("productList")}
        style={{ marginTop: 20, backgroundColor: "gray", borderRadius: 25 }}
        mode="contained"
      >
        Signup
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: { height: 50, fontSize: 14, marginTop: 5 },
  text: { marginTop: 8, fontSize: 14 },
});
