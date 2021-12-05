import React from "react";
import { View, Text, Image, FlatList } from "react-native";

import { styles } from "./styles";
import data from "./data";

const Categroy = ({ image, text }) => {
  return (
    <View style={styles.cardWrap}>
      <Image source={image} style={styles.imgStyle} />
      <Text style={styles.textStyle}>{text}</Text>
    </View>
  );
};

const Categories = () => {
  return (
    <View style={styles.categoryListWrap}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Categroy {...item} />}
      />
    </View>
  );
};

export default Categories;
