import React from 'react';
// import {SecureStore} from 'expo';

// Local Import
import LoadingScreen from '../../components/Loading';

class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.isLogin();
    }

    isLogin = async() => {
        // const token = await SecureStore.getItemAsync('eToken');
        // const isLogin = await UserService.verify(token);
        const debugLog = false;
        this.props.navigation.navigate(debugLog ? 'App' : 'Auth');
    }

    render() {
        return(
            <LoadingScreen />
        )
    }
}

// Export
export default Loading;