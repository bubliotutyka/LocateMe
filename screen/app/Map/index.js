import React from 'react';
import {
  View,
  ScrollView
} from 'react-native';

// Local Import
import S from './style';
import LoadingScreen from '../../../components/Loading';

class MapScreen extends React.Component {
  state = {
    snaps: [],
    isReady: false,
  }

  componentDidMount = async () => {
    this.setState({
      snaps: [],
      isReady: true,
    });
  }

  handleSnapPress = (id) => {
    
  }

  render() {
    const {snaps, isReady} = this.state;

    if (!isReady) {
      return (
        <LoadingScreen />
      )
    }

    return(
      <View style={S.container}>
        <ScrollView style={S.scrollView}>
          
        </ScrollView>
      </View>
    )
  }
}

// Export
export default MapScreen;