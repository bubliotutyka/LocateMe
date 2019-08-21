import React from 'react';
import { 
    createAppContainer,
    createSwitchNavigator,
} from 'react-navigation';

// Local Import
import LoginView from '../../screen/auth/Login';

const AuthNavigator = createAppContainer(
    createSwitchNavigator(
        {
            Login: LoginView,
        },
    )
);

// Export
export default AuthNavigator;