import React from 'react';
import { 
    createAppContainer,
    createSwitchNavigator,
} from 'react-navigation';
import LoginView from '../../components/view/auth/login';

const AuthNavigator = createAppContainer(
    createSwitchNavigator(
        {
            Login: LoginView,
        },
    )
);

export default AuthNavigator;