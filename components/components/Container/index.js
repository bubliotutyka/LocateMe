import React from 'react';
import { StyleSheet, View } from 'react-native';
import Color from '../../../styles/color';

const S = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: Color.lightGrey,
        alignItems: 'center',
    },
});

export default class Container extends React.Component {
    render() {
        return (
            <View style={S.container}>
                {this.props.children}
            </View>
        );
    }
}