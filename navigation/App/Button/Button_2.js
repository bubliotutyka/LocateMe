import { 
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

// Local Import
import LoadingScreen from '../../../components/Loading';

const Button =  createAppContainer(
    createStackNavigator(
        {
            Example: {
                screen: LoadingScreen,
                navigationOptions: {
                    title: 'Example',
                }
            },
        }
    )
);

// Export
export default Button;