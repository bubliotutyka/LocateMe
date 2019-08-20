import React from 'react';
import {View, Button, Text, Image} from 'react-native';
import {SecureStore} from 'expo';
import S from './style';
import Color from '../../../../styles/color';
import Container from '../../../components/Container';
import Input from '../../../components/input';

export default class LoginScreen extends React.Component {
  state = {
    phone: "642129037",
    phoneError: " ",
  }

  handleButton = async() => {
    
  }

  handleChange = (text, name) => {
    this.setState({[name]: text});
  }

  render() {
    const {phone, phoneError} = this.state;

    return(
      <Container>
        <View style={S.spaceTop}/>

        <Image 
          source={require('../../../../assets/icon_pin.png')}
          style={S.image}
        />

        <View style={S.container}>
          <Input 
            containerStyle={{width: "80%", marginBottom: 10}}
            placeholder="Phone Number"
            label="Phone number"
            onChangeText={(text) => this.handleChange(text, "phone")}
            keyboardType="phone-pad"
            value={phone}
            error={phoneError}
          />

          <Button 
            title="Let's Go"
            onPress={this.handleButton}
            color={Color.darkOrange}
          />
        </View>
        
        <View style={S.spaceBottom}/>
      </Container>
    )
  }
}