import React from "react";
import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

import { styles } from "./styles";

const SearchBar = () => {
  return (
    <View>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: styles.textInput,
          textInputContainer: styles.textInputContainer,
        }}
        renderLeftButton={() => (
          <View style={styles.renderLeftButtonWrap}>
            <Ionicons name="location-sharp" size={24} color="black" />
          </View>
        )}
        renderRightButton={() => (
          <View style={styles.renderRightButtonWrap}>
            <AntDesign name="clockcircle" size={11} />
            <Text style={styles.searchText}>Search</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchBar;
