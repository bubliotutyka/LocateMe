import React from 'react';
import { StyleSheet, View } from 'react-native';

const S = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: '#fff',
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