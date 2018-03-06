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

const dataSource = [
  {
    title: "Location",
    description:'Get your current location',
    image:require('../assets/images/2.jpg'),
    route: () => {
      Actions.UserLocation();
    }
  },
  {
    title: "Feed",
    description:'Get your feeds',
    image:require('../assets/images/6.jpg'),
    route: () => {
        // Actions.createFeed();
        Actions.AddUser();
    }
  }
];

export default class UserLocation extends Component {

  render () {
  return (


          
    <View style={styles.flexBody}>


   { 
     dataSource.map(item=> {
       return(
      <View  style={styles.flexSection}>
      <TouchableOpacity onPress={()=>item.route()}>
        <Image style={styles.image}  source={item.image} />
        <Text style={styles.textHead}>{item.title}</Text>
        <Text style={styles.textPara}>{item.description}</Text>
        </TouchableOpacity>
      </View>
      
     )})
  
  
  }
    
   

    </View>





  )
}
}


const styles = StyleSheet.create({
  flexBody: {flex:1,flexDirection: 'column', borderWidth: 1,  borderColor: '#d6d7da',
   flexDirection: 'column', justifyContent: 'center',  alignItems: 'center'},

 flexSection:{flex: 0.5, paddingTop:70,
  flexDirection: 'column', justifyContent: 'center'},

 image:{width:300, height:260,borderRadius:15},
 textHead:{position: 'absolute',padding:10, top:100, fontWeight:'bold',fontSize: 22, color:'#fff'},
 textPara:{position: 'absolute',padding:10, top:120, fontWeight:'bold',fontSize: 20,color:'#fff'}

});
