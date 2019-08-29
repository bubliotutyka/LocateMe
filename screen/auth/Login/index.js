import React from 'react';
import {
  View,
  ScrollView,
  Image,
} from 'react-native';
import * as SecureStore from 'expo-secure-store';

// Local Import
import S from './style';
import GeolocationService from '../../../service/GeolocationService';
import Loading from '../../../components/Loading';
import Container from '../../../components/Container';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

class LoginScreen extends React.Component {
  state = {
    phone: "",
    error: "",
    isLoading: false,
  }

  handleButton = async() => {
    const REGEX9 = /^[6-7]{1}[0-9]{8}$/si;
    const REGEX10 = /^[0]{1}[6-7]{1}[0-9]{8}$/si;
    let {phone} = this.state;

    if (phone.match(REGEX9) || phone.match(REGEX10)) {
      await this.setState({isLoading: true});
      const location = await GeolocationService.getPos();
      
      if (phone.match(REGEX10)) {
        phone = phone.substring(1);
      }

      if (location.error) {
        this.setState({
          error: location.error,
          isLoading: false,
        });
      } else {
        const user = await GeolocationService.login({
          phoneNumber: `+33${phone}`,
          lat: location.latitude,
          lng: location.longitude,
        });

        if (user._id) {
          await SecureStore.setItemAsync('eToken', user._id);
          this.props.navigation.navigate("AuthLoading");
        } else {
          this.setState({
            error: "Phone number already in use",
            isLoading: false,
          });
        }
      }
    } else {
      this.setState({
        error: "Please enter valid number (0642424242)",
        isLoading: false,
      });
    }
  }

  handleChange = (text, name) => {
    this.setState({[name]: text});
  }

  render() {
    const {phone, error, isLoading} = this.state;
    let maxLength = 10;

    if (phone[0] !== "0")
      maxLength = 9;

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
              error={error}
              maxLength={maxLength}
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