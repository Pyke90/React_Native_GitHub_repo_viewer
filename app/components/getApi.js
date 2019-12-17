export async function getApi (URL) {

    console.log('Haku päällä :D')
    console.log('urli', URL)
    try {
        const response = await fetch(
            `https://api.github.com/${URL}`
        );
        const responseJson = await response.json();
        console.log("responsejjsoni", responseJson)
        return responseJson
    }   catch (err) {
        console.error(err);
    }

}