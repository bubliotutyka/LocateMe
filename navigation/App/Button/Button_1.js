import { 
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

// Local Import
import Style from './style';
import SnapsBoxScreen from '../../../screen/app/Map';

const Button = createAppContainer(
    createStackNavigator(
        {
            Example: {
                screen: SnapsBoxScreen,
                navigationOptions: {
                    title: 'Map',
                    ...Style,
                }
            },
        }
    )
);

// Export
export default Button;