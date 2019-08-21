import { 
    createAppContainer,
    createSwitchNavigator,
} from 'react-navigation';

// Local Import
import LoadingScreen from './Loading';
import AuthNavigator from './Auth';
import AppNavigator from './App';

const navigator = createAppContainer(
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

export default navigator;