import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import UserSearchScreen from '../screens/UserSearchScreen.js';
import RepoCommitsScreen from '../screens/RepoCommitsScreen.js';


const Navigator = createStackNavigator({
        UserSearch: UserSearchScreen,
        RepoCommits: RepoCommitsScreen,
    },
    {
    initialRouteName: 'UserSearch'
    });

    export default createAppContainer(Navigator);