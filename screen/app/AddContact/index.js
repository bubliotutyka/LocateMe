import React from 'react';
import {
  View,
  ScrollView,
  Text,
} from 'react-native';
import * as Contacts from 'expo-contacts';

// Local Import
import S from './style';
import Loading from '../../../components/Loading';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

class AddContactScreen extends React.Component {
  state = {
    isReady: true,
    phoneNumber: "",
    lastname: "",
    firstname: "",
    phoneNumberError: null,
    lastnameError: null,
    firstnameError: null,
  }

  componentDidMount = async () => {
    const {phoneNumber} = this.props.navigation.state.params;

    this.setState({
      phoneNumber,
    });
  }

  getForm = () => {
    const {
      phoneNumber, lastname, firstname, lastnameError, firstnameError, 
      phoneNumberError,
    } = this.state;

    return (
      <>
        <Input 
          containerStyle={{width: "80%", marginTop: 60, marginBottom: 30}}
          placeholder="Phone Number"
          label="Phone number"
          editable={false}
          onChangeText={(text) => this.handleChange(text, "phoneNumber")}
          value={phoneNumber}
          error={phoneNumberError}
        />

        <Input 
          containerStyle={{width: "80%", marginBottom: 30}}
          placeholder="Lastname"
          label="Lastname"
          onChangeText={(text) => this.handleChange(text, "lastname")}
          value={lastname}
          error={lastnameError}
        />

        <Input 
          containerStyle={{width: "80%", marginBottom: 30}}
          placeholder="Firstname"
          label="Firstname"
          onChangeText={(text) => this.handleChange(text, "firstname")}
          value={firstname}
          error={firstnameError}
        />

        <Button
            label="Add"
            onPress={this.addContact}
        />
      </>
    )
  }

  handleChange = (text, name) => {
    this.setState({[name]: text});
  }

  validator = () => {
    const {lastname, firstname, phoneNumber} = this.state;

    const error = "Empty field"
    const phoneNumberError = phoneNumber ? null : error;
    const lastnameError = lastname ? null : error;
    const firstnameError = firstname ? null : error;

    this.setState({
      phoneNumberError,
      lastnameError,
      firstnameError,
    });

    if (lastname && firstname && phoneNumber) return true;
    return false;
  }

  addContact = async () => {
    const {phoneNumber, lastname, firstname} = this.state;

    if (this.validator()) {
      const contact = {
        [Contacts.Fields.PhoneNumbers]: [{
          label: 'mobile', number: phoneNumber
        }],
        [Contacts.Fields.FirstName]: firstname,
        [Contacts.Fields.LastName]: lastname,
      };

      const contactId = await Contacts.addContactAsync(contact);

      if (contactId) {
        this.props.navigation.navigate("Map");
      }
    }
  }

  render = () => {
    const {isReady} = this.state;
    
    return(
      <View style={S.container}>
        {
          isReady
            ? this.getForm()
            : (<Loading />)
        }
      </View>
    )
  }
}

// Export
export default AddContactScreen;