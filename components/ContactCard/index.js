import React from 'react';
import {
  View,
  Text,
} from 'react-native';

// Local Import
import S from './style';

class ContactCard extends React.Component {
  render() {
    const {_id} = this.props.user

    return(
      <View style={S.container}>

        <Text>{_id}</Text>

      </View>
    )
  }
}

// Export
export default ContactCard;