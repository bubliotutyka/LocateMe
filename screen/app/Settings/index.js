import React from 'react';
import {
  View
} from 'react-native';
import {SecureStore} from 'expo';

// Local Import
import S from './style';
import GeolocationService from '../../../service/GeolocationService';
import Button from '../../../components/Button';

class SettingScreen extends React.Component {
  handleLogout = async () => {
    const id = await SecureStore.getItemAsync('eToken');
    const logout = await GeolocationService.logout(id);

    if (logout._id) {
      await SecureStore.setItemAsync('eToken', '');
      this.props.navigation.navigate("AuthLoading");
    }
  }

  render() {
    return(
      <View style={S.container}>

        <View style={S.logoutBtn}>
          <Button
            label="Logout"
            onPress={this.handleLogout}
          />
        </View>

      </View>
    )
  }
}

// Export
export default SettingScreen;