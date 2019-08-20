import React from 'react';
import {View, Button, Image} from 'react-native';
import {SecureStore} from 'expo';
// import geolocation from 'react-native-geolocation-service';

// Local Import
import S from './style';
import Color from '../../../../styles/color';
import Container from '../../../components/Container';
import Input from '../../../components/input';

export default class LoginScreen extends React.Component {
  state = {
    phone: "642129037",
    phoneError: "",
  }

  handleButton = async() => {
    const REGEX9 = /^[6-7]{1}[0-9]{8}$/si;
    const REGEX10 = /^[0]{1}[6-7]{1}[0-9]{8}$/si;
    const {phone} = this.state;

    const authorization = true //geolocation.requestAuthorization();
    // const currentPos = geolocation.getCurrentPosition(geo_success, [geo_error], [geo_options]);

    if (phone.match(REGEX9) || phone.match(REGEX10)) {
      // this.setState({
      //   phoneError: "",
      //   phone: "",
      // });
    } else if (!authorization) {
      this.setState({
        phoneError: "Geolocation needed",
      });
    } else {
      this.setState({
        phoneError: "Please enter valid number",
      });
    }
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
            keyboardType="numeric"
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