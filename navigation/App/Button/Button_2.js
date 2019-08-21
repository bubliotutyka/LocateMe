import { 
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

// Local Import
import Style from './style';
import LoadingScreen from '../../../components/Loading';

const Button =  createAppContainer(
    createStackNavigator(
        {
            Example: {
                screen: LoadingScreen,
                navigationOptions: {
                    title: 'Example',
                    ...Style,
                }
            },
        }
    )
);

// Export
export default Button;