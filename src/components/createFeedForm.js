import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  ListView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions,
  TouchableHighlight
} from "react-native";
import {connect} from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ImagePicker from "react-native-image-picker";
import {save_data} from '../actions'

import { Badge, Icon, Button, Container } from "native-base";

const { height,width } = Dimensions.get("window");



const imagePickerOptions = {
  title: "Select Avatar",
  customButtons: [{ name: "fb", title: "Choose Photo from Facebook" }],
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};

class createFeedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: {
        type: "file",
        require: require("../assets/images/noUser.jpeg")
      },
      user: {
        name: "",
        age: "",
        tags: []
      },
      tag: "",
      name: "",
      age: ""
    };
  }

  handleImage() {
    ImagePicker.showImagePicker(imagePickerOptions, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        // let source = {type:'uri', uri: {uri:response.uri} };

        // You can also display the image using data:
        let source = {
          type: "uri",
          uri: { uri: "data:image/jpeg;base64," + response.data }
        };

        this.setState({
          avatar: source
        });
      }
    });
  }

  removeTag(tag, i) {
    const user = this.state.user;
    const tags = user.tags;
    tags.splice(tags.indexOf(tag), 1);
    user.tags = tags;
    this.setState({ user: user });
  }
  addTags() {
    if (
      this.state.tag !== undefined &&
      this.state.tag !== "" &&
      this.state.tag !== null
    ) {
      if (this.state.user.tags.length < 10) {
        const user = this.state.user;
        const tags = user.tags;
        tags.push(this.state.tag);
        user.tags = tags;
        this.setState({ user: user });
        this.setState({ tag: "" });
      } else {
        alert("Max 10 tags are allowed");
      }
    }
  }
  addUser() {
    const user = this.state.user;
    user.name = this.state.name;
    user.age = this.state.age;
    this.setState({user:user});
    this.props.save_data(this.state.user);

  }

  // createFeed
componentWillReceiveProps(Props){
  alert('form ')
}
componentDidMount(){
    
}

  render() {
    return (
      <KeyboardAwareScrollView style={{ height :height*1  , backgroundColor: "white" }}>
        <View style={{ flex: 0.3, flexDirection: "row" }}>
          <TouchableOpacity
            style={{ marginTop: 30 }}
            onPress={() => this.handleImage()}
          >
            <Image
              onPress={() => this.handleImage()}
              source={
                this.state.avatar.type === "file"
                  ? this.state.avatar.require
                  : this.state.avatar.uri
              }
              style={styles.userImage}
            />
            <Image
              onPress={() => this.handleImage()}
              source={require("../assets/images/uploadImage.jpeg")}
              style={styles.uploadIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 0.7, flexDirection: "column" }}>
          <View style={{ flex: 0.3, flexDirection: "column", paddingTop: 25 }}>
            <View
              style={{
                flex: 0.5,
                flexDirection: "row",
                backgroundColor: "#f7f6f6"
              }}
            >
              <View style={{ flex: 0.5, alignItems: "center", paddingTop: 15 }}>
                <Text style={{ fontSize: 18 }}>Name</Text>
              </View>
              <View style={{ flex: 0.5, alignItems: "center", paddingTop: 15 }}>
                <Text style={{ fontSize: 18 }}>Age</Text>
              </View>
            </View>
            <View style={{ flex: 0.5, flexDirection: "row" }}>
              <View style={{ flex: 0.5 }}>
                <TextInput
                  placeholder="Name"
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoFocus={false}
                  keyboardType="default"
                  value={this.state.name}
                  onChangeText={name => this.setState({ name: name })}
                />
              </View>
              <View style={{ flex: 0.5 }}>
                <TextInput
                  placeholder="Age"
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoFocus={false}
                  keyboardType="numeric"
                  value={this.state.age}
                  onChangeText={age => this.setState({ age: age })}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              flex: 0.7,
              flexDirection: "column",
              backgroundColor: "white"
            }}
          >
            <View
              style={{
                flex: 0.3,
                flexDirection: "row",
                backgroundColor: "#f7f6f6",
                paddingTop: 30
              }}
            >
              <View style={{ flex: 0.4, marginLeft: 10 }}>
                <Text style={{ fontSize: 20 }}>Tags</Text>
              </View>
              <View style={{ flex: 0.3 }}>
                <TextInput
                  placeholder="Tag"
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoFocus={false}
                  keyboardType="default"
                  style={{ marginTop: 20 }}
                  value={this.state.tag}
                  onChangeText={tag => this.setState({ tag: tag })}
                />
              </View>

              <TouchableOpacity
                onPress={() => this.addTags()}
                style={{
                  height: 40,
                  width: 40,
                  position: "absolute",
                  marginTop: 40,
                  marginLeft: 320,
                  borderRadius: 100
                }}
              >
                <Image
                  style={{
                    height: 35,
                    width: 35,
                    borderRadius: 100,
                    backgroundColor: "rgba(52, 52, 52, 0)"
                  }}
                  source={require("../assets/icons/plusIco.png")}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 0.7,
                flexDirection: "row",
                paddingTop: 15,
                paddingLeft: 25,
                paddingRight: 25
              }}
            >
              {this.state.user.tags.map((tag, i) => {
                return (
                  <Badge style={{ backgroundColor: "#4d2e85", marginLeft: 10 }}>
                    <Text
                      onPress={() => this.removeTag(tag, i)}
                      style={{ color: "white" }}
                    >
                      {tag}{" "}
                      <Icon
                        onPress={() => this.removeTag(tag, i)}
                        name="close-circle"
                        style={{ color: "white", fontSize: 15, marginLeft: 10 }}
                      />
                    </Text>
                  </Badge>
                );
              })}
            </View>
          </View>
        </View>

        <View style={{ flex: 0.2, flexDirection: "row" }}>
          <Container style={{ height: 100 }}>
            <Button full>
              <Text style={{ color: "white" }} onPress={e => this.addUser()}>Add</Text>
            </Button>
          </Container>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  uploadIcon: {
    marginLeft: 220,
    borderRadius: 100,
    backgroundColor: "rgba(52, 52, 52, 0)",
    marginTop: 80,
    position: "absolute",
    width: 40,
    height: 40
  },
  userImage: {
    marginLeft: 110,
    backgroundColor: "rgba(52, 52, 52, 0)",
    borderRadius: 200
  }
});



const mapStateToProps = state =>({
  users: state.allUsers
})

const mapDispatchToProps = (dispatch) => {
  return {
      
  }
}


export default connect (mapStateToProps, {save_data})(createFeedForm)