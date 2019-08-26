import React from 'react';
import { 
  View,
  Slider,
  Text,
} from 'react-native';

// Local Import
import S from './style';

class Button extends React.Component {
    render() {
      const {
        maximumValue, minimumValue, onSlidingComplete, step, onValueChange,
        minimumTrackTintColor, maximumTrackTintColor, value, thumbTintColor,
      } = this.props;

      const distance = value === 0 ? 'All' : `${value / 1000} km`

      return (
        <View style={S.container}>
          <Slider 
            style={S.slider}
            minimumValue={minimumValue}
            maximumValue={maximumValue}
            onSlidingComplete={null || onSlidingComplete}
            onValueChange={null || onValueChange}
            step={step}
            minimumTrackTintColor={minimumTrackTintColor}
            maximumTrackTintColor={maximumTrackTintColor}
            thumbTintColor={thumbTintColor}
            value={value}
          />
          <Text style={S.text}>{distance}</Text>
        </View>
      );
    }
}

// Export
export default Button;