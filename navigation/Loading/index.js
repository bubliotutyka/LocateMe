import React from 'react';
import * as SecureStore from 'expo-secure-store';

// Local Import
import LoadingScreen from '../../components/Loading';

class Loading extends React.Component {
    componentDidMount = async () => {
        const token = await SecureStore.getItemAsync('eToken');
        console.log('====================================');
        console.log('token:', token);
        console.log('====================================');
        this.props.navigation.navigate(token ? 'App' : 'Auth');
    }

    render() {
        return(
            <LoadingScreen />
        )
    }
}

// Export
export default Loading;