import React, { useState } from 'react';
import { Input, Button } from 'react-native-elements';
import { connect } from 'react-redux';
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
    return {
    reposList: state.reposReducer.repos,
    };
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        reduxFetchReposRequest: (i) => dispatch(fetchReposRequest(i)),
        reduxFetchCommitsRequest: (user, repo) => dispatch(fetchCommitsRequest(user, repo))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(userSearch);
