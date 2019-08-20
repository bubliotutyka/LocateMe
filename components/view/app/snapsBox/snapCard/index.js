import React from 'react';
import {View, Text} from 'react-native';
import S from './style';

export default class SnapCard extends React.Component {
  render() {
    const {_id, from} = this.props.data;

    return(
      <View style={S.container} onPress={this.props.onPress}>
        <Text>{from}</Text>
      </View>
    )
  }
}