import React, { Component } from 'react';
import { connect } from 'react-redux'; // 5.0.7
import { Text, View, ScrollView, Button, TextInput, Image } from 'react-native';
import {loginAction} from '../actions';
import "redux"; // 4.0.0-beta.2
import { Actions } from 'react-native-router-flux';
import BackImage from './loginSignupBackground';



class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    userLogin(email,pass) {
        this.props.loginAction(email,pass);

    }


    componentWillReceiveProps(Props){
        if(Props.users){
          alert("login successfull")
          Actions.menuBar()

        }
        else{
          alert("invalid user")
        }
      }
    render () {

        return (
            <ScrollView style={{padding: 20}}>
            
                <Text style={{fontSize: 27}}></Text>
                <TextInput 
                    placeholder='Email'
                    autoCapitalize='none'
                    autoCorrect={false} 
                    autoFocus={true} 
                    keyboardType='email-address'
                    value={this.state.email} 
                    onChangeText={(text) => this.setState({ email: text })} />
                <TextInput 
                    placeholder='Password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true} 
                    value={this.state.password} 
                    onChangeText={(text) => this.setState({ password: text })} />
                <View style={{margin: 7}}/>
                <Button onPress={(e) => this.userLogin(this.state.email,this.state.password)} title='Login'/>
                <Text style={{fontSize: 16, color: 'blue'}} onPress={(e) => this.userLogin(this.state.email,this.state.password)}></Text>
                <Text style={{fontSize: 13, color: 'green'}} onPress={()=> {Actions.signup()}} > Sign up here!</Text>
            </ScrollView>

          )
    }
}


const mapStateToProps = state =>({
    users: state.users.login
  })

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps,{loginAction})(Login);