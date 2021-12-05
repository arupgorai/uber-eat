import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { Categories, HeaderTabs, SearchBar } from "../../components";

import { styles } from "./styles.home";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerWrap}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <Categories />
      <Text>hello</Text>
    </SafeAreaView>
  );
};

export default Home;
