import React from 'react';
import {
  View,
  ScrollView,
  Text,
} from 'react-native';
import {withNavigationFocus} from 'react-navigation';

// Local Import
import S from './style';
import GeolocationService from '../../../service/GeolocationService';
import ContactCard from '../../../components/ContactCard';

class ContactScreen extends React.Component {
  getUsersInArea = async () => {
    return await GeolocationService.getUsersInArea();
  }

  render = async () => {
    const {isFocused} = this.props;
    let usersInArea = [];

    if (isFocused) {
      // usersInArea = await this.getUsersInArea();
    }

    return(
      <View style={S.container}>

        <ScrollView style={S.logoutBtn}>
          {
            // usersInArea.map((user) => <ContactCard user={user}/>)
          }
        </ScrollView>

      </View>
    )
  }
}

// Export
export default withNavigationFocus(ContactScreen);