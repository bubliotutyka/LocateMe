import { 
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

// Local Import
import Style from './style';
import SettingsScreen from '../../../screen/app/Settings';
import DebugScreen from '../../../screen/app/Debug';

const Button = createAppContainer(
    createStackNavigator(
        {
            Settings: {
                screen: SettingsScreen,
                navigationOptions: {
                    title: 'Settings',
                    ...Style,
                }
            },
            Debug: {
                screen: DebugScreen,
                navigationOptions: {
                    title: 'Debug',
                    ...Style,
                }
            }
        }
    )
);

// Export
export default Button;