import { 
    createAppContainer,
    createSwitchNavigator,
} from 'react-navigation';
import LoadingScreen from './Loading';
import AuthNavigator from './Auth';
import AppNavigator from './App';

export default createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: LoadingScreen,
            App: AppNavigator,
            Auth: AuthNavigator,
        },
        {
            initialRouteName: 'AuthLoading',
        }
    )
);