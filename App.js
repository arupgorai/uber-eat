import { StatusBar } from "expo-status-bar";
import React, { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <Fragment>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text>Hello there from Expo..!!</Text>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "red",
  },
});
