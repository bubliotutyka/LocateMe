import React from 'react';
import {View, Button, Text} from 'react-native';
import {SecureStore} from 'expo';
import S from './style';
import Color from '../../../../styles/color';
import Container from '../../../components/Container';
import Input from '../../../components/input';

export default class RegisterScreen extends React.Component {
  state = {
    email: "",
    username: "",
    password: "",
    cpassword: "",
    error: "",
  }

  handleButton = async() => {
    const {email, username, password, cpassword} = this.state;
    
  }

  handleChange = (text, name) => {
    this.setState({[name]: text});
  }

  render() {
    const {email, username, password, cpassword, error} = this.state;

    return(
      <Container>
        <View style={S.spaceTop}/>

        <View style={S.container}>
          <Input 
            containerStyle={{width: "80%", marginBottom: 10}}
            placeholder="Email@exemple.com"
            onChangeText={(text) => this.handleChange(text, "email")}
            keyboardType="email-address"
            value={email}
          />

          <Input 
            containerStyle={{width: "80%", marginBottom: 10}}
            placeholder="Username"
            onChangeText={(text) => this.handleChange(text, "username")}
            value={username}
          />

          <Input 
            containerStyle={{width: "80%", marginBottom: 10}}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => this.handleChange(text, "password")}
            value={password}
          />

          <Input 
            containerStyle={{width: "80%", marginBottom: 20}}
            placeholder="Confirm Password"
            secureTextEntry={true}
            onChangeText={(text) => this.handleChange(text, "cpassword")}
            value={cpassword}
          />

          <Button 
            title="register"
            onPress={this.handleButton}
            color={Color.lightBlue}
          />

          {
            error 
              ? (<Text style={S.textError}>{error}</Text>) 
              : (null)
          }
        </View>
        
        <View style={S.spaceBottom}/>
      </Container>
    )
  }
}