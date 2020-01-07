import { FETCHED_REPOS, FETCHED_COMMITS,  } from './ActionTypes';
import { getApi } from '../../components/getApi';

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
            console.log("repos fetch success")
            dispatch(fetchedRepos(json))
        })
        .catch(err => {
            dispatch(fetchedRepos([]))
            //console.log("error", err)
            throw err;
        })
    }

}

export const fetchCommitsRequest = (user, repo) => {

    const URL = `repos/${user}/${repo}/commits?per_page=10`
    return dispatch => {
        return getApi(URL)
        .then(json => {
            console.log('commits fetch success')
            return dispatch(fetchedCommits(json))
        })
        .catch(err => {
            console.log("error", err)
            throw err;
        })
    }

}