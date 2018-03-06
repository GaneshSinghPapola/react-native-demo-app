import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Stack, Scene, Router, Drawer, Tabs, Lightbox, Overlay, Modal, ActionConst } from "react-native-router-flux"; // 4.0.0-beta.28
import Login from "./login";
import Signup from "./signup";
import UserFeed from "./user";
import UserLocation from "./userLocation";
import UserDashboard from "./userDashboard";
import DrawerContent from "./drawer/drawerComponent";
import createFeed from "./createFeed";
import createFeedForm from "./createFeedForm";
import AddUser from './addUserOption';
const Route = () => {
  return (
    

    <Router 
    
    navigationBarStyle={styles.navBar}
  titleStyle={styles.navBarTitle}
  barButtonTextStyle={styles.barButtonTextStyle}
  barButtonIconStyle={styles.barButtonIconStyle}>

  
              <Scene key="user" hideNavBar>
                  <Scene initial back key="menuBar" showLabel={false} >            
                    <Scene key="UserDashboard" component={UserDashboard} title="User Town"  />
                    <Scene key="UserLocation" component={UserLocation} title="UserLocation" hideNavBar/>        
                    <Scene key="createFeed" component={createFeed} title="Create a new Feed" />        
                    <Scene key="AddUser" component={AddUser} title="Create a new User" />        
                    <Scene key="createFeedForm" component={createFeedForm} title="Create a new Feed" />        
                  </Scene>    
                  <Scene key="signup" component={Signup} title="Signup" hideNavBar />
                  <Scene key="login" component={Login} title="Login" hideNavBar /> 
              </Scene>    
        
              

      </Router>




  );
};
const styles = StyleSheet.create({
  navBar: {
    backgroundColor: "#44237c"

  },
  navBarTitle: {
    color: "#FFFFFF",
    fontSize:20
  },
  barButtonTextStyle: {
    color: "#FFFFFF"
  },
  tabBarStyle: {
    backgroundColor: "#eee"
  },
  barButtonIconStyle: {
    tintColor: "rgb(255,255,255)"
  }
});
export default Route;
