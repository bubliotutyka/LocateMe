import React from 'react';
import {
  Platform,
} from 'react-native';
import * as SecureStore from 'expo-secure-store';

// Local Import
import GeolocationService from '../../service/GeolocationService';
import LoadingScreen from '../../components/Loading';

class Loading extends React.Component {
  state = {
    error: "",
  }

  componentDidMount = async () => {
    let isLogin = false;
    const eToken = await SecureStore.getItemAsync('eToken');
    const location = await GeolocationService.getPos();

    if (!location.error) {
      const userConnect = await GeolocationService.update({
        id: eToken,
        lat: location.latitude,
        lng: location.longitude,
      });

      if (userConnect._id) isLogin = true;
    }
    
    console.log('====================================');
    console.log(`User connect on "${Platform.OS}"`);
    console.log('eToken:', eToken);
    console.log(`Status: ${isLogin ? 'connect' : 'disconnect'}`);
    console.log('====================================');
    
    this.props.navigation.navigate(isLogin ? 'App' : 'Auth');
  }

  render() {
    return(
      <LoadingScreen error={this.state.error}/>
    )
  }
}

// Export
export default Loading;