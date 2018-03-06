import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ListView,
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native";

export default class UserLocation extends Component {
  render() {
    return (
      <View style={styles.flexBody}>
        <Image
          style={styles.cover}
          source={require("../assets/images/cover.png")}/>
        <TouchableOpacity
          style={styles.coverAdd}
          onPress={() => Actions.createFeedForm()}>
          <Image
            style={styles.coverIcon}
            source={require("../assets/icons/plusIco.png")}
          />
        </TouchableOpacity>

        <View style={styles.flexSection}>
          <View style={styles.container}>
            <Image
              source={require("../assets/images/cover.png")}
              style={styles.photo}
            />
            <Text style={styles.text}>sadas dasda</Text>
          </View>

          <View style={styles.container}>
            <Image
              source={require("../assets/images/cover.png")}
              style={styles.photo}
            />
            <Text style={styles.text}>sadas dasda</Text>
          </View>

          <View style={styles.container}>
            <Image
              source={require("../assets/images/cover.png")}
              style={styles.photo}
            />
            <Text style={styles.text}>sadas dasda</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cover: { height: 200, width: 420 },
  coverIcon: {
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor: "rgba(52, 52, 52, 0)"
  },
  coverAdd: {
    height: 40,
    width: 40,
    position: "absolute",
    marginTop: 180,
    marginLeft: 320,
    borderRadius: 100
  },
  itemList: {},
  flexSection: { flexDirection: "row" },
  container: {
    flexDirection: "column",
    marginTop: 30,
    padding: 20
  },
  text: {
    fontSize: 16
  },
  photo: {
    height: 80,
    width: 80,
    borderRadius: 100
  }
});
