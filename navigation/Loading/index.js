import React from 'react';
import {SecureStore} from 'expo';
import LoadingScreen from '../../components/LoadingScreen';

export default class Loading extends React.Component {
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