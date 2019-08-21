import React from 'react';
import {View, Button} from 'react-native';
// import {SecureStore} from 'expo';

// Local Import
import Color from '../../../styles/Color';
import S from './style';

class SettingScreen extends React.Component {
  handleLogout = async () => {
    // await SecureStore.setItemAsync('eToken', 'null');
    // this.props.navigation.navigate("AuthLoading");
  }

  render() {
    return(
      <View>
        <Button 
          title="Logout"
          onPress={this.handleLogout}
          color={Color.lightBlue}
          style={S.logoutBtn}
        />
      </View>
    )
  }
}

// Export
export default SettingScreen;