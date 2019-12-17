import React, { useState } from 'react';
import { Input, Button, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { newInput } from '../redux/actions/InputActions';
import { fetchReposRequest, fetchCommitsRequest } from '../redux/actions/GitApiActions';
import { RenderRepos } from '../components/RenderRepos'; 


const userSearch = (props) => {

    const [input, setInput] = useState('');
    
    return (
        <>

        <Input
        title='userInput'
        placeholder='GitHub user name'
        onChangeText={text => setInput(text)}
        />

        <Button onPress={() => props.reduxFetchReposRequest(input) }
        
        title='GET USER REPOS'/>
        
        <RenderRepos
        repos = {props.reposList}
        navigation = {props.navigation}
        reduxFetchCommitsRequest = {(user, repo) => props.reduxFetchCommitsRequest (user, repo)}
        />
        
        </>
        
    );
}

const mapStateToProps = (state) => {
    console.log("state logged", state)
    return {
    userInput: state.inputReducer.userInput,
    reposList: state.reposReducer.repos,
    
    };
    
};

const mapDispatchToProps = (dispatch) => {
    return {
        reduxUserInput: (i) => dispatch(newInput(i)),
        reduxFetchReposRequest: (i) => dispatch(fetchReposRequest(i)),
        reduxFetchCommitsRequest: (user, repo) => dispatch(fetchCommitsRequest(user, repo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(userSearch);
