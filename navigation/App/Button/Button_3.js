import { 
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

// Local Import
import SettingsScreen from '../../../screen/app/Settings';

const Button = createAppContainer(
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

// Export
export default Button;