import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Color from '../../../styles/color';

class Input extends React.Component {
    render() {
        const {
          secureTextEntry, placeholder, editable, maxLength, onChangeText, label,
          containerStyle, keyboardType, value, inputStyle,
        } = this.props;

        const S = StyleSheet.create({
          container: {
              width: 200,
              height: 40,
              backgroundColor: "#fff",
              borderColor: Color.darkGrey,
              borderWidth: 1,
              borderRadius: 3,
              justifyContent: 'center',
              // alignItems: 'center',
              ...containerStyle,
          },

          input: {
            fontSize: 20,
            marginLeft: 15,
            marginRight: 15,
            color: Color.darkGrey,
            ...inputStyle,
          },
        });

        return (
          <View style={S.container}>
            <TextInput 
              style={S.input}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry || false}
              // editable={editable || false}
              maxLength={maxLength || 999999}
              onChangeText={onChangeText}
              keyboardType={keyboardType || "default"}
              value={value}
            />
          </View>
        );
    }
}

export default Input;