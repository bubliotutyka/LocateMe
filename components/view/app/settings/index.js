import React from 'react';
import {View, Button} from 'react-native';
// import {SecureStore} from 'expo';
import Color from '../../../../styles/color';
import S from './style';

export default class LogoutScreen extends React.Component {
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