import React from 'react';
import {
  View,
} from 'react-native';

// Local Import
import S from './style';
import Checkbox from '../../components/CheckBox';

class ContactCard extends React.Component {
  render() {
    const {onPress} = this.props;
    const {phoneNumber, checked} = this.props.user
    
    return(
      <View style={S.container}>
        <Checkbox 
            label={phoneNumber}
            checked={checked}
            onPress={onPress}
        />
      </View>
    )
  }
}

// Export
export default ContactCard;