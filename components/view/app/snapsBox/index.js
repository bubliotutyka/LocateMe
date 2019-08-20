import React from 'react';
import {View, ScrollView} from 'react-native';
import {SecureStore} from 'expo';
import LoadingScreen from '../../../LoadingScreen';
import S from './style';
import SnapCard from './snapCard';

export default class SnapBoxScreen extends React.Component {
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
          {
            snaps.map((snap) => (
              <SnapCard 
                data={snap} 
                key={snap._id} 
                onPress={() => this.handleSnapPress(snap._id)}
              />
            ))
          }
        </ScrollView>
      </View>
    )
  }
}