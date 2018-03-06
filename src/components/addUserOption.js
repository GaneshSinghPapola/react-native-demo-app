import React,{Component} from "react";
import {Actions} from 'react-native-router-flux'
import {StyleSheet,View,Image,TouchableOpacity} from  'react-native';
import { Icon, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';
import {Avatar,SearchBar} from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import user from '../assets/images/addUser.png';
import bgSrc from '../assets/images/searchUser.png';

export default class AddUser extends Component {

    constructor(props) {
      super(props);
      
    }
   
    render() {
      
      return (
        <KeyboardAwareScrollView style={styles.container}>
        <View >
            <View style={{flex:0.1}}>
                <SearchBar
                    lightTheme
                    icon={{ type: 'font-awesome', name: 'search' }}
                    placeholder='Type Here...' />
            </View>
            <View style={{flex:0.4, padding:10, flexDirection:'column',backgroundColor:"white"}}>
            <TouchableOpacity>
            <Image
            source={require("../assets/images/searchUser.png")}
            style={styles.userImage}
          />
          </TouchableOpacity>
                <View style={{padding:10, flex:0.1, alignItems: 'center'}}>
                    <Text>Search for new</Text>
                </View>
            </View>
            <View style={{padding:10,flex:0.1,alignItems: 'center'}}>
                <Text>OR</Text>
            </View>
            <View style={{flex:0.4,paddingTop:20,backgroundColor:"white"}}>
            <TouchableOpacity onPress={() => Actions.createFeed()}>
            <Image
              
              source={require("../assets/images/addUser.png")}
              style={styles.userImage}
            />
            </TouchableOpacity>
            
            <View style={{padding:10, flex:0.1, alignItems: 'center'}}>
                <Text>Add new person</Text>
            </View>
            </View>
            <Icon name='add-circle' style={{fontSize: 50, color: 'steelblue', left:300,top:5}} />
        </View>
        </KeyboardAwareScrollView>
        
      );
    }

  }

  const styles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection:'column'
    },
    image:{
        width:null,
        height:150
    },
    userImage: {
        marginLeft: 130,
        height:150,
        width:150,
        backgroundColor: "rgba(52, 52, 52, 0)",

      }
  });