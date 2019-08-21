import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

// Local Import
import Color from '../../styles/Color';

class Input extends React.Component {
  getLabel = () => {
    return (
      <Text>{this.props.label}</Text>
    );
  }

  getError = () => {
    const S = StyleSheet.create({
      text: {
        color: Color.red,
      },
    });

    return (
      <Text style={S.text}>{this.props.error}</Text>
    );
  }

  render() {
      const {
        secureTextEntry, placeholder, editable, maxLength, onChangeText, label,
        containerStyle, keyboardType, value, inputStyle, error,
      } = this.props;

      const S = StyleSheet.create({
        container: {
            width: 200,
            height: 50,
            justifyContent: 'center',
            ...containerStyle,
        },

        input: {
          width: '100%',
          fontSize: 20,
          color: Color.darkGrey,
          ...inputStyle,
        },

        inputContainer: {
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 15,
          paddingRight: 15,
          paddingBottom: 5,
          borderColor: Color.darkOrange,
          borderBottomWidth: 3,
          flexDirection: 'row',
          width: '100%',
        },

        text: {
          fontSize: 20,
        },
      });

      return (
        <View style={S.container}>
          {label && this.getLabel()}
          <View style={S.inputContainer}>
            <Text style={S.text}>+33 </Text>
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
          {error !== "" && this.getError()}
        </View>
      );
    }
}

// Export
export default Input;