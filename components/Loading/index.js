import React from 'react';
import { 
    ActivityIndicator,
    StyleSheet,
    View,
} from 'react-native';

// Local Import
import Color from '../../styles/Color';

const S = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.lightGrey,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

class Loading extends React.Component {
    render() {
        return(
            <View style={S.container}>
                <ActivityIndicator 
                    size="large"
                    color={Color.darkOrange}
                />
            </View>
        )
    }
}

// Export
export default Loading;