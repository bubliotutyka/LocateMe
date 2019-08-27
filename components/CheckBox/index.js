import React from 'react';
import { 
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import CustomIcons from 'react-native-vector-icons/FontAwesome';

// Local Import
import S from './style';
import Color from '../../styles/Color';

class Button extends React.Component {
    render() {
      const {onPress, label, checked} = this.props;

      return (
        <View style={S.container}>
          <TouchableOpacity
            style={S.checkboxContainer}
            onPress={onPress}
          >
            <Text style={S.text}>{label}</Text>
            <View style={S.checkbox}>
              {checked && <CustomIcons name="check" size={20} color={Color.darkOrange} />}
            </View>
          </TouchableOpacity>
        </View>
      );
    }
}

// Export
export default Button;