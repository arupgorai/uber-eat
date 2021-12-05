import React from "react";
import { SafeAreaView } from "react-native";
import { HeaderTabs } from "../../components";

import { styles } from "./styles.home";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderTabs />
    </SafeAreaView>
  );
};

export default Home;
