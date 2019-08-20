import React from 'react';
import { 
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
} from 'react-navigation';
import CustomIcons from 'react-native-vector-icons/FontAwesome';
import LoadingScreen from '../../components/LoadingScreen';
import LoginView from '../../components/view/auth/login';
import RegisterView from '../../components/view/auth/register';
import Theme from '../../styles/theme';

const theme = Theme('light');

const Login = createAppContainer(
    createStackNavigator({
        Login: {
            screen: LoginView,
            navigationOptions: {
                title: 'Login',
            }
        },
    })
);

const Register = createAppContainer(
    createStackNavigator({
        Register: {
            screen: RegisterView,
            navigationOptions: {
                title: 'Register',
            }
        },
    })
);

const AuthNavigator = createAppContainer(
    createBottomTabNavigator(
        {
            Login,
            Register,
        },
        {
            defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Login') {
                    iconName = 'user';
                } else if (routeName === 'Register') {
                    iconName = 'user-plus';
                }

                return <CustomIcons name={iconName} size={25} color={tintColor} />;
            },
            }),
            tabBarOptions: {
                activeTintColor: theme.active,
                inactiveTintColor: theme.inactive,
                showLabel: false,
                showIcon: true,
                tabStyle: {
                    backgroundColor: theme.backgroundColor,
                },
                style: {
                    borderTopColor: theme.borderColor,
                    shadowColor: theme.shadowColor,
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.8,
                    shadowRadius: 3,
                },
            },
        }
    )
);

export default AuthNavigator;