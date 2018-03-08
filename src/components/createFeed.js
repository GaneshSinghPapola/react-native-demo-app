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
import {get_data} from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

class UserLocation extends Component {
  constructor(props){
    super(props);
    // this.props.
  }

  componentWillMount(){
    this.props.get_data()
  }

  componentWillReceiveProps(Props){
    // alert(JSON.stringify(Props.users))
  }

  componentDidMount(){
    
  }

  render() {
    alert(typeof this.props.users)
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

          {  
            
              this.props.users ?
                <FlatList
                  numColumns={3}
                  scrollEnabled={false}
                  data={this.props.users}
                  keyExtractor={item => item.id}
                  renderItem={({ item, index }) => {
                    alert('in the list ', item)
                    return (
                      <View style={styles.container}>
            <Image
              source={require("../assets/images/cover.png")}
              style={styles.photo}
            />
            <Text style={styles.text}>sadas dasda</Text>
          </View>
                    )
                  }}
                />
                : null
            

            

        }

         

          

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
function mapStateToProps(state) {
  return {
     users : state.users.listData
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ get_data }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(UserLocation);