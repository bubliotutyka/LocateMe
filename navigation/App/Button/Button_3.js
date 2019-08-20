import { 
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';
import LoadingScreen from '../../../components/LoadingScreen';

export default createAppContainer(
    createStackNavigator(
        {
            Example: {
                screen: LoadingScreen,
                navigationOptions: {
                    title: 'Page 3',
                }
            },
        }
    )
);