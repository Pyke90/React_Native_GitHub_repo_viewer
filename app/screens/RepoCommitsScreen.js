import React from 'react';
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

    return {
    commits: state.commitsReducer.commits,
    };
}

export default connect(mapStateToProps)(repoCommits);