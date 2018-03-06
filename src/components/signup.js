import React,{ Component } from 'react';
import { Text, View, ScrollView, Button, TextInput } from 'react-native';
import {Actions} from "react-native-router-flux"; // 4.0.0-beta.28
import { connect } from 'react-redux'; // 5.0.7
import { signupAction } from '../actions'

import "redux"; // 3.7.2

class Signup extends React.Component {
  constructor(props){
    super(props)
    this.state = {
   firstname: '',
   lastname: '',
   email: '',
   mobile: '',
   password: ''
   }
  }


  userSignUp (email,pass) {
    this.props.signupAction(email,pass);
}
componentWillReceiveProps(Props){
    if(Props.users){
      alert("signup successfully")
    //   Actions.listing()
    }
    else{
      alert("invalid user")
    }
  }
 render() {
   
  
   return (
    <ScrollView style={{padding: 20}}>
    <Text style={{fontSize: 27}}></Text>
    <TextInput 
        placeholder='First Name'
        autoCapitalize='none'
        autoCorrect={false} 
        autoFocus={true} 
        keyboardType='default'
        value={this.state.firstname} 
        onChangeText={(firstname) => this.setState({ firstname: firstname })} />
        <TextInput 
        placeholder='Last Name'
        autoCapitalize='none'
        autoCorrect={false} 
        autoFocus={true} 
        keyboardType='default'
        value={this.state.lastname} 
        onChangeText={(lastname) => this.setState({ lastname: lastname })} />
        <TextInput 
        placeholder='Email'
        autoCapitalize='none'
        autoCorrect={false} 
        autoFocus={true} 
        keyboardType='email-address'
        value={this.state.email} 
        onChangeText={(email) => this.setState({ email: email })} />
        <TextInput 
        placeholder='Mobile'
        autoCapitalize='none'
        autoCorrect={false} 
        autoFocus={true} 
        keyboardType='phone-pad'
        value={this.state.mobile} 
        onChangeText={(mobile) => this.setState({ mobile: mobile })} />
    <TextInput 
        placeholder='Password'
        autoCapitalize='none'
        autoCorrect={false} 
        secureTextEntry={true} 
        value={this.state.password} 
        onChangeText={(password) => this.setState({ password: password })} />
    <View style={{margin: 7}}/>
    <Button onPress={(e) => this.userSignUp(
        this.state.firstname,
        this.state.firstname,
        this.state.lastname,
        this.state.email,
        this.state.mobile,
        this.state.password)} title='SignUp'/>
    <Text style={{fontSize: 16, color: 'blue'}} onPress={(e) => this.userSignUp(
        this.state.firstname,
        this.state.firstname,
        this.state.lastname,
        this.state.email,
        this.state.mobile,
        this.state.password)}></Text>
    <Text style={{fontSize: 13, color: 'green'}} onPress={()=> {Actions.login()}} > Already Have an Account? Login Here</Text>
</ScrollView>
   );
 }
}

const mapStateToProps = state =>({

    users: state.users.signup? state.users.signup:null
  })

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps,{signupAction})(Signup)