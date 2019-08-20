import { 
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';
import SnapsBoxScreen from '../../../components/view/app/snapsBox';

export default createAppContainer(
    createStackNavigator(
        {
            Example: {
                screen: SnapsBoxScreen,
                navigationOptions: {
                    title: 'Snaps Box',
                }
            },
        }
    )
);