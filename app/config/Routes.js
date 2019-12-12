import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import UserSearch from '../screens/UserSearch.js';


const Routes = createStackNavigator(
    {
        UserSearch: {
            screen: UserSearch,
            navigationOptions: {

            }
        },
    },
    {
    initialRouteName: 'UserSearch'
    }
    );

    export default createAppContainer(Routes);