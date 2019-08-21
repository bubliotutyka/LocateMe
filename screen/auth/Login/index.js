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
import Loading from '../../../components/Loading';
import Container from '../../../components/Container';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

class LoginScreen extends React.Component {
  state = {
    phone: "642129037",
    phoneError: "",
    isLoading: false,
  }

  handleButton = async() => {
    const REGEX9 = /^[6-7]{1}[0-9]{8}$/si;
    const REGEX10 = /^[0]{1}[6-7]{1}[0-9]{8}$/si;
    let {phone} = this.state;

    if (phone.match(REGEX9) || phone.match(REGEX10)) {
      this.setState({isLoading: true});

      if (phone.match(REGEX10)) {
        phone = phone.substring(1);
      }

      const pos = await GeolocationService.getPos();

      if (pos) {
        const user = await GeolocationService.login({
          phoneNumber: `+33${phone}`,
          lat: pos.lat,
          lng: pos.lng,
        });

        if (user._id) {
          await SecureStore.setItemAsync('eToken', user._id);
          this.props.navigation.navigate("App");
        }
      }
    } else if (!authorization) {
      this.setState({
        phoneError: "Geolocation needed",
        isLoading: false,
      });
    } else {
      this.setState({
        phoneError: "Please enter valid number",
        isLoading: false,
      });
    }
  }

  handleChange = (text, name) => {
    this.setState({[name]: text});
  }

  render() {
    const {phone, phoneError, isLoading} = this.state;

    if (isLoading) {
      return (
        <Loading />
      )
    }

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