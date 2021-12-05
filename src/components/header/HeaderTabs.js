import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

const HeaderButton = ({ buttonText, activeTab, setActiveTab }) => (
  <TouchableOpacity
    style={{
      backgroundColor: activeTab === buttonText ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => setActiveTab(buttonText)}
  >
    <Text
      style={{
        color: activeTab === buttonText ? "white" : "black",
        fontSize: 16,
        fontWeight: "900",
      }}
    >
      {buttonText}
    </Text>
  </TouchableOpacity>
);

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <View style={styles.container}>
      <HeaderButton
        buttonText="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        buttonText="Pickup"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

export default HeaderTabs;
