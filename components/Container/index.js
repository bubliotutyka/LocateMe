import React from 'react';
import { StyleSheet, View } from 'react-native';

// Local Import
import Color from '../../styles/Color';

const S = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: Color.lightGrey,
        alignItems: 'center',
    },
});

class Container extends React.Component {
    render() {
        return (
            <View style={S.container}>
                {this.props.children}
            </View>
        );
    }
}

// Export
export default Container;