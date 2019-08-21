import React from 'react';
import { 
    createAppContainer,
    createBottomTabNavigator,
} from 'react-navigation';
import CustomIcons from 'react-native-vector-icons/FontAwesome';

// Local Import
import Color from '../../styles/Color';
import Button1 from './Button/Button_1';
import Button2 from './Button/Button_2';
import Button3 from './Button/Button_3';

const AppNavigator = createAppContainer(
    createBottomTabNavigator(
        {
            Button1,
            Button2,
            Button3,
        },
        {
            defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Button1') {
                    iconName = 'image';
                } else if (routeName === 'Button2') {
                    iconName = 'camera-retro';
                } else if (routeName === 'Button3') {
                    iconName = `cogs`;
                }

                return <CustomIcons name={iconName} size={25} color={tintColor} />;
            },
            }),
            tabBarOptions: {
                activeTintColor: Color.darkOrange,
                inactiveTintColor: Color.darkGrey,
                showLabel: false,
                showIcon: true,
                style: {
                    backgroundColor: Color.lightGrey,
                    ...Color.shadow,
                },
            },
        }
    )
);

// Export
export default AppNavigator;