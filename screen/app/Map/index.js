import React from 'react';
import {
  View,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import * as SecureStore from 'expo-secure-store';

// Local Import
import S from './style';
import Color from '../../../styles/Color';
import MapStyle from './MapStyle';
import GeolocationService from '../../../service/GeolocationService';
import Slider from '../../../components/Slider';


class MapScreen extends React.Component {
  state = {
    userId: null,
    sliderValue: 0,
    region: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0,
      longitudeDelta: 0,
    },
  }

  componentDidMount = async () => {
    const location = await GeolocationService.getPos();

    this.setState({
      userId: await SecureStore.getItemAsync('eToken'),
      region: {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    });
  }

  handleSliderChange = (sliderValue) => {
    this.setState({sliderValue});
  }

  render() {
    const {userId, region, sliderValue} = this.state;

    return(
      <View style={S.container}>
        <View style={S.mapContainer}>
          <MapView
            style={S.map}
            provider={PROVIDER_GOOGLE}
            customMapStyle={MapStyle}
            region={region}
          />
        </View>

        <View style={S.slider}>
          <Slider 
            minimumValue={0}
            maximumValue={500}
            onValueChange={this.handleSliderChange}
            step={10}
            minimumTrackTintColor={Color.darkOrange}
            maximumTrackTintColor={Color.darkGrey}
            thumbTintColor={Color.darkGrey}
            value={sliderValue}
          />
        </View>
      </View>
    )
  }
}

// Export
export default MapScreen;