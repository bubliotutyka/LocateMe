import React from 'react';
import { 
    ActivityIndicator,
    AsyncStorage,
    StyleSheet,
    View,
} from 'react-native';

export default class LoadingScreen extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <ActivityIndicator 
                    size="large"
                    color="#00a8ff"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});