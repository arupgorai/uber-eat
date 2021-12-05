import React from "react";
import { SafeAreaView, View } from "react-native";
import { HeaderTabs, SearchBar } from "../../components";

import { styles } from "./styles.home";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerWrap}>
        <HeaderTabs />
        <SearchBar />
      </View>
    </SafeAreaView>
  );
};

export default Home;
