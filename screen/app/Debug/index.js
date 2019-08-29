import React from 'react';
import {
  View
} from 'react-native';
import * as SecureStore from 'expo-secure-store';

// Local Import
import S from './style';
import GeolocationService from '../../../service/GeolocationService';
import Button from '../../../components/Button';
import {
  randomiseUser, 
  generateUser, 
  clearUser,
  logoutJade,
} from '../../../service/Debug';

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
            label="JADE !!!!!"
            onPress={() => logoutJade()}
          />

          <Button
            label="Randomize"
            onPress={() => randomiseUser()}
          />

          <Button
            label="Clear"
            onPress={() => clearUser()}
          />

          <Button
            label="+1 user"
            onPress={() => generateUser(1)}
          />

          <Button
            label="+10 users"
            onPress={() => generateUser(10)}
          />

          <Button
            label="+50 users"
            onPress={() => generateUser(50)}
          />

        </View>

      </View>
    )
  }
}

// Export
export default SettingScreen;