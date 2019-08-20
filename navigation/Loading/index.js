import React from 'react';
import { AsyncStorage } from 'react-native';
import LoadingScreen from '../../components/LoadingScreen';

export default class Loading extends React.Component {
    constructor(props) {
        super(props);
        this._isLogin();
    }

    _isLogin = async() => {
        // const userToken = await AsyncStorage.getItem('userToken');
        const userToken = false;
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    }

    render() {
        return(
            <LoadingScreen />
        )
    }
}