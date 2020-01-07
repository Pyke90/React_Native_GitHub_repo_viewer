export async function getApi (URL) {

    return fetch (`https://api.github.com/${URL}`)
    .then(response => {
        if(response.status !== 200) {
            let err = new Error('Request failed');
            err.status = response.status;
            console.log(err)
            throw err
        };
        return response.json();
    })
}