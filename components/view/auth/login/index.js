import React from 'react';
import {View, Button, Text} from 'react-native';
import {SecureStore} from 'expo';
import S from './style';
import Color from '../../../../styles/color';
import Container from '../../../components/Container';
import Input from '../../../components/input';

export default class LoginScreen extends React.Component {
  state = {
    email: "test@test.fr",
    password: "test",
    error: "",
  }

  handleButton = async() => {
    
  }

  handleChange = (text, name) => {
    this.setState({[name]: text});
  }

  render() {
    const {email, password, error} = this.state;

    return(
      <Container>
        <View style={S.spaceTop}/>

        <View style={S.container}>
          <Input 
            containerStyle={{width: "80%", marginBottom: 10}}
            placeholder="Email"
            onChangeText={(text) => this.handleChange(text, "email")}
            keyboardType="email-address"
            value={email}
          />

          <Input 
            containerStyle={{width: "80%", marginBottom: 20}}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => this.handleChange(text, "password")}
            value={password}
          />

          <Button 
            title="sign in"
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