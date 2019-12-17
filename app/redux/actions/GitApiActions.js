import { FETCH_REPOS_REQUEST, FETCH_REPOS_FAILURE, FETCH_REPOS_SUCCESS, FETCHED_REPOS, FETCHED_COMMITS,  } from './ActionTypes';
import { getApi } from '../../components/getApi';

//{ type: 'FETCH_REPOS_REQUEST' }
//{ type: 'FETCH_REPOS_FAILURE', error: 'request failed' }
//{ type: 'FETCH_REPOS_SUCCESS' response: { ... }}

export const fetchedRepos = (repos) => ({
    type:FETCHED_REPOS,
    repos: repos
})

export const fetchedCommits = (commits) => ({
    type:FETCHED_COMMITS,
    commits: commits
})

export const fetchReposRequest = (user) => {
    const URL = `users/${user}/repos`
    return dispatch => {
        return getApi(URL)
        .then(json => {
            console.log("repot tuli")
            return dispatch(fetchedRepos(json))
        })
        .catch(err => {
            console.log("error", err)
            throw err;
        })
    }

}

export const fetchCommitsRequest = (user, repo) => {
    console.log('käyttäjä', 'repo', repo)
    const URL = `repos/${user}/${repo}/commits?per_page=10`
    return dispatch => {
        return getApi(URL)
        .then(json => {
            console.log("commitit tuli")
            return dispatch(fetchedCommits(json))
        })
        .catch(err => {
            console.log("error", err)
            throw err;
        })
    }

}


/* getUserRepos = () => {

    return fetch('https://api.github.com/users/Pyke90').then((res) => res.json());
}

handleSubmit = () => {
    getUserRepos()
    .then((res) => {
        setRepo({repos: res});
        console.log(repo)
    });
} 

    return {

       repo
        
    }
    
}; */

export const fetchReposFailure = error => ({
    type: FETCH_REPOS_FAILURE,
    error: error
});

export const fetchReposSuccess = response => ({
    type: FETCH_REPOS_SUCCESS,
    response: []
});
