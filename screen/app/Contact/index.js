import React from 'react';
import {
  View,
  ScrollView,
  Text,
} from 'react-native';
import {withNavigationFocus} from 'react-navigation';
import * as SMS from 'expo-sms';

// Local Import
import S from './style';
import GeolocationService from '../../../service/GeolocationService';
import ContactCard from '../../../components/ContactCard';
import Checkbox from '../../../components/CheckBox';
import Loading from '../../../components/Loading';
import Button from '../../../components/Button';

class ContactScreen extends React.Component {
  state = {
    usersInArea: [],
    selectAll: false,
    isReady: false,
  }

  componentDidMount = async () => {
    this.getUsersInArea();
  }

  componentWillReceiveProps = async (nextProps) => {
    if (nextProps.isFocused) {
      this.getUsersInArea();
    } else if (!nextProps.isFocused) {
      this.setState({isReady: false});
    }
  }

  getUsersInArea = async () => {
    usersInArea = await GeolocationService.getUsersInArea();
    this.setState({
      usersInArea,
      isReady: true
    });
  }

  handleChangeCheckbox = (id) => {
    const {usersInArea} = this.state;

    const newUsersInArea = usersInArea.map((user) => {
      if (user._id === id) {
        return {
          ...user,
          checked: !user.checked,
        }
      } else {
        return user;
      }
    });
    this.setState({usersInArea: newUsersInArea});
  }

  handleSelectALl = () => {
    const {selectAll, usersInArea} = this.state;
    let newUsersInArea = [];

    if (selectAll) {
      newUsersInArea = usersInArea.map((user) => {
        return {
          ...user,
          checked: false,
        }
      });
    } else {
      newUsersInArea = usersInArea.map((user) => {
        return {
          ...user,
          checked: true,
        }
      });
    }
    

    this.setState({
      usersInArea: newUsersInArea,
      selectAll: !selectAll,
    });
  }

  getCheckedNumber = () => {
    const {usersInArea} = this.state;
    const numberArray = [];

    for (let i = 0; i < usersInArea.length; i++) {
      if (usersInArea[i].checked) {
        numberArray.push(usersInArea[i].phoneNumber);
      }
    }

    return numberArray;
  }

  handleSend = async () => {
    const phoneNumber = this.getCheckedNumber();

    if (await SMS.isAvailableAsync()) {
      const { result } = await SMS.sendSMSAsync(
        phoneNumber,
        'Ceci est un message automatique'
      );
    }

  }

  render = () => {
    const {usersInArea, selectAll, isReady} = this.state;
    
    return(
      <View style={S.container}>

        <View style={S.selectAll}>
          <Checkbox
            label="Select All"
            checked={selectAll}
            onPress={this.handleSelectALl}
          />
        </View>

        {
          isReady
            ? (
            <ScrollView style={S.userContainer}>
              {
                usersInArea.map((user) => (<ContactCard 
                  key={user._id}
                  user={user}
                  onPress={() => this.handleChangeCheckbox(user._id)}
                />))
              }
            </ScrollView>
            )
            : (
              <Loading />
            )
        }
        
        <View style={S.send}>
          <Button
            label="Send Message"
            onPress={this.handleSend}
          />
        </View>

      </View>
    )
  }
}

// Export
export default withNavigationFocus(ContactScreen);