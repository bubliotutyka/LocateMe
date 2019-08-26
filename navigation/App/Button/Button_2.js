import { 
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

// Local Import
import Style from './style';
import ContactScreen from '../../../screen/app/Contact';

const Button =  createAppContainer(
    createStackNavigator(
        {
            Example: {
                screen: ContactScreen,
                navigationOptions: {
                    title: 'Contact',
                    ...Style,
                }
            },
        }
    )
);

// Export
export default Button;