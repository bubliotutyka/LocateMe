import { 
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';
import SettingsScreen from '../../../components/view/app/settings';

export default createAppContainer(
    createStackNavigator(
        {
            Example: {
                screen: SettingsScreen,
                navigationOptions: {
                    title: 'Settings',
                }
            },
        }
    )
);