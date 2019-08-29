import { 
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';

// Local Import
import Style from './style';
import SnapsBoxScreen from '../../../screen/app/Map';
import AddContactScreen from '../../../screen/app/AddContact';

const Button = createAppContainer(
    createStackNavigator(
        {
            Map: {
                screen: SnapsBoxScreen,
                navigationOptions: {
                    title: 'Map',
                    ...Style,
                }
            },
            AddContact: {
                screen: AddContactScreen,
                navigationOptions: {
                    title: 'Add Contact',
                    ...Style,
                }
            }
        }
    )
);

// Export
export default Button;