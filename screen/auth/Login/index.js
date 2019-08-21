import React from 'react';
import {
  View,
  ScrollView,
  Image,
} from 'react-native';
import {SecureStore} from 'expo';
// import Geolocation from 'react-native-geolocation-service';

// Local Import
import S from './style';
import GeolocationService from '../../../service/GeolocationService';
import Container from '../../../components/Container';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

class LoginScreen extends React.Component {
  state = {
    phone: "642129037",
    phoneError: "",
  }

  handleButton = async() => {
    const REGEX9 = /^[6-7]{1}[0-9]{8}$/si;
    const REGEX10 = /^[0]{1}[6-7]{1}[0-9]{8}$/si;
    let {phone} = this.state;

    if (phone.match(REGEX9) || phone.match(REGEX10)) {
      if (phone.match(REGEX10))
        phone = phone.substring(1);

      navigator.geolocation.getCurrentPosition(async (pos) => {
        const {latitude, longitude} = pos.coords;
        const user = await GeolocationService.login({
          phoneNumber: `+33${phone}`,
          lat: latitude,
          lng: longitude,
        });

        console.log('====================================');
        console.log(user);
        console.log('====================================');

        await SecureStore.setItemAsync('eToken', user._id);
        this.props.navigation.navigate("App");
      }, (error) => {
        console.log(error);
      }, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      });
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
        <ScrollView 
          style={S.scrollContainer}
          contentContainerStyle={S.scrollContent}
        >

          <View style={S.spaceTop}/>

          <Image 
            source={require('../../../assets/icon_pin.png')}
            style={S.image}
          />

          <View style={S.container}>
            <Input 
              containerStyle={{width: "80%", marginBottom: 30}}
              placeholder="Phone Number"
              label="Phone number"
              onChangeText={(text) => this.handleChange(text, "phone")}
              keyboardType="numeric"
              value={phone}
              error={phoneError}
            />

            <Button
              label="Let's Go"
              onPress={this.handleButton}
            />
          </View>
          
          <View style={S.spaceBottom}/>

        </ScrollView>
      </Container>
    )
  }
}

// Export
export default LoginScreen;