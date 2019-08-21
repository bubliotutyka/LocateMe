import { 
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

// Local Import
import SnapsBoxScreen from '../../../screen/app/Map';

const Button = createAppContainer(
    createStackNavigator(
        {
            Example: {
                screen: SnapsBoxScreen,
                navigationOptions: {
                    title: 'Map',
                }
            },
        }
    )
);

// Export
export default Button;