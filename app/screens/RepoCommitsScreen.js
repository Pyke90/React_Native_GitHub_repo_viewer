import React from 'react';
import { Input, Button, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { RenderCommits } from '../components/RenderCommits'; 

const repoCommits = (props) => {

    return (
        <>

        <RenderCommits
        commits = {props.commits}
        />
              
        </>
        
    );
}

const mapStateToProps = (state) => {
    console.log("state logged", state)
    return {
    commits: state.commitsReducer.commits,
    };
    
};

export default connect(mapStateToProps)(repoCommits);