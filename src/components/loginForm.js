// import React, { Component } from 'react';
// import { connect } from 'react-redux'; // 5.0.7
// import { Text, View, ScrollView, Button, TextInput, Image } from 'react-native';

// import "redux"; // 4.0.0-beta.2
// import { Actions } from 'react-native-router-flux';





// const submit = () =>{
        
// }
// class Login extends Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//             email: '',
//             password: ''
//         };
//     }

//     userLogin (e) {
//         alert(JSON.stringify(this.state));

//     }

//     render () {

//         return (

//             <ScrollView style={{padding: 20}}>
//                 <Text style={{fontSize: 27}}>{this.state.route}</Text>
//                 <TextInput 
//                     placeholder='Email'
//                     autoCapitalize='none'
//                     autoCorrect={false} 
//                     autoFocus={true} 
//                     keyboardType='email-address'
//                     value={this.state.username} 
//                     onChangeText={(text) => this.setState({ email: text })} />
//                 <TextInput 
//                     placeholder='Password'
//                     autoCapitalize='none'
//                     autoCorrect={false} 
//                     secureTextEntry={true} 
//                     value={this.state.password} 
//                     onChangeText={(text) => this.setState({ password: text })} />
//                 <View style={{margin: 7}}/>
//                 <Button onPress={(e) => this.userLogin(e)} title='Login'/>
//                 <Text style={{fontSize: 16, color: 'blue'}} onPress={(e) => this.userLogin(e)}></Text>
//                 <Text style={{fontSize: 13, color: 'green'}} onPress={()=> {Actions.signup()}} > Sign up here!</Text>
//             </ScrollView>

              
//           )
//     }
// }


// const mapStateToProps = (state) => {
//     return {

//     };
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
        
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Login);